import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronDown, Check, SlidersHorizontal, X } from "lucide-react";
import ListingCard from "../components/ListingCard";
import useFetchCategoryData from "../hooks/useFetchCategoryData";
import Loading from "../components/Loading";
import Error from "../components/Error";
import type { Product } from "../types";

const VISIBLE_PILLS_COUNT = 5;

const AllProducts = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isLoading, error, categories } = useFetchCategoryData();

  const activeCategory = searchParams.get("category");

  const visibleCategories = categories?.slice(0, VISIBLE_PILLS_COUNT) || [];
  const dropdownCategories = categories?.slice(VISIBLE_PILLS_COUNT) || [];
  const hasMoreCategories = dropdownCategories.length > 0;

  const isActiveCategoryInDropdown = dropdownCategories.some(
    (c) => String(c.id) === activeCategory,
  );
  const selectedDropdownCategory = dropdownCategories.find(
    (c) => String(c.id) === activeCategory,
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock scroll when mobile filter sheet is open
  useEffect(() => {
    document.body.style.overflow = isMobileFilterOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileFilterOpen]);

  const allProducts = useMemo(() => {
    if (!categories) return [];
    return categories.flatMap((category) =>
      (category.data || []).map((product: Product) => ({
        ...product,
        categoryId: category.id,
        categoryName: category.name,
      })),
    );
  }, [categories]);

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return allProducts;
    return allProducts.filter(
      (product) => product.categoryId === Number(activeCategory),
    );
  }, [allProducts, activeCategory]);

  const handleCategoryChange = (categoryId: number | null) => {
    if (categoryId === null) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", String(categoryId));
    }
    setSearchParams(searchParams);
    setIsDropdownOpen(false);
    setIsMobileFilterOpen(false);
  };

  if (isLoading) return <Loading />;
  if (error) return <Error onRetry={() => navigate("/")} />;

  const activeCategoryName = activeCategory
    ? categories.find((c) => c.id === Number(activeCategory))?.name
    : "All Products";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-25 lg:pt-20 pt-0 sm:pt-0 pb-6 sm:pb-8">
        <div className="flex flex-col gap-1 sm:gap-2">
          <p className="font-medium text-3xl sm:text-5xl md:text-6xl text-gray-900">
            {activeCategoryName}
          </p>
          <p className="text-gray-500 text-sm sm:text-lg">
            {filteredProducts.length} results
            {!activeCategory && ` across ${categories.length} categories`}
          </p>
        </div>
      </div>

      {/* ── Desktop filter pills (hidden on mobile) ── */}
      <div className="hidden sm:block px-4 sm:px-8 md:px-12 lg:px-25 pb-6 sm:pb-8 sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b border-gray-100">
        <div className="flex items-center gap-2 sm:gap-3 py-3 sm:py-4 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
              !activeCategory
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Products
          </button>

          {visibleCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                activeCategory === String(category.id)
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}

          {hasMoreCategories && (
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 sm:gap-2 ${
                  isActiveCategoryInDropdown
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {isActiveCategoryInDropdown
                  ? selectedDropdownCategory?.name
                  : "More"}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 sm:w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-30">
                  {dropdownCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm transition-colors flex items-center justify-between ${
                        activeCategory === String(category.id)
                          ? "bg-gray-50 text-gray-900 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span>{category.name}</span>
                      {activeCategory === String(category.id) && (
                        <Check size={14} className="text-gray-900" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Mobile sticky bar with active filter + filter button ── */}
      <div className="sm:hidden sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b border-gray-100 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1 min-w-0">
          {activeCategory && (
            <div className="flex items-center gap-1.5 bg-gray-900 text-white px-3 py-1.5 rounded-full text-xs font-medium shrink-0">
              <span>{activeCategoryName}</span>
              <button
                onClick={() => handleCategoryChange(null)}
                className="hover:text-gray-300 transition-colors"
              >
                <X size={12} />
              </button>
            </div>
          )}
          {!activeCategory && (
            <span className="text-xs text-gray-500 font-medium">
              All categories
            </span>
          )}
        </div>
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="shrink-0 flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-xs font-medium transition-colors"
        >
          <SlidersHorizontal size={13} />
          Filter
          {activeCategory && (
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          )}
        </button>
      </div>

      {/* ── Mobile filter bottom sheet ── */}
      {isMobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 sm:hidden shadow-2xl">
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 bg-gray-200 rounded-full" />
            </div>
            <div className="px-5 pb-8">
              <div className="flex items-center justify-between py-3 mb-2">
                <h3 className="font-bold text-gray-900 text-base">
                  Filter by Category
                </h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={18} className="text-gray-500" />
                </button>
              </div>

              <div className="flex flex-col gap-1 max-h-72 overflow-y-auto">
                <button
                  onClick={() => handleCategoryChange(null)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    !activeCategory
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>All Products</span>
                  {!activeCategory && <Check size={15} />}
                </button>

                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeCategory === String(category.id)
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{category.name}</span>
                    {activeCategory === String(category.id) && (
                      <Check size={15} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Products Grid */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-25 py-6 sm:py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-12">
            {filteredProducts.map((item) => (
              <ListingCard
                key={`${item.categoryId}-${item.id}`}
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 sm:py-20 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-5 sm:mb-6">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <p className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
              No products found
            </p>
            <p className="text-sm sm:text-base text-gray-500 mb-6">
              Try selecting a different category
            </p>
            <button
              onClick={() => handleCategoryChange(null)}
              className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      {filteredProducts.length > 0 && (
        <div className="px-4 sm:px-8 md:px-12 lg:px-25 pb-16 sm:pb-20 flex justify-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            Showing {filteredProducts.length} of {filteredProducts.length}{" "}
            products
          </p>
        </div>
      )}
    </div>
  );
};

export default AllProducts;

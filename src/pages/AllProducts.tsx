import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronDown, Check } from "lucide-react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  // const { addToCart, isAddedToCart } = useCart();
  const { isLoading, error, categories } = useFetchCategoryData();

  // Get active category from URL params, null means "all"
  const activeCategory = searchParams.get("category");

  // Split categories into visible pills and dropdown items
  const visibleCategories = categories?.slice(0, VISIBLE_PILLS_COUNT) || [];
  const dropdownCategories = categories?.slice(VISIBLE_PILLS_COUNT) || [];
  const hasMoreCategories = dropdownCategories.length > 0;

  // Check if active category is in the dropdown
  const isActiveCategoryInDropdown = dropdownCategories.some(
    (c) => String(c.id) === activeCategory,
  );

  // Get the name of the selected dropdown category
  const selectedDropdownCategory = dropdownCategories.find(
    (c) => String(c.id) === activeCategory,
  );

  // Close dropdown when clicking outside
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

  // Combine all products from all categories
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

  // Filter products based on selected category
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
  };

  // const handleAddToCart = (
  //   event: React.MouseEvent<Element, MouseEvent>,
  //   item: Product,
  // ) => {
  //   event.stopPropagation();
  //   if (!isAddedToCart(item.id)) {
  //     addToCart({ ...item, quantity: 1 });
  //   }
  // };

  if (isLoading) return <Loading />;
  if (error) return <Error onRetry={() => navigate("/")} />;

  const activeCategoryName = activeCategory
    ? categories.find((c) => c.id === Number(activeCategory))?.name
    : "All Products";

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="px-6 md:px-12 lg:px-25 pt-20 pb-8">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-5xl md:text-6xl text-gray-900">
            {activeCategoryName}
          </p>
          <p className="text-gray-500 text-lg">
            {filteredProducts.length} results
            {!activeCategory && ` across ${categories.length} categories`}
          </p>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="px-6 md:px-12 lg:px-25 pb-8 sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b border-gray-100">
        <div className="flex items-center gap-3 py-4">
          {/* All Products Pill */}
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              !activeCategory
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Products
          </button>

          {/* Visible Category Pills */}
          {visibleCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === String(category.id)
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}

          {/* More Dropdown */}
          {hasMoreCategories && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isActiveCategoryInDropdown
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {isActiveCategoryInDropdown
                  ? selectedDropdownCategory?.name
                  : "More"}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-30">
                  {dropdownCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full px-4 py-3 text-left text-sm transition-colors flex items-center justify-between ${
                        activeCategory === String(category.id)
                          ? "bg-gray-50 text-gray-900 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span>{category.name}</span>
                      {activeCategory === String(category.id) && (
                        <Check size={16} className="text-gray-900" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-6 md:px-12 lg:px-25 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
            {filteredProducts.map((item) => (
              <ListingCard
                key={`${item.categoryId}-${item.id}`}
                id={item.id}
                title={item.title}
                image={item.image}
                // unit={item.unit}
                // price={item.price}
                // pieces={item.pieces}
                description={item.description}
                // sellData={item.sellData}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
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
            <p className="text-xl font-medium text-gray-900 mb-2">
              No products found
            </p>
            <p className="text-gray-500 mb-6">
              Try selecting a different category
            </p>
            <button
              onClick={() => handleCategoryChange(null)}
              className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      {/* Load More / Pagination Placeholder */}
      {filteredProducts.length > 0 && (
        <div className="px-6 md:px-12 lg:px-25 pb-20 flex justify-center">
          <p className="text-gray-400 text-sm">
            Showing {filteredProducts.length} of {filteredProducts.length}{" "}
            products
          </p>
        </div>
      )}
    </div>
  );
};

export default AllProducts;

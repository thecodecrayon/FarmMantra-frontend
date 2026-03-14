import { useNavigate, useParams } from "react-router-dom";
import ListingCard from "../components/ListingCard";
import useFetchProductByCategory from "../hooks/useFetchProductByCategory";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { PackageOpen, ArrowUpRight } from "lucide-react";

const CategoryListing = () => {
  const navigate = useNavigate();
  const { id: categoryId } = useParams();
  const { records, isLoading, error } = useFetchProductByCategory(categoryId);

  if (isLoading) return <Loading />;
  if (error) return <Error onRetry={() => navigate("/")} />;

  const products = records?.products || [];
  const totalCount = records?.totalCount || 0;
  const hasProducts = products.length > 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-20 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <p className="text-sm font-medium text-orange-600 tracking-widest uppercase mb-4">
            Collection
          </p>

          {/* Title Row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl text-gray-900 tracking-tight leading-[0.9]">
              {records?.name || "Products"}
            </h1>

            {totalCount > 0 && (
              <div className="flex items-baseline gap-3 lg:pb-3">
                <span className="text-6xl md:text-7xl font-bold text-gray-200">
                  {String(totalCount).padStart(2, "0")}
                </span>
                <span className="text-gray-400 text-lg">
                  {totalCount === 1 ? "piece" : "pieces"}
                </span>
              </div>
            )}
          </div>

          {/* Divider with dot */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-gray-200 flex-1" />
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <div className="h-px bg-gray-200 flex-1" />
          </div>
        </div>
      </div>

      {/* Products Section */}
      {hasProducts ? (
        <div className="px-6 md:px-12 lg:px-20 pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Showing count */}
            <p className="text-sm text-gray-400 mb-8">
              Showing {products.length} of {totalCount}
            </p>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
              {products.map((item: any, index: number) => (
                <div key={item.id} className="group">
                  {/* Product Number */}
                  <p className="text-xs text-gray-300 font-mono mb-3 group-hover:text-orange-400 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <ListingCard
                    id={item.id}
                    title={item.name}
                    image={item.images?.[0]}
                    originalPrice={item.price}
                    discount={item.discountInPercent}
                    description={item.description}
                  />
                </div>
              ))}
            </div>

            {/* Load More */}
            {products.length < totalCount && (
              <div className="mt-20 flex justify-center">
                <button className="group flex items-center gap-3 text-gray-900 font-medium hover:text-orange-600 transition-colors">
                  <span className="text-lg">Load more</span>
                  <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <ArrowUpRight
                      size={18}
                      className="group-hover:rotate-45 transition-transform"
                    />
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="px-6 md:px-12 lg:px-20 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="py-24 border-t border-gray-100">
              <div className="max-w-sm mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-gray-200 rounded-2xl">
                  <PackageOpen
                    size={28}
                    strokeWidth={1.5}
                    className="text-gray-400"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  No products yet
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We're curating this collection. Check back soon for
                  handcrafted pieces.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryListing;

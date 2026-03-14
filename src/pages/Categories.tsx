import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useFetchCategoryData from "../hooks/useFetchCategoryData";
import Loading from "../components/Loading";
import Error from "../components/Error";

const effects = [
  "from-amber-500/80 to-orange-600/80",
  "from-rose-500/80 to-pink-600/80",
  "from-purple-500/80 to-indigo-600/80",
  "from-teal-500/80 to-cyan-600/80",
  "from-violet-500/80 to-purple-600/80",
  "from-emerald-500/80 to-green-600/80",
  "from-lime-500/80 to-green-600/80",
];

const Categories = () => {
  const { isLoading, error, categories } = useFetchCategoryData();
  const navigate = useNavigate();

  const handleNavigation = (id: number) => navigate(`/categories/${id}`);

  if (isLoading) return <Loading />;
  if (error) return <Error onRetry={() => navigate("/")} />;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 px-4 sm:px-8 md:px-12 lg:px-20 pt-0 pb-16 lg:pt-16 lg:pb-16">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-16 text-center">
        <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
          ✨ Discover Our Collections
        </div>
        <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-3 sm:mb-4">
          Shop By Category
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">
          Explore handcrafted treasures from talented artisans across India
        </p>
      </div>

      {/* CATEGORIES — mobile: uniform card list; tablet+: bento grid */}
      <div className="max-w-7xl mx-auto">
        {/* ── Mobile layout: 2-col uniform grid ── */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {categories.map((category, index) => {
            const colorEffect = effects[index % effects.length];
            const isFeatured = index === 0;

            return (
              <div
                key={category.id}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                  isFeatured ? "col-span-2 h-52" : "h-40"
                }`}
                onClick={() => handleNavigation(category.id)}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${colorEffect} opacity-50 group-active:opacity-70 transition-opacity duration-300`}
                />

                {/* Dark bottom gradient for text legibility */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute inset-0 p-3.5 flex flex-col justify-between">
                  {/* Top: product count */}
                  <div className="flex justify-end">
                    <div className="bg-black/30 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-bold border border-white/20">
                      {category.totalItems} Products
                    </div>
                  </div>

                  {/* Bottom: name + arrow */}
                  <div className="flex items-end justify-between">
                    <h3
                      className={`font-bold text-white leading-tight ${isFeatured ? "text-2xl" : "text-base"}`}
                    >
                      {category.name}
                    </h3>
                    <div className="bg-white/20 backdrop-blur-sm p-1.5 rounded-full border border-white/30 shrink-0 ml-2">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Border glow on active */}
                <div className="absolute inset-0 border-2 border-white/40 opacity-0 group-active:opacity-100 transition-opacity duration-200 rounded-2xl" />
              </div>
            );
          })}
        </div>

        {/* ── Tablet+ layout: original bento grid ── */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4 md:gap-5">
          {categories.map((category, index) => {
            const sizeClasses = [
              "lg:col-span-2 lg:row-span-2 min-h-[420px] md:min-h-[500px]",
              "min-h-[240px] md:min-h-[280px]",
              "min-h-[240px] md:min-h-[280px]",
              "lg:col-span-2 min-h-[240px] md:min-h-[280px]",
              "min-h-[260px] md:min-h-[320px]",
              "min-h-[240px] md:min-h-[280px]",
              "min-h-[260px] md:min-h-[320px]",
            ];

            const colorEffect = effects[index % effects.length];

            return (
              <div
                key={category.id}
                className={`relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group ${sizeClasses[index] ?? "min-h-[240px]"}`}
                onClick={() => handleNavigation(category.id)}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${colorEffect} opacity-30 group-hover:opacity-70 transition-opacity duration-300`}
                />

                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="bg-white/20 backdrop-blur-md text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold border border-white/30">
                      {category.totalItems} Products
                    </div>
                  </div>

                  <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                    <h3
                      className={`font-bold text-white mb-2 md:mb-3 ${
                        index === 0
                          ? "text-3xl md:text-5xl"
                          : "text-xl md:text-3xl"
                      }`}
                    >
                      {category.name}
                    </h3>

                    <div className="flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="bg-white/20 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/30 text-xs md:text-sm">
                        Shop Now
                      </span>
                      <div className="bg-white/20 backdrop-blur-md p-1.5 md:p-2 rounded-full border border-white/30 group-hover:translate-x-1 transition-transform">
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 border-4 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl md:rounded-3xl shadow-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;

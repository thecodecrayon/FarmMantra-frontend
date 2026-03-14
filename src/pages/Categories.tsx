import React from "react";
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

  const handleNavigation = (id: number) => {
    navigate(`/categories/${id}`);
  };

  if (isLoading) return <Loading />;

  if (error)
    return (
      <Error
        onRetry={() => {
          navigate("/");
        }}
      />
    );

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 px-6 md:px-12 lg:px-20 py-20">
      {/* HEADER; */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          ✨ Discover Our Collections
        </div>
        <h2 className="font-bold text-5xl md:text-6xl text-gray-900 mb-4">
          Shop By Category
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Explore handcrafted treasures from talented artisans across India
        </p>
      </div>

      {/* CATEGORIES GRID; */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-5">
        {categories.map((category, index) => {
          const sizeClasses = [
            "lg:col-span-2 lg:row-span-2 min-h-[500px]",
            "min-h-[280px]",
            "min-h-[280px]",
            "lg:col-span-2 min-h-[280px]",
            "min-h-[320px]",
            "min-h-[280px]",
            "min-h-[320px]",
          ];

          // Get color from effects array based on index, cycling through if needed
          const colorEffect = effects[index % effects.length];

          return (
            <div
              key={category.id}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group ${sizeClasses[index]}`}
              onClick={() => handleNavigation(category.id)}
            >
              {/* IMAGE; */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* COLOURED GRADIENT OVERLAY; */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${colorEffect} opacity-30 group-hover:opacity-70 transition-opacity duration-300`}
              ></div>

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
                    {category.totalItems} Products
                  </div>
                </div>

                {/* BOTTOM CONTENT; */}
                <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                  <h3
                    className={`font-bold text-white mb-3 ${
                      index === 0
                        ? "text-4xl md:text-5xl"
                        : "text-2xl md:text-3xl"
                    }`}
                  >
                    {category.name}
                  </h3>

                  {/* SHOP NOW BUTTON */}
                  <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                      Shop Now
                    </span>
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* HOVER GLOW EFFECT; */}
              <div className="absolute inset-0 border-4 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl shadow-2xl"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

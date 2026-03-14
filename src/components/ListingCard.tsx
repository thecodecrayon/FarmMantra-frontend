import { Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ListingCardProps } from "../types";

const ListingCard = ({
  id,
  title,
  image,
  originalPrice = 0,
  discount,
}: Omit<ListingCardProps, "addToCart" | "isAddedToCart">) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const price = Math.round(
    originalPrice - (Number(discount) / 100) * Number(originalPrice),
  );
  const hasDiscount = discount && Number(discount) > 0;

  const navigateToDetailPage = () => navigate(`/item/${id}`);

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
      onClick={navigateToDetailPage}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
        )}

        <img
          src={image}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/400x400/f5f5f4/a8a29e?text=No+Image";
            setImageLoaded(true);
          }}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Favorite — always visible on touch devices, hover on desktop */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute top-2.5 right-2.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
            isLiked
              ? "bg-red-50 opacity-100"
              : "bg-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          }`}
        >
          <Heart
            size={15}
            className={`transition-all duration-300 ${
              isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>

        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-orange-500 rounded-lg">
            <span className="text-[10px] sm:text-xs font-bold text-white">
              {discount}% OFF
            </span>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-gray-900 leading-snug line-clamp-2 mb-2 sm:mb-3 text-sm sm:text-base group-hover:text-orange-600 transition-colors">
          {title}
        </h3>

        <div className="flex items-end justify-between gap-2">
          <div>
            {hasDiscount && (
              <span className="text-xs text-gray-400 line-through block">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-lg sm:text-xl font-bold text-gray-900">
              ₹{price.toLocaleString()}
            </span>
          </div>

          <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-orange-500 transition-colors shrink-0">
            View →
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;

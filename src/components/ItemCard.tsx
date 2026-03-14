import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

const ItemCard = ({ id, title, image, price, description }: Props) => {
  const navigate = useNavigate();

  const navigateToDetailPage = () => {
    navigate(`/item/${id}`);
  };

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl border border-gray-200 hover:border-gray-300 w-full"
      onClick={navigateToDetailPage}
    >
      {/* IMAGE SECTION */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4 sm:p-5 md:p-6">
        <div className="mb-3 md:mb-4">
          <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl mb-1.5 md:mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs sm:text-sm text-gray-400 mb-0.5">Price</p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">
              ₹{price.toLocaleString()}
            </p>
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-orange-500 transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";

type sellDataProps = {
  sold: number;
  total: number;
};

type Item = {
  id: number;
  price: number;
  title: string;
  image: string;
  description: string;
  sellData: sellDataProps;
};

type Props = {
  id: number;
  title: string;
  items: Item[];
  bgColor?: string;
};

const ShowItemsSection = ({
  id,
  title,
  items,
  bgColor = "bg-white",
}: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const CARD_WIDTH = 280;
  const GAP = 16;
  const SCROLL_AMOUNT = CARD_WIDTH + GAP;

  const handleNavigate = () => {
    navigate(`/categories/${id}`);
  };

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`py-10 md:py-16 ${bgColor}`}>
      {/* HEADER */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h3>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Navigation Arrows */}
          <button
            onClick={() => handleScroll("left")}
            className="p-2 md:p-3 rounded-full border-2 border-gray-200 text-gray-600 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="p-2 md:p-3 rounded-full border-2 border-gray-200 text-gray-600 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          {/* View All Button */}
          <button
            onClick={handleNavigate}
            className="flex items-center gap-1.5 md:gap-2 bg-gray-900 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-gray-800 transition-colors ml-1 md:ml-2"
          >
            View All
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 sm:px-8 md:px-12 lg:px-20 pb-4"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="shrink-0 w-[260px] sm:w-[280px] md:w-[320px]"
          >
            <ItemCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowItemsSection;

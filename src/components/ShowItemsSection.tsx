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

  const CARD_WIDTH = 320;
  const GAP = 24;
  const SCROLL_AMOUNT = CARD_WIDTH + GAP;

  const handleNavigate = () => {
    navigate(`/categories/${id}`);
  };

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`py-16 ${bgColor}`}>
      {/* HEADER */}
      <div className="px-6 md:px-12 lg:px-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h3>

        <div className="flex items-center gap-3">
          {/* Navigation Arrows */}
          <button
            onClick={() => handleScroll("left")}
            className="p-3 rounded-full border-2 border-gray-200 text-gray-600 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="p-3 rounded-full border-2 border-gray-200 text-gray-600 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* View All Button */}
          <button
            onClick={handleNavigate}
            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors ml-2"
          >
            View All
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-6 md:px-12 lg:px-20 pb-4"
      >
        {items.map((item) => (
          <div key={item.id} className="shrink-0 w-[320px]">
            <ItemCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowItemsSection;

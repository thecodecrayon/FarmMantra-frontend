import ItemCardSkeleton from "./ItemCardSkeleton";
import Skeleton from "./Skeleton";

type Props = {
  bgColor?: string;
  cardCount?: number;
};

const ShowItemsSectionSkeleton = ({
  bgColor = "bg-white",
  cardCount = 4,
}: Props) => {
  return (
    <div className={`py-10 md:py-16 ${bgColor}`}>
      {/* HEADER - same structure as ShowItemsSection */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <Skeleton className="h-8 sm:h-9 md:h-10 w-48 sm:w-56 md:w-64" />

        <div className="flex items-center gap-2 md:gap-3">
          <Skeleton className="h-10 w-10 md:h-12 md:w-12 rounded-full" />
          <Skeleton className="h-10 w-10 md:h-12 md:w-12 rounded-full" />
          <Skeleton className="h-10 md:h-12 w-28 md:w-32 rounded-full" />
        </div>
      </div>

      {/* SLIDER - same gap/padding as ShowItemsSection */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto px-4 sm:px-8 md:px-12 lg:px-20 pb-4">
        {Array.from({ length: cardCount }).map((_, idx) => (
          <div
            key={idx}
            className="shrink-0 w-[260px] sm:w-[280px] md:w-[320px]"
          >
            <ItemCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowItemsSectionSkeleton;

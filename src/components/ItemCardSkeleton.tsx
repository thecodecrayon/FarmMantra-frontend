import Skeleton from "./Skeleton";

const ItemCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 w-full">
      {/* IMAGE SECTION - same heights as ItemCard */}
      <div className="h-48 sm:h-56 md:h-64 bg-gray-100">
        <Skeleton className="w-full h-full rounded-none" />
      </div>

      {/* CONTENT SECTION - same padding as ItemCard */}
      <div className="p-4 sm:p-5 md:p-6">
        <div className="mb-3 md:mb-4">
          <Skeleton className="h-5 sm:h-6 md:h-7 w-3/4 mb-2" />
          <Skeleton className="h-3.5 sm:h-4 w-full mb-1.5" />
          <Skeleton className="h-3.5 sm:h-4 w-2/3" />
        </div>

        <div className="flex items-end justify-between">
          <div>
            <Skeleton className="h-3 sm:h-3.5 w-10 mb-1.5" />
            <Skeleton className="h-7 sm:h-8 md:h-9 w-20" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );
};

export default ItemCardSkeleton;

import Skeleton from "./Skeleton";

const CategoryBubbleSkeleton = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-2 md:gap-3">
      <Skeleton className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-25 lg:h-25 rounded-full" />
      <Skeleton className="h-2.5 sm:h-3 md:h-3.5 w-10 sm:w-12 md:w-14 rounded" />
    </div>
  );
};

export default CategoryBubbleSkeleton;

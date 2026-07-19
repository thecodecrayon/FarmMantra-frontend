import CategoryBubble from "./CategoryBubble";
import CategoryBubbleSkeleton from "./CategoryBubbleSkeleton";

type Item = {
  id: number;
  image: string;
  name: string;
};

const SKELETON_COUNT = 6;

const CategoryBelt = ({
  items,
  loading,
}: {
  items: Item[];
  loading: boolean;
}) => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-25 py-8 md:py-15 overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 sm:gap-4 md:gap-5 md:justify-between lg:justify-start min-w-max md:min-w-0 w-full">
        {loading
          ? Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
              <CategoryBubbleSkeleton key={idx} />
            ))
          : items &&
            items.length > 0 &&
            items.map((item: Item) => {
              const link = !item.id ? "/categories" : `/categories/${item.id}`;
              return (
                <CategoryBubble
                  key={item.id}
                  image={item.image}
                  title={item.name}
                  link={link}
                />
              );
            })}
      </div>
    </div>
  );
};

export default CategoryBelt;

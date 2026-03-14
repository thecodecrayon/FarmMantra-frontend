import CategoryBubble from "./CategoryBubble";

type Item = {
  id: number;
  image: string;
  name: string;
};

const CategoryBelt = ({ items }: { items: Item[] }) => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-25 py-8 md:py-15 overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 sm:gap-4 md:gap-5 md:justify-between lg:justify-start min-w-max md:min-w-0 w-full">
        {items?.length &&
          items?.map((item: Item) => {
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

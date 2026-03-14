import CategoryBubble from "./CategoryBubble";

type Item = {
  id: number;
  image: string;
  name: string;
};

const CategoryBelt = ({ items }: { items: Item[] }) => {
  return (
    <div className="px-25 py-15 flex gap-5">
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
  );
};

export default CategoryBelt;

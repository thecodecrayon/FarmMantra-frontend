import type { Product } from "../types";

type sellDataProps = {
  sold: number;
  total: number;
};

type SliderDataProp = {
  currentIndex: number;
  itemsPerView: number;
};

type Item = {
  id: number;
  unit: string;
  price: number;
  title: string;
  image: string;
  pieces: number;
  description: string;
  sellData: sellDataProps;
};

type ItemComponentProps = {
  id: number;
  title: string;
  unit: string;
  price: number;
  pieces: number;
  image: string;
  description: string;
  sellData: sellDataProps;
};

type OperationProps = {
  handleAddToCart: (event: React.MouseEvent, item: Product) => void;
  isAddedToCart: (id: number) => boolean;
};

type Props = {
  items: Item[];
  Component: React.ComponentType<ItemComponentProps>;
  sliderData: SliderDataProp;
  operations?: OperationProps;
};

const HorizontalSlider = ({
  items,
  Component,
  sliderData,
  operations,
}: Props) => {
  const { currentIndex, itemsPerView } = sliderData;

  // Calculate the maximum index to prevent sliding past the last item
  const maxIndex = Math.max(0, items.length - itemsPerView);
  const clampedIndex = Math.min(currentIndex, maxIndex);

  return (
    <div className="flex items-center justify-center p-2 overflow-hidden ">
      <div className="w-full">
        <div className="relative flex items-center gap-4">
          {/* Slider Container */}
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${clampedIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  minWidth: "208px",
                }}
              >
                <Component
                  {...item}
                  isAddedToCart={operations?.isAddedToCart}
                  handleAddToCart={(
                    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => operations?.handleAddToCart(event, item)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlider;

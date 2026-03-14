export type sellDataType = {
  sold: number;
  total: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  originalPrice?: number;
  discount?: number;
};

export type CartItem = Product & {
  quantity: number;
  price: number;
  pieces: number;
  unit: number;
};

export type ListingCardProps = Product & {
  addToCart: (event: React.MouseEvent) => void;
  isAddedToCart: (id: number) => boolean;
};

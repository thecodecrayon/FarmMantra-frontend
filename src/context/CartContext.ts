import { createContext } from "react";
import type { CartItem } from "../types";

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  isAddedToCart: (id: number) => boolean;
  addMultipleToCart: (items: CartItem[]) => void;
  updateCart: (updater: (prev: CartItem[]) => CartItem[]) => void;
};

const defaultValue: CartContextType = {
  cart: [],
  addToCart: () => {},
  isAddedToCart: () => false,
  addMultipleToCart: () => {},
  updateCart: () => {},
};

export const CartContext = createContext<CartContextType>(defaultValue);

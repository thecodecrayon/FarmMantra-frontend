import { useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { CartItem } from "../types";

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };

  const addMultipleToCart = (items: CartItem[]) => {
    setCart(items);
  };

  const updateCart = (updater: (prev: CartItem[]) => CartItem[]) => {
    setCart(updater);
  };

  const isAddedToCart = (id: number) => {
    const cartIDs = cart.map((item) => item.id);

    return cartIDs.includes(id);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, addMultipleToCart, updateCart, isAddedToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

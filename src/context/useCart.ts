import { useContext } from "react";
import { CartContext } from "./CartContext";

const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider />");

  return ctx;
};

export default useCart;

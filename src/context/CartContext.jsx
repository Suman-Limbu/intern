import { createContext, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cart = "helllo";
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
export const useCart = () => useContext(CartContext);

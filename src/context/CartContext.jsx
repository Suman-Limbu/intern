import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const reducer = (state, action) => {
    if (action.type === "add") {
      return [...state, action.payload];
    }
    return state;
  };
  const [cart, dispatch] = useReducer(reducer, []);
  console.log(cart);
  const addToCart = (product) => {
    dispatch({ type: "add", payload: product });
  };
  return (
    <CartContext.Provider value={{addToCart}}>{children}</CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);

import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.payload];

      case "remove":
        return state.filter((itm) => itm.id !== action.payload);

      default:
        return state;
    }
  };
  const [cart, dispatch] = useReducer(reducer, []);
  const addToCart = (product) => {
    dispatch({ type: "add", payload: product });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "remove", payload: id });
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);

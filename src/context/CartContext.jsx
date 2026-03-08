import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const reducer = (state, action) => {
    if (action.type === "add") {
      return [...state, action.payload];
    }
    if (action.type === "remove") {
      return state.filter((itm) => itm.id !== action.payload);
    }
    return state;
  };
  const [cart, dispatch] = useReducer(reducer, []);
  console.log(cart);
  const addToCart = (product) => {
    dispatch({ type: "add", payload: product });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "remove", payload: id });
  };
  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);

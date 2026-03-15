import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from "react";

// Action types
const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

// Create context
export const CartContext = createContext();

// Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD: {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        // Increase quantity if item exists
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      // Add new item with quantity = 1
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case ACTIONS.REMOVE:
      return state.filter((item) => item.id !== action.payload);

    case ACTIONS.INCREMENT:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

    case ACTIONS.DECREMENT:
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);

    default:
      return state;
  }
};

// Initializer for localStorage
const initializer = () => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};

// Provider component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], initializer);

  // Persist cart in localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Actions
  const addToCart = (product) =>
    dispatch({ type: ACTIONS.ADD, payload: product });
  const removeFromCart = (id) =>
    dispatch({ type: ACTIONS.REMOVE, payload: id });
  const increment = (id) => dispatch({ type: ACTIONS.INCREMENT, payload: id });
  const decrement = (id) => dispatch({ type: ACTIONS.DECREMENT, payload: id });

  // Derived value
  const totalPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart],
  );

  // Context value (memoized)
  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      increment,
      decrement,
      totalPrice,
    }),
    [cart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook
export const useCart = () => useContext(CartContext);

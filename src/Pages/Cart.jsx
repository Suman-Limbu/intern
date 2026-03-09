import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const handleRemove = (id) => {
    removeFromCart(id);
  };
  return (
    <>
      <div>
        {cart.length > 0 ? (
          <div>
            {cart.map((itm) => (
              <div key={itm.id}>
                <h3>{itm.title}</h3>
                <p>{itm.price}</p>
                <button
                  className="bg-red-500/60 hover:bg-red-500 rounded-md "
                  onClick={() => handleRemove(itm.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-4xl font-bold">No items</div>
        )}
      </div>
    </>
  );
};

export default Cart;

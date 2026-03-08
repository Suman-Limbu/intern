import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart ,removeFromCart} = useCart();
const handleRemove=(id)=>{
removeFromCart(id)
}
  return (
   <>
    <div>
      {cart.map((itm) => (
        <div key={itm.id}>
          <h3>{itm.title}</h3>
          <p>{itm.price}</p>
          <button onClick={()=>handleRemove(itm.id)}>Remove</button>
        </div>
      ))}
    </div>
   
    </>
  );
};

export default Cart;
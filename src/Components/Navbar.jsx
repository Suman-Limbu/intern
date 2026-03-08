import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  return (
    <div className="w-full bg-blue-200 h-[60px]">
      <nav onClick={() => navigate("/cart")}>Cart</nav>
      <div className="bg-red-500 rounded-full w-[20px]">{cart.length}</div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { CarTaxiFrontIcon } from "lucide-react";

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  return (
    <div className="w-full bg-slate-600 h-[60px] flex items-center justify-between px-6">
      <nav className="w-7xl flex gap-6 font-semibold text-lg cursor-pointer">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>

        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="flex gap-2 items-center">
        <div className="">
         <CarTaxiFrontIcon/>

        </div>
        <span className="bg-red-500 rounded-full w-[20px] h-[20px]">
          {cart.length}
         
        </span>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;

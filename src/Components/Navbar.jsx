import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Login from "../Pages/Auth/Login";

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  return (
    <div className="w-full bg-blue-200 h-[60px] flex">
    <nav>
      <NavLink to="/">
      Home
      </NavLink>
       <NavLink to="/products">
      Products
      </NavLink>
      
       <NavLink to="/cart">
      Cart
      </NavLink>
       <NavLink to="/contact">
      Contact
      </NavLink>
    </nav>
    
      <div className="bg-red-500 rounded-full w-[20px] h-[20px]">
        {cart.length}
      </div>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default Navbar;

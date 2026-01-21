import React from 'react'
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import Logo from './Logo';
const NavBar = () => {
  return (
    <>
    <div className="container mx-auto py-3 px-7 shadow ">
<div className="flex justify-between items-center">
  <div className="w-223 flex justify-between font-medium">
  <div>
    <Link to="/" className="hover:font-extrabold"><Logo/></Link> 
  </div>

   <div className="space-x-5 ">
    <Link to="/" className="hover:text-blue-500">Home </Link>
<Link to="/about" className="hover:text-blue-500">About</Link>
<Link to="/products" className="hover:text-blue-500">Products</Link>
<Link to="contact" className="hover:text-blue-500">Contact</Link>
   </div>
 
</div>
<div><FaCartShopping className="text-black"/></div>
</div>

    </div>
    </>
  )
}

export default NavBar;
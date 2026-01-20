import React from 'react'
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import Logo from './Ui/Logo';
const Header = () => {
  return (
    <>
    <div className="container mx-auto py-3 px-6 shadow ">
<div className="flex justify-between items-center">
  <div className=" flex space-x-4 font-medium">
  <Link to="/"><Logo/></Link> 
  <Link to="/">Home </Link>
<Link to="/about">About</Link>
<Link to="/products">Products</Link>
<Link to="contact">Contact</Link>
</div>
<div><FaCartShopping className="text-black"/></div>
</div>

    </div>
    </>
  )
}

export default Header;
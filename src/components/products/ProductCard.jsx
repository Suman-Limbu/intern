import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const productCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col  justify-between items-center bg-gradient-to-r from-gray-500 to-gray-300 rounded-lg ">
        {/* <img src={product.image} className="w-75 mt-4"/> 
       
        <div className="flex flex-col justify-between">
      
           <h1 className="text-2xl font-semibold items-start">{product.name}</h1>
        <p>{product.price}</p>
     
         <p>{product.brand}</p> */}

        <img
          className="bg-gray-500  lg:w-80 lg:h-80 m-5 rounded-lg object-cover "
          src={product.image}
        />
        <div className="flex items-center justify-between container mx-auto px-4">
          <div>
            <h1
              className="text-2xl font-semibold cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {product.name}
            </h1>
            <p className="font-bold text-cyan-900 text-3xl py-3">
              Rs. {product.price}
            </p>
            <span className="bg-blue-300 px-2 py-0.5 rounded-lg">
              {product.brand}
            </span>
          </div>

          <div className="flex  gap-1">
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <p className="bg-yellow-200 px-2 rounded-md">5.0</p>
          </div>
          
        </div>

        <button className="bg-violet-400 my-4 py-2 mx-4 w-60 rounded-lg md:font-medium items-center lg:text-2xl lg:font-bold text-gray-600 hover:shadow-md cursor-pointer">
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default productCard;

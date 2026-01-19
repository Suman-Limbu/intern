import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const productCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center container mx-auto justify-center">
        <div className="bg-gray-200 w-100 h-100 ">
          <img
            className="bg-gray-500 w-80 h-60 m-2 rounded-lg cover ml-10"
            src={product.image}
          />

          <h1
            className="text-2xl px-4 font-semibold"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            {product.name}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-cyan-900 text-3xl py-3 px-4">
              Rs. {product.price}
            </p>
            <span className="bg-blue-300 px-2 py-0.5 rounded-lg">
              {product.brand}
            </span>

            <div className="flex mr-8 gap-1">
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <p className="bg-yellow-200 px-2 rounded-md">5.0</p>
            </div>
          </div>

          <button className="bg-violet-400 py-1 my-1  ml-4 w-92 rounded-lg  items-center text-2xl font-semibold text-gray-600 hover:shadow-md">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default productCard;

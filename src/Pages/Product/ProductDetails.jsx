
import React from "react";
import image from "../../assets/iphone.webp";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  return (
    <> 
   
  <div className=" container mx-auto ">
          <div className="flex justify-between">
            {/* first part */}
            <div className="">
              <img src={image} className="w-90 h-80 cover " />
            </div>
            {/* second part */}
            <div className="">
              <h1 className="font-semibold text-3xl">
                Apple iPhone 15 | 6.1" Super Retina XDR display | A16 Bionic
                Chipset | 48MP Main Camera with 2X Telephoto
              </h1>
              <div className="text-yellow-300 flex m-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className=" text-gray-400 mb-3">
                Brand: <span className="text-blue-500 ">Apple </span>|
                <span className="text-blue-500"> More mobiles from apple</span>
              </p>
              <hr className="text-gray-400" />
              <p className="text-orange-400 font-semibold text-3xl m-3 items-center ">
                {" "}
                Rs. 110,000
              </p>
              <hr className="text-gray-400" />
              <p className=" text-gray-500 my-3">
                Color Family{" "}
                <span className="text-black font-semibold pl-3">
                  please select the option
                </span>
              </p>
              <div className="flex items-center m-2 w-15">
                <img src={image} />
                <img src={image} />
                <img src={image} />
                <img src={image} />
              </div>
              <p className=" text-gray-500 pt-3">
                RAM Memory
                <span className="text-black font-semibold pl-3">6GB</span>
              </p>
              <p className=" text-gray-500 pt-3">
                <p>Storage</p> capacity
                <span className="text-black font-semibold pl-10 ">128GB</span>
              </p>
              <p className=" text-gray-500 py-3 ">Quantity</p>
              <div className="flex gap-6">
                <button className="text-white bg-blue-500 rounded-lg text-[20px] px-8 py-1">
                  Buy Now
                </button>
                <button className="text-white bg-orange-500 rounded-lg text-[20px] px-8 py-1">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* third part */}
          <div></div>
        </div>
    </>
  );
};

export default ProductDetails;

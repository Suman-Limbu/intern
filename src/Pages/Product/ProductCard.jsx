import React from "react";
import { FaStar } from "react-icons/fa";
import image from "../../assets/iphone.webp";
const productCard = () => {
  return (
    <>
      <div className="flex items-center container mx-auto justify-center">
        <div className="bg-gray-200 w-100 h-100 ">
          <img
            className="bg-gray-500 w-80 h-60 m-2 rounded-lg cover ml-10"
            src={image}
          />
          <h1 className="text-2xl px-4 font-semibold">Iphone 15 Pro - Pink</h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-cyan-900 text-3xl py-3 px-4">$499</p>

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

      {/* this is another part */}

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

export default productCard;

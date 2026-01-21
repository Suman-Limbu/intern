import React from "react";
import image from "../../assets/resumeai.png";
import Button from "../Ui/Button";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    
      <div className="container mx-auto ">
        <div className="h-118 bg-gradient-to-r from-green-600 to-blue-400  px-14 ">
          <div className="flex justify-between items-center pt-15">
            <div>
            <h1 className="text-5xl font-extrabold text-blue-300 ">
              Looking For Online Electronic Products
            </h1>
            <p className="text-3xl font-bold text-white pt-4">
              Find best electronic products with best prices
            </p>
          </div>
          <div className="mr-25">
            <img src={image} className="cover w-85 " />
          </div>
          </div>
        <Link to="/products">  <Button text="ShopNow"/></Link>
        </div>
      </div>
    
  );
};

export default HeroSection;

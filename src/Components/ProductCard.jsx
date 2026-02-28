import React from "react";

const ProductCard = ({  title, brand, category, price, image }) => {
  return (
    <>
      <div className="bg-yellow-200 w-[300px] h-[300px] rounded-lg shadow-lg py-3 px-5">
        <img src={image} className="w-[100px]"/>
        <h1>{title}</h1>
        <span>{price}</span>
        <span>{brand}</span>
        <span>{category}</span>
      </div>
    </>
  );
};

export default ProductCard;

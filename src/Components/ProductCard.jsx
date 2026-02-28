import React from "react";

const ProductCard = ({ id, title, brand, category, price, image }) => {
  return (
    <>
      <div className="bg-yellow-200 rounded-lg shadow-lg py-3 px-5">
        <img src={image}/>
        <h1>{title}</h1>
        <span>{price}</span>
      </div>
    </>
  );
};

export default ProductCard;

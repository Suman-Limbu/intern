import React from "react";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import { product } from "./data";

const Products = () => {
  return (
    <>
      <div>
        <div className=" grid grid-cols-3 gap-3">
          {product.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
        <ProductDetails />
      </div>
    </>
  );
};

export default Products;

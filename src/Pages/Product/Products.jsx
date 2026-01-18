import React from "react";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import { product } from "./data";


const Products = () => {

  return (
    <>
      <div>
        <div className="mb-10">
          <ProductCard />
        </div>
        <ProductDetails />
       {product.name}
       
      </div>

    </>
  );
};

export default Products;

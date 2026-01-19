import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import { product } from "./data";

const Products = () => {
   const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <>
      <div>
        <div className="grid grid-cols-3 gap-3 space-x-10">
          {product.map((item, index) => (
            <ProductCard key={index} product={item} onSelect={setSelectedProduct}/>
          ))}
        </div>
        <ProductDetails product={selectedProduct}/>
      </div>
    </>
  );
};

export default Products;

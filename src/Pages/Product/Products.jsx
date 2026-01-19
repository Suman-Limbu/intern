import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import { products } from "./data";
import { Link } from "react-router-dom";
import FilterMenu from "./filterMenu";

const Products = () => {
  const [filterProducts, setFilterProducts] = useState(products);

  const filterByBrand = (brand) => {
    setFilterProducts(products.filter((item) => item.brand === brand));
  };
   const filterByPrice = (min, max) => {
    setFilterProducts(products.filter((item) => item.price>=min && item.price<=max));
  };
   const filterByCategory = (category) => {
    setFilterProducts(products.filter((item) => item.category === category));
  };

  return (
    <>
      <div>
        <FilterMenu onBrand={filterByBrand} onPrice={filterByPrice} onCategory={filterByCategory} />
        <div className="grid grid-cols-3 gap-3 space-x-10">
          {filterProducts.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

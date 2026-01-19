import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import { products } from "./data";
import { Link } from "react-router-dom";
import FilterMenu from "./filterMenu";

const Products = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const onBrand = (brand) => {
    setFilteredProducts(products.filter((p) => p.brand === brand));
  };

  const onCategory = (category) => {
    setFilteredProducts(products.filter((p) => p.category === category));
  };

  const onPrice = (min, max) => {
    setFilteredProducts(
      products.filter((p) => p.price >= min && p.price <= max),
    );
  };

  return (
    <>
      <div>
        <button
          onClick={() => setShowFilter(true)}
          className="px-4 py-2 border rounded-lg font-medium"
        >
          Filter
        </button>

        {/* Filter Panel */}
        {showFilter && (
          <FilterMenu
            onBrand={onBrand}
            onCategory={onCategory}
            onPrice={onPrice}
            onClose={() => setShowFilter(false)}
          />
        )}
        <div className="grid grid-cols-3 gap-3 space-x-10">
          {filteredProducts.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

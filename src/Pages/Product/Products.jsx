import React, { useState } from "react";
import ProductCard from "../../components/products/ProductCard";
import ProductDetails from "../../components/products/ProductDetails";
import { products } from "./data";
import { Link } from "react-router-dom";
import FilterMenu from "../../components/products/ProductFilter";

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
          className="px-4 py-2 border rounded-lg font-semibold bg-green-400 hover:shadow-md"
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
        <div className="container mx-auto px-3 py-2">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {filteredProducts.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default Products;

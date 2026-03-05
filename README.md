import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import FilterSection from "../Components/FilterSection";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [price, setPrice] = useState([0, 5000]);
  const [showCategory, setShowCategory] = useState("All");
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (itm) =>
      (itm.title.toLowerCase().includes(search.toLowerCase()) &&
        itm.price >= price[0] &&
        itm.price <= price[1] &&
        showCategory === "All") ||
      itm.category === showCategory,
  );

  return (
    <>
      {showFilter && (
        <div>
          <FilterSection
            search={search}
            setSearch={setSearch}
            price={price}
            setPrice={setPrice}
            setShowCategory={setShowCategory}
            showCategory={showCategory}
          />
        </div>
      )}
      {!showFilter && (
        <button onClick={() => setShowFilter(!showFilter)}>Filter</button>
      )}
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 mt-8">
        {filteredProducts.map((itm, idx) => (
          <div key={idx}>
            <ProductCard
              id={itm.id}
              title={itm.title}
              price={itm.price}
              brand={itm.brand}
              image={itm.image}
              category={itm.category}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;


import React from "react";

const FilterSection = ({ search, setSearch, price, setPrice,showCategory,setShowCategory }) => {
  return (
    <>
      <div className="bg-blue-200 shadow-md rounded-md py-3 px-2 w-[270px] h-[350px] gap-3">
        <div className=" gap-6  items-center ">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-amber-300"
          />

          <input
            type="number"
            min={0}
            value={price[0]}
            onChange={(e) => setPrice([e.target.value, price[1]])}
            className="border border-amber-300"
          />
          <input
            type="number"
            max={5000}
            value={price[1]}
            onChange={(e) => setPrice([price[0], e.target.value])}
            className="border border-amber-300"
          />
          <select value={showCategory} onClick={(e) =>setShowCategory(e.target.value)}>
            <option value={"men's clothing"}>Men's clothing</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterSection;


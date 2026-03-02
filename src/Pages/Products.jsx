import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../Components/ProductCard";
import FilterSection from "../Components/FilterSection";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState([0, 5000]);
  const [sort, setSort] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      };
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, [products]);
  const suggestion = useMemo(() => {
    if (search.length > 0) {
      return products
        .filter((itm) => itm.title.toLowerCase().includes(search.toLowerCase()))
        .map((itm) => itm.title)
        .slice(0, 5);
    }
  }, [products, search]);

  const filterProducts = useMemo(() => {
    let result = [...products];
    if (search.length > 0) {
      result = result.filter((itm) =>
        itm.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== "all") {
      result = result.filter((itm) => itm.category === category);
    }

    if (price.length > 0) {
      result = result.filter(
        (itm) => itm.price >= price[0] && itm.price <= price[1],
      );
    }
    if (sort.length > 0) {
      if (sort == "low") {
        result = result.sort((a, b) => a.price - b.price);
      }
      if (sort == "high") {
        result = result.sort((a, b) => b.price - a.price);
      }
    }
    return result;
  }, [products, search, category, price, sort]);
  return (
    <>
      {!showFilter && (
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="bg-blue-200 rounded cursor-pointer"
        >
          Filter
        </button>
      )}
      <div>
        {showFilter && (
          <div>
            <FilterSection
              search={search}
              setSearch={setSearch}
              categories={categories}
              category={category}
              setCategory={setCategory}
              price={price}
              setPrice={setPrice}
              sort={sort}
              setSort={setSort}
              showFilter={showFilter}
              setShowFilter={setShowFilter}
              suggestion={suggestion}
            />
          </div>
        )}
      </div>
      <div className=" max-w-7xl mx-auto grid grid-cols-4 gap-6 mt-6">
        {filterProducts.map((itm) => (
          <div key={itm.id}>
            <ProductCard
              id={itm.id}
              brand={itm.brand}
              title={itm.title}
              price={itm.price}
              category={itm.category}
              image={itm.image}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;

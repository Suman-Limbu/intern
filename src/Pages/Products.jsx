import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../Components/ProductCard";
import FilterSection from "../Components/FilterSection";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const filterProducts = useMemo(() => {
    let result = [...products];
    if (search) {
      result = result.filter((itm) =>
        itm.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== "All") {
      result = result.filter((itm) => itm.category === category);
    }
    return result;
  }, [products, search, category]);
  return (
    <>
      <div className=" max-w-7xl mx-auto grid grid-cols-4 gap-6 mt-6">
        <div>
          <FilterSection
            search={search}
            setSearch={setSearch}
            categories={categories}
            category={category}
            setCategory={setCategory}
          />
        </div>
        {filterProducts.map((itm) => (
          <div key={itm.id}>
            <ProductCard
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

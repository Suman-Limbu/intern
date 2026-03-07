import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
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

  const filteredProducts = useMemo(() => {
    return products.filter(
      (itm) =>
        itm.title.toLowerCase().includes(search.toLowerCase()) &&
        itm.price >= price[0] &&
        itm.price <= price[1] &&
        (showCategory === "All" || itm.category === showCategory),
    );
  }, [products, search, price, showCategory]);

  const suggestion = useMemo(() => {
    if (search.length > 0) {
      return products
        .filter((itm) => itm.title.toLowerCase().includes(search.toLowerCase()))
        .map((itm) => itm.title)
        .slice(0, 5);
    }
  }, [search, products]);

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
            suggestion={suggestion}
            products={products}
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

import ProductCard from "../Components/ProductCard";
import SkeletonCard from "../Components/SkeletonCard";
import Forms from "../Components/ui/forms";
import productsData from "../Data/products";
import React, { useEffect, useMemo, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 500);
  }, []);


  const filteredProducts = useMemo(() => {
    let result= products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()),
    );
    if (category!==All){
      result=products.filter((p)=>p.category==category)
    }
    return result;
  }, [products, search]);

  return (
    <>
      <div className=" my-8 flex  max-w-9xl  justify-center items-center gap-8 ">
        <div className="bg-blue-200 shadow-md rounded-md py-3 px-2 w-[270px] h-[250px] ">
          <h1 className="text-orange-400 font-bold text-2xl text-center ">
            Filters
          </h1>
          <p className=" font-semibold ">Search</p>
          <div>
            <Forms
              placeholder={"enter title"}
              type={"text"}
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
          </div>
          <select value={category} onChange={(e)=>setSearch(e.target.value)}>
            <option>All</option>
            <option>Fashion</option>
            <option>Electronics</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-6 ">
          {loading ? (
            <SkeletonCard />
          ) : (
            filteredProducts.map((itm, idx) => (
              <ProductCard
                key={idx}
                id={itm.id}
                title={itm.title}
                price={itm.price}
                category={itm.category}
                image={itm.image}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;

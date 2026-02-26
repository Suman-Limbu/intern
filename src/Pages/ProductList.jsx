import SkeletonCard from "../Components/SkeletonCard";
import productsData from "../Data/products";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 2000); // 2s is better UX than 5s
  }, []);

  return (
    <div className="min-h-screen px-6 bg-red-500">
      {loading ? (
        <div className="">
         
            <SkeletonCard/>
         
        </div>
      ) : (
        <div className="">
          {products.map((itm, idx) => (
            <div key={idx} className="font-bold text-orange-500">{itm.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
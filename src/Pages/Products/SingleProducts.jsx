import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "./Breadcrums";

const SingleProducts = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    };
    getProduct();
  }, [id]);

  return (
    <div>
      <Breadcrums title={product.title} />
      <img src={product.image} />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default SingleProducts;

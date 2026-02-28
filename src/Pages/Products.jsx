import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';

const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
const fetchProducts=async ()=>{
   try{
 const res=await axios.get("https://fakestoreapi.com/products")
    const data=res.data;
    setProducts(data);
   }catch(err){
    console.log(err);
   }
}
fetchProducts();

    },[] );
  return (
    <>
{products.map((itm,idx)=><div key={idx}>{itm.price}</div>)}
    </>
  )
}

export default Products;
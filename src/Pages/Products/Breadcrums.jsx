import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrums = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div>
      <span onClick={() => navigate("/")}>Home</span>/
      <span onClick={() => navigate("/products")}>Products</span>/
      <span>{title}</span>
    </div>
  );
};

export default Breadcrums;

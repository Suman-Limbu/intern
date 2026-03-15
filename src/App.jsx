import { Route, Router, Routes } from "react-router-dom";
import ProductCard from "./Components/ProductCard";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

import SingleProducts from "./Pages/Products/SingleProducts";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
          <Route path={"/products/:id/:slug"} element={<SingleProducts />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/Register"} element={<Register />} />
      </Routes>
    </>
  );
};

export default App;

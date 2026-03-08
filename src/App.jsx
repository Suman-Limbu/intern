import { Route, Router, Routes } from "react-router-dom";
import ProductCard from "./Components/ProductCard";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Products />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/Register"} element={<Register />} />
      </Routes>
    </>
  );
};

export default App;

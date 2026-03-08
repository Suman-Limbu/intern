import { Route, Router, Routes } from "react-router-dom";
import ProductCard from "./Components/ProductCard";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";


const App = () => {
  return (
    <>

      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Products />} />
        <Route path={"/cart"} element={<Cart />} />
      </Routes>
  
    </>
  );
};

export default App;

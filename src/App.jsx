import { Route, Routes } from "react-router-dom";
import ProductCard from "./Components/ProductCard";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Products />} />
      </Routes>
    </>
  );
};

export default App;

import { Route,Routes } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import Memo from "./Pages/Memo";
import ProductCard from "./Components/ProductCard";
import Products from "./Pages/Products";

const App = () => {

  return (
    <>
  <Routes>
   {/* <Route path="/" element={<ProductList/>}/>
<Route path={"/memo"} element={<Memo/>}/> */}
{/* <Route path={"/"} element={<ProductList/>}/>  */}
<Route path={"/"} element={<Products/>}/> 
  </Routes>
    </>
  );
};

export default App;

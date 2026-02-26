import { Route,Routes } from "react-router-dom";
import ProductList from "./Pages/ProductList";

const App = () => {

  return (
    <>
  <Routes>
   <Route path="/" element={<ProductList/>}/>

  </Routes>
    </>
  );
};

export default App;

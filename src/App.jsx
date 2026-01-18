
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Products from "./Pages/Product/Products";


const App = () => {
  return (
    <div>
      <Header/>
    {/* <div className="py-5"> <Products/></div> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
     < Route path="/about" element={<Home/>}/>
     < Route path="/blogs" element={<Home/>}/>
      <Route path="/product" element={<Products/>}/>
      <Route path="/contact" element={<Products/>}/>
    </Routes>
     <Footer/>
    </div>
  );
};

export default App;

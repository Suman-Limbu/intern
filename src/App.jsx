
import Header from "./components/Header/Navbar";
import Footer from "./components/Footer";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Products from "./Pages/Product/Products";
import MainContact  from "./Pages/contact/MainContact";
import Blog from './Pages/Blogs/Blog';
import AboutUs from './Pages/about/AboutUs';
import ProductDetails from "./components/products/ProductDetails";


const App = () => {
  return (
   <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
     < Route path="/about" element={<AboutUs/>}/>
     < Route path="/blogs" element={<Blog/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/contact" element={<MainContact/>}/>
    </Routes>
    
   </>
  );
};

export default App;

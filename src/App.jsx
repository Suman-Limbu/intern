
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Products from "./Pages/Product/Products";
import MainContact  from "./Pages/contact/MainContact";
import Blog from './Pages/Blogs/Blog';
import AboutUs from './Pages/about/AboutUs';
import ProductDetails from "./Pages/Product/ProductDetails";


const App = () => {
  return (
    <div>
      {/* <Header/> */}
    {/* <div className="py-5"> <Products/></div> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
     < Route path="/about" element={<AboutUs/>}/>
     < Route path="/blogs" element={<Blog/>}/>
      <Route path="/product" element={<Products/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/contact" element={<MainContact/>}/>
    </Routes>
     {/* <Footer/> */}
    </div>
  );
};

export default App;

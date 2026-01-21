import Header from "./components/Layout/Header/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Products from "./Pages/Product/Products";
import MainContact from "./Pages/contact/MainContact";
import Blog from "./Pages/Blogs/Blog";
import AboutUs from "./Pages/about/AboutUs";
import ProductDetails from "./components/products/ProductDetails";
import Roles from "./components/Protected/Roles";
import Dashboard from "./Pages/admin/Dashboard";
import Unauthorized from "./Pages/auth/Unauthorized";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Auth from "./Pages/auth/Auth";
import { useEffect } from "react";
import MainLayout from "./components/Layout/MainLayout";
import NotFound from "./components/NotFound";

const App = () => {
  useEffect(() => {
    const mockUser = {
      name: "Sameer",
      isAuthenticated: true,
      role: "admin",
    };
    localStorage.setItem("user", JSON.stringify(mockUser));
  }, []);
  return (
    <>
     
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<MainContact />} />
          <Route
            path="/dashboard"
            element={
              <Roles allowedRoles={["admin"]}>
                <Dashboard />
              </Roles>
            }
          />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

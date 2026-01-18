
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"
import Products from "./Pages/Product/Products";

const App = () => {
  return (
    <div>
      <Header/>
    <div className="py-5"> <Products/></div>
     <Footer/>
    </div>
  );
};

export default App;

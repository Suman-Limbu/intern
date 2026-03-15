import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ id, title, brand, category, price, image }) => {
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const handleAdd = () => {
    addToCart({ id, title, brand, category, price, image });
  };
  const slug = title.toLowerCase().replaceAll(" ", "-");
  return (
    <>
      <div className="bg-yellow-200 w-[300px] h-[300px] rounded-lg shadow-lg py-3 px-5">
        <img
          src={image}
          className="w-[100px]"
          onClick={() => navigate(`/products/${id}/${slug}`)}
        />
        <h1>{title}</h1>
        <span>{price}</span>
        <span>{brand}</span>
        <span>{category}</span>
        <button className="px-3 py-2 bg-red-500 rounded" onClick={handleAdd}>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;

const FilterMenu = ({onBrand,onPrice,onCategory}) => {
  return (
    <div className="relative inline-block group">
      {/* Filter Button */}
      <button className="px-4 py-2 border rounded-lg font-medium">
        Filter
      </button>

      {/* Main Dropdown */}
      <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded-lg shadow-lg w-40">
        
        {/* Brand */}
        <div className="relative group/brand px-3 py-2 hover:bg-gray-100">
          Brand →
          <div className="absolute left-full top-0 hidden group-hover/brand:block bg-white border rounded-lg shadow-lg w-32">
            <p onClick={() => onBrand("Apple")} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Apple</p>
            <p onClick={() => onBrand("Lenovo")} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Lenovo</p>
            <p onClick={() => onBrand("ASUS")} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">ASUS</p>
          </div>
        </div>

        {/* Category */}
        <div className="relative group/category px-3 py-2 hover:bg-gray-100">
          Category →
          <div className="absolute left-full top-0 hidden group-hover/category:block bg-white border rounded-lg shadow-lg w-36">
            <p onClick={() => onCategory("smartphone")} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">smartphone</p>
            <p onClick={() => onCategory("Laptop")} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">laptop</p>
            <p onClick={() => onCategory("Monitor")} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">monitor</p>
          </div>
        </div>

        {/* Price */}
        <div className="relative group/price px-3 py-2 hover:bg-gray-100">
          Price →
          <div className="absolute left-full top-0 hidden group-hover/price:block bg-white border rounded-lg shadow-lg w-40">
            <p onClick={() => onPrice(0, 50000)} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Below 50k</p>
            <p onClick={() => onPrice(50000, 150000)} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">50k – 1.5L</p>
            <p onClick={() => onPrice(150000, 300000)} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Above 1.5L</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FilterMenu;

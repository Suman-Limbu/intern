const FilterPanel = ({ onBrand, onCategory, onPrice, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
      
      {/* Panel */}
      <div className="bg-white w-72 h-full p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg text-amber-500">Filters</h2>
          <button onClick={onClose} className="text-xl hover:bg-amber-400 transition">✕</button>
        </div>

        {/* Brand */}
        <div className="mb-4">
          <h3 className="font-medium mb-2 text-blue-600">Brand</h3>
          {["Apple", "Lenovo", "ASUS"].map((b) => (
            <p
              key={b}
              onClick={() => onBrand(b)}
              className="cursor-pointer hover:underline"
            >
              {b}
            </p>
          ))}
        </div>

        {/* Category */}
        <div className="mb-4">
          <h3 className="font-medium mb-2 text-blue-600">Category</h3>
          {["smartphone", "Laptop", "Monitor"].map((c) => (
            <p
              key={c}
              onClick={() => onCategory(c)}
              className="cursor-pointer hover:underline"
            >
              {c}
            </p>
          ))}
        </div>

        {/* Price */}
        <div>
          <h3 className="font-medium mb-2 text-blue-600">Price</h3>
          <p onClick={() => onPrice(0, 50000)} className="cursor-pointer hover:underline">
            Below 50k
          </p>
          <p onClick={() => onPrice(50000, 150000)} className="cursor-pointer hover:underline">
            50k – 1.5L
          </p>
          <p onClick={() => onPrice(150000, 300000)} className="cursor-pointer hover:underline">
            Above 1.5L
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;

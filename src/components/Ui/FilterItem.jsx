const FilterItem = ({ title, children }) => {
  return (
    <div className="relative group/item px-3 py-2 hover:bg-gray-100">
      {title} →
      <div className="absolute left-full top-0 hidden group-hover/item:block bg-white border rounded-lg shadow-lg w-36">
        {children}
      </div>
    </div>
  );
};

export default FilterItem;

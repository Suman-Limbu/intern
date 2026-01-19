const FilterOption = ({ label, onClick }) => {
  return (
    <p
      onClick={onClick}
      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {label}
    </p>
  );
};

export default FilterOption;
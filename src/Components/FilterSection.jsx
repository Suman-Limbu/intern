import React from "react";

const FilterSection = ({
  search,
  setSearch,
  price,
  setPrice,
  showCategory,
  setShowCategory,
  suggestion,
  products,
}) => {
  const categories = ["All", ...new Set(products.map((itm) => itm.category))];

  return (
    <>
      <div className="bg-blue-200 shadow-md rounded-md py-3 px-2 w-[270px] h-[350px] gap-3">
        <div className=" gap-6  items-center ">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-amber-300"
          />
          <div className="bg-red-500  ">{suggestion}</div>

          <input
            type="number"
            min={0}
            value={price[0]}
            onChange={(e) => setPrice([e.target.value, price[1]])}
            className="border border-amber-300"
          />
          <input
            type="number"
            max={5000}
            value={price[1]}
            onChange={(e) => setPrice([price[0], e.target.value])}
            className="border border-amber-300"
          />
          <select
            value={showCategory}
            onChange={(e) => setShowCategory(e.target.value)}
          >
            {categories.map((itm) => (
              <option value={itm}>{itm}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterSection;

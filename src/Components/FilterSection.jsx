import React from "react";

const FilterSection = ({ search, setSearch, categories,category, setCategory }) => {
  return (
    <>
      <div className="bg-blue-200 shadow-md rounded-md py-3 px-2 w-[270px] h-[250px] gap-3">
        <h1 className="text-orange-400 font-bold text-2xl text-center ">
          Filters
        </h1>
        <p className=" font-semibold text-red-600 ">Search</p>
        <div>
          <input
            placeholder={"enter title"}
            type={"text"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <p className=" font-semibold text-red-600 ">Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((itm, idx) => (
              <option key={idx} value={itm}> {itm}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterSection;

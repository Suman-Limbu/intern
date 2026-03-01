import React from "react";

const FilterSection = ({
  search,
  setSearch,
  categories,
  category,
  setCategory,
  price,
  setPrice,
  sort,
  setSort,
  showFilter,
  setShowFilter,
  suggestion,
}) => {
  console.log(suggestion);
  return (
    <>
      <div className="bg-blue-200 shadow-md rounded-md py-3 px-2 w-[270px] h-[350px] gap-3">
        <button
          className="cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          x
        </button>
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
          {suggestion && (
            <ul>
              {suggestion.map((s) => (
                <li onClick={()=>setSearch(s)}>{s}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p className=" font-semibold text-red-600 ">Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((itm, idx) => (
              <option key={idx} value={itm}>
                {itm}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h1 className=" font-semibold text-red-600 ">Price</h1>
          <p>
            Price Range: ${price[0]}-${price[1]}
          </p>
          <input
            placeholder="enter price"
            type="range"
            min={0}
            max={5000}
            value={price[1]}
            onChange={(e) => setPrice([price[0], Number(e.target.value)])}
          />
          <h1 className=" font-semibold text-red-600 ">Sort</h1>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value={""}>None</option>
            <option value={"low"}>Low</option>
            <option value={"high"}>High</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterSection;

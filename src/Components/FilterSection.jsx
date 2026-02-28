import React from 'react'

const FilterSection = () => {
    
  return (
<>

         <div className="bg-blue-200 shadow-md rounded-md py-3 px-2 w-[270px] h-[250px] ">
          <h1 className="text-orange-400 font-bold text-2xl text-center ">
            Filters
          </h1>
          <p className=" font-semibold ">Search</p>
          <div>
            <Forms
              placeholder={"enter title"}
              type={"text"}
              value={search}
              onChange={handleChange}
            />
          </div>
        </div>
</>
  )
}

export default FilterSection;
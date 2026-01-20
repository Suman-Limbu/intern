import React from 'react'

const button = ({text}) => {
  return (
    <button className="bg-blue-400 rounded-md py-2 px-3 font-semibold text-[20px] cursor-pointer hover:shadow-md">{text}</button>
  )
}

export default button;
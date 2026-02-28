import React from 'react'

const Forms = ({placeholder,type,value,onChange}) => {
  return (
   <>
   <input placeholder={placeholder} type={type} value={value} onChange={onChange}/>
   </>
  )
}

export default Forms;
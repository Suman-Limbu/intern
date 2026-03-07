import React, { useReducer } from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {
    const reducer=(state,action)=>{
if(action.type==="Inc"){
return state+1
}
if(action.type==="Dec"){
return state-1
}

  }
  const [count,dispatch]=useReducer(reducer,0);
const cart=useCart();
  return (
  <>
  {count}
  {cart}
  <button onClick={()=>dispatch({type:"Inc"})}>Inc</button>
  <button onClick={()=>dispatch({type:"Dec"})}>Dec</button>
  </>
  )
}

export default Cart;
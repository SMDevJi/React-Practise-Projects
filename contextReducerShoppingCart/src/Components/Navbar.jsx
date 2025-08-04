import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/cartContext.jsx'

function Navbar() {
  const { cartState, cartDispatch } = useCart();

  //console.log(items)
  return (
    <>
      <div className="navbar p-[20px] flex justify-between w-full">
        <div className="nav-left w-2/3">
          REDUX STORE
        </div>
        <div className="nav-right w-[250px] flex justify-around">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <span>CART ITEMS: {cartState.length}</span>
        </div>
      </div>
    </>
  )
}

export default Navbar
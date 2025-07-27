import React from 'react'
import Products from '../Components/Products'

function Home() {
  return (
    <>
    <div className='font-bold p-[20px] text-2xl'>Welcome to the Redux toolkit store</div>
    <div className="products-wrapper p-[20px]">
        <Products/>
    </div>
    </>
  )
}

export default Home
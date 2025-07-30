import React from 'react'
import Loader from '../assets/loader.svg'

function Loading() {
  return (
    <div className='flex justify-center w-full h-[70px]'>
        <img src={Loader} alt="Loading..." />
    </div>
  )
}

export default Loading
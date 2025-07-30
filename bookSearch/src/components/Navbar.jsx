import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

import Drawer from './Drawer'

function Navbar() {
    return (
        <>
            <nav className=' flex justify-between h-[95px] p-4'>
                <Link to='/'>
                    <div id="nav-left" className='w-[250PX] flex  items-center ml-[50px] lg:ml-[150px]'>
                        <img className='h-[60px] w-[90px]' src={Logo} alt="Logo" />
                        <span className='ml-4 font-bold tracking-widest text-2xl'>BOOKHUB</span>
                    </div>
                </Link>

                <div id="nav-right" className='w-[150px] ls-1 mr-[170px]'>
                    <div className="large-options hidden lg:flex justify-around items-center lg:h-[100%] lg:w-[100%] lg:font-medium">
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT</Link>
                    </div>
                    <div className="small-options flex lg:hidden">
                        <Drawer/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
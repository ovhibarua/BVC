import React from 'react'
import Button from '../../Button'
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <nav className='border-b-[1px] bg-white'>
        <div className='container mx-auto py-4 xl:py-5 flex justify-between'>
            <div>
                <img src="BvcouncilLogo.png" alt="logo" />
            </div>
            <div className='flex items-center gap-6'> 
                <div className='flex items-center'>
                    <ul className='flex items-center gap-12'>
                        <Link to="/">
                            <li><h3>Home</h3></li>
                        </Link>
                        
                        <Link to="/about">
                            <li><h3>About Us</h3></li>
                        </Link>
                        <Link to="/contact">
                            <li><h3>Contact</h3></li>
                        </Link>
                        <li className='flex items-center gap-2 relative navHover'>
                            <h3>Course</h3> <i className="ri-arrow-down-s-line text-2xl h-[30px]"></i>
                            <ul className='upShow flex flex-col gap-6 p-5 rounded-lg shadow-sm shadow-slate-200 border-[1px] border-slate-200 absolute top-full z-20 bg-white w-56 right-0'>
                                <li>IT course</li>
                                <li>IT course</li>
                                <li>IT course</li>
                                <li>IT course</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-2 xl:gap-5'>
                    <Button btnName="Log in" btnBg="border border-[#747474] py-2 xl:py-3 px-3 xl:px-6 font-bold"/>
                    <Button btnName="Sign up" btnBg="bg-[#2A283B] text-white py-2 xl:py-3 px-3 xl:px-6 font-bold"/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav
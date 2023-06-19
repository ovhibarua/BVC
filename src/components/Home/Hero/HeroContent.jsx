import React from 'react'
import Button from '../../Button'

function HeroContent() {
  return (
    <div className='py-10 px-12 bg-white w-1/2 rounded-lg'> 
        <h1 className='mb-3'>Find best course that fits your need.</h1>
        <h3 className='mb-10'>We have designed some of the top IT courses that will take you hand by hand to make your prepare for your career. We guarantee your learning.</h3>
        <Button btnName="Join Us" btnBg="bg-[#2A283B] text-white py-3 px-6 font-bold" />
    </div>
  )
}

export default HeroContent
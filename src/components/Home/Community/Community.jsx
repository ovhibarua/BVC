import React from 'react'
import Button from '../../Button'

function Community() {
  return (
    <section className="pb-8"> 
    <div className='container mx-auto p-16 rounded-lg shadow-lg shadow-slate-200 bg-white'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-11'>
                <div>
                    <img src="joinCommunity.svg" alt="community" />
                </div>
                <div>
                    <h2 className=' mb-2'>Join the Community.</h2>
                    <p>Sign up and exciting offers in this auspicious season of learning. Let’s join the </p>
                </div>
            </div> 
            <Button btnName="Sign up" btnBg="bg-[#2A283B] text-white py-3 px-6 font-bold"/>
        </div>
    </div>
    </section>
  )
}

export default Community
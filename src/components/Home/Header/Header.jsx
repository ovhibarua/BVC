import React from 'react'
import Button from '../../Button'
import Nav from './Nav'
import NavList from './NavList'

function Header() {
  return (
    <header>
        <section className='bg-[#2A283B]'>
            <div className="container mx-auto py-2 xl:py-4 flex justify-between items-center">
                <div className='flex items-center gap-3 xl:gap-6'>
                    <h4>Have any questions?</h4>
                    <h4><i className="ri-phone-fill"></i> +91 7890466296</h4>
                    <h4><i class="ri-mail-fill"></i> info@bvcouncil.com</h4>
                </div>
                <Button btnName="Select language" btnBg="bg-white py-0.5 xl:py-1 pl-2 xl:pl-3 pr-2 font-medium" btnArrow={<i className="ri-arrow-down-s-line text-2xl h-[30px]"></i>}/>
            </div>
        </section>
        <Nav />
        <NavList />
    </header>
  )
}

export default Header
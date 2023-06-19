import React from 'react'
import FooterList from './FooterList'
import FooterBottom from './FooterBottom'

function Footer() {
  return (
    <section>
        <div className='bg-white py-16'>
            <div className='container mx-auto'>
                <div className='flex justify-between'>
                    <div>
                        <div className=' mb-6'>
                            <img src="BvcouncilLogo.png" alt="logo" />
                        </div>
                            <p className='mb-6'>Shape your career with us.</p>
                            <div className='flex items-center gap-7'>
                                <img className='hover:-translate-y-1 cursor-pointer transition-all duration-300' src="facebook.png" alt="face" />
                                <img className='hover:-translate-y-1 cursor-pointer transition-all duration-300' src="instagram.png" alt="face" />
                                <img className='hover:-translate-y-1 cursor-pointer transition-all duration-300' src="twitter.png" alt="face" />
                                <img className='hover:-translate-y-1 cursor-pointer transition-all duration-300' src="youtube.png" alt="face" />
                            </div>
                    </div>
                    <div className='flex gap-32'>
                        <FooterList footerTitle="Navigation" list1="Home" list2="Membership" list3="Courses" list4="Pricing"/>
                        <FooterList footerTitle="Quick links" list1="Social Media" list2="Become Instructor" list3="Help" list4="Terms & Conditions"/>
                        <FooterList footerTitle="Contact Us" list1="01 608119494 (BD)" list2="718-795-8628" list3="+91 7890466296" list4="info@bvcouncil.com"/>
                    </div>
                </div>
            </div>
        </div>
        <FooterBottom />
    </section>
  )
}

export default Footer
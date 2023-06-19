import React from 'react'
import Button from '../Button'

function ContactForm() {
  return (
    <div className='p-10 border-l-[1px] border-slate-200 w-[60%]'>
        <form action="#" className='grid grid-cols-2 gap-11'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="name">Your Name</label>
                <input className=' border-[3px] border-[#E5E5E5] rounded-md p-3 outline-none' type="text" name="name" id="name" placeholder='David Willinson' required/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="mail">Your Mail</label>
                <input className=' border-[3px] border-[#E5E5E5] rounded-md p-3 outline-none' type="mail" name="mail" id="mail" placeholder='willinsondavid@gmail.com' required/>
            </div>
            <div className='col-span-2 flex flex-col gap-2'>
                <label htmlFor="message">Message</label>
                <textarea className=' border-[3px] border-[#E5E5E5] rounded-md p-3 outline-none' name="message" id="message" cols="30" rows="10" placeholder='Write here...'></textarea>
            </div>
            <div className=' justify-self-end col-span-2'>
                <Button btnName="Send Message" btnBg="bg-[#2A283B] text-white py-3 px-8"/>
            </div>
        </form>
    </div>
  )
}

export default ContactForm
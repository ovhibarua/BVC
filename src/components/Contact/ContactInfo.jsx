import React from 'react';
import Number from '../../data/Number.json'
import Mail from '../../data/MailAddress.json'
import Address from '../../data/Address.json'

function ContactInfo() {
  return (
    <div className='p-10 w-[40%]'>
        <h1 className='mb-2'>Contact Information</h1>
        <h3 className=' mb-9'>Fill up the form and mail us, our team will respond in short time.</h3>
        <div className='flex items-start gap-2 mb-6 text-[#2A283B]'>
            <i className="ri-phone-fill text-xl"></i>
            <ul className=' space-y-2'>
                {Number.map((num, index) => (
                    <li key={index}>{num.num}</li>
                ))}
            </ul>
        </div>
        <div className='flex items-start gap-2 mb-6 text-[#2A283B]'>
            <i className="ri-mail-fill text-xl"></i>
            <ul className=' space-y-2'>
                {Mail.map((mail, index) => (
                    <li key={index}>{mail.mail}</li>
                ))}
            </ul>
        </div>
        <div className='flex items-start gap-2 text-[#2A283B]'>
            <i className="ri-map-pin-fill text-xl"></i>
            <ul className=' space-y-2'>
                {Address.map((address, index) => (
                    <li key={index}>{address.address}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ContactInfo
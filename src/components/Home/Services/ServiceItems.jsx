import React from 'react'

function ServiceItems(props) {
    const {serviceImg, serviceTitle, serviceContent} = props;
  return (
    <div className='p-10 rounded-lg shadow-lg shadow-slate-200 bg-white'>
        <div className='mb-5 w-16 h-16'>
            <img src={serviceImg} alt="serviceImg" />
        </div>
        <h2 className='mb-2'>{serviceTitle}</h2>
        <p className='text-[#2A283B]'>{serviceContent}</p>
    </div>
  )
}

export default ServiceItems
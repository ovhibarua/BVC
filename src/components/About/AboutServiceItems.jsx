import React from 'react'

function AboutServiceItems(props) {
    const {aboutSerImg, aboutSerTitle, aboutSerContent} = props;
  return (
    <div className='p-12 bg-white rounded-lg shadow-lg shadow-slate-200'>
        <div className=' mb-6'>
            <img className='w-14 h-14 rotate-45' src={aboutSerImg} alt="aboutSerImg" />
        </div>
        <h2 className=' mb-3'>{aboutSerTitle}</h2>
        <p>{aboutSerContent}</p>
    </div>
  )
}

export default AboutServiceItems
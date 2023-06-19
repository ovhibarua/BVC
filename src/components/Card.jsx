import React from 'react'

function Card(props) {
    const {courseImg, courseTitle, coursePrice, courseTime, courseContent, courseDate, courseAvatar} = props;
  return (
    <div className='border-[1px] border-slate-200 overflow-hidden p-6 cursor-pointer rounded-lg shadow-lg shadow-slate-200 hover:shadow-2xl hover:shadow-slate-300 transition-all duration-500 hover:-translate-y-2'>
        <div className='mb-8 overflow-hidden rounded-lg'>
            <img className='w-full h-[235px]' src={courseImg} alt="courseImg" />
        </div>
        <span className='block w-fit bg-sky-100 text-sky-400 mb-2 rounded-md py-1 px-4 text-sm font-normal'>Flutter</span>
        <h2 className='mb-4'>{courseTitle}</h2>
        <div className='flex items-center gap-4 mb-1'>
            <h3 className='text-green-500 font-bold'>{coursePrice}</h3>
            <span className=' text-gray-400'>{courseTime}</span>
        </div>
        <p className='mb-7'>{courseContent}</p>
        <div className='flex gap-5 items-center justify-between'>
            <span className=' font-semibold text-gray-800'>{courseDate}</span>
            <div>
                <img src={courseAvatar} alt="courseAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Card
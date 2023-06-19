import React from 'react'

function LearningItems(props) {
    const {learnImg, learnTitle, learnContent} = props;
  return (
    <div className='overflow-hidden rounded-lg shadow-lg shadow-slate-200 bg-white'>
        <div>
            <img className='w-full' src={learnImg} alt="learnImg" />
        </div>
        <div className='p-9'>
            <h2 className='mb-3'>{learnTitle}</h2>
            <p>{learnContent}</p>
        </div>
    </div>
  )
}

export default LearningItems
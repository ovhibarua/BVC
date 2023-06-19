import React from 'react';
import TrandingCourseData from '../../../data/TrandingCourseData.json';
import Card from '../../Card';

function Course(props) {
    const {trandingCourseTitle} = props;
  return (
    <section className='pb-8'>
        <div className='container mx-auto bg-white pt-9 pb-14 px-10 rounded-lg shadow-lg shadow-slate-200'>
            <h2 className='mb-6'>{trandingCourseTitle}</h2>
            <div className='grid grid-cols-3 gap-16'>
                {TrandingCourseData.map((courseItems, index) => <Card key={index} courseImg={courseItems.img} courseTitle={courseItems.title} coursePrice={courseItems.price} courseTime={courseItems.time} courseContent={courseItems.content}  courseDate={courseItems.date} courseAvatar={courseItems.avatar} />)}
            </div>
        </div>
    </section>
  )
}

export default Course
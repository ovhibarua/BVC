import React from 'react';
import AboutServiceData from '../../data/AboutServiceData.json';
import AboutServiceItems from './AboutServiceItems';

function AboutService() {
  return (
    <section className='pb-8'>
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-9">
                {AboutServiceData.map((aboutSerItems) => <AboutServiceItems aboutSerImg={aboutSerItems.aboutSerImg} aboutSerTitle={aboutSerItems.aboutSerTitle} aboutSerContent={aboutSerItems.aboutSerContent}/>)}
            </div>
        </div>
    </section>
  )
}

export default AboutService
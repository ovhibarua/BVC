import React from 'react';
import LearningItems from './LearningItems';
import LearningData from '../../data/LearningData.json';

function Learning() {
  return (
    <section className='pb-8 pt-16'>
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-11">
                {LearningData.map((lrnItems) => <LearningItems learnImg={lrnItems.lrnImg} learnTitle={lrnItems.lrnTitle} learnContent={lrnItems.lrnContent}/>)} 
            </div>
        </div>
    </section>
  )
}

export default Learning
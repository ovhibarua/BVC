import React from 'react';
import ServiceData from '../../../data/ServiceData.json'
import ServiceItems from './ServiceItems';

function Service() {
  return (
    <section className='pb-9'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-8 items-center'>
                {ServiceData.map((serviceItems, index) => <ServiceItems key={index} serviceImg={serviceItems.img} serviceTitle={serviceItems.title} serviceContent={serviceItems.content} />)}
            </div>
        </div>
    </section>
  )
}

export default Service
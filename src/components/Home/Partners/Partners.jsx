import React from 'react'
import Data from '../../../data/Data.json'
import PartnerItems from './PartnerItems'
function Partners() {
  return (
    <section className='pb-8'>
        <div className='container mx-auto bg-white px-9 pt-9 pb-14 shadow-lg shadow-slate-200 rounded-lg'>
            <h1 className='text-center mb-12'>Top University Partners</h1>
            <div className='grid grid-cols-4 justify-items-center gap-9'>
                {Data.map((items, index) => <PartnerItems key={index} partnerItem={items.img} />)}
            </div>
        </div>
    </section>
  )
}

export default Partners
import React from 'react'

function PartnerItems(props) {
    const {partnerItem} = props;
  return (
    <div className='w-fit'>
        <img src={partnerItem} alt="partner" />
    </div>
  )
}

export default PartnerItems
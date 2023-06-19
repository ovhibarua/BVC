import React from 'react'

function FooterList(props) {

    const {footerTitle, list1, list2, list3, list4} = props;
  return (
    <div>
        <h2 className=' mb-6'>{footerTitle}</h2>
        <ul>
            <li className=' mb-3'><p>{list1}</p></li>
            <li className=' mb-3'><p>{list2}</p></li>
            <li className=' mb-3'><p>{list3}</p></li>
            <li><p>{list4}</p></li>
        </ul>
    </div>
  )
}

export default FooterList
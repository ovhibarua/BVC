import React from 'react'

function Button(props) {

    const {btnName,btnBg,btnArrow} = props;

    return (
        <button className={btnBg + " text-sm rounded-[7px] flex items-center gap-2"}>{btnName} {btnArrow}</button>
    )
}

export default Button
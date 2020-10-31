import React from 'react'
import './common.scss'
const ButtonMask = ({setPopUp, bgColor = 'rgba(0, 0, 0, .6)'}) => {
    return (
        <span style={{backgroundColor: bgColor}} onClick={() => setPopUp(false)} className={`btn_mask`} />
    );
};
export default ButtonMask;
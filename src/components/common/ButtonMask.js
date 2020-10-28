import React, {useEffect} from 'react'
import './common.scss'
const ButtonMask = ({setPopUp}) => {
    return (
        <span onClick={() => setPopUp(false)} className={`btn_mask`} />
    );
};
export default ButtonMask;
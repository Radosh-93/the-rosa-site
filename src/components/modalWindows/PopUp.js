import React from 'react'
import ButtonMask from "components/common/ButtonMask";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from "@material-ui/core/IconButton";

const PopUp = ({setPopUp, children}) => {
    return (
        <div className='modal-body'>
            <div className="modal-container">
                {children}
                <IconButton className='close-btn' onClick={() => {setPopUp(false)}}><HighlightOffIcon/></IconButton>
            </div>
            <ButtonMask setPopUp={setPopUp} bgColor='rgba(0, 0, 0, .8)'/>
        </div>
    );
};
export default PopUp;
import React from 'react'
import Icon from "@material-ui/core/Icon";
import './Footer.scss';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { IconButton } from '@material-ui/core';

const Footer = (props) => {
    return (
        <footer>
            <div className="wrapper">
                <div className="back-to-top">
                    <IconButton ><KeyboardArrowUpIcon fontSize={"large"}/></IconButton>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
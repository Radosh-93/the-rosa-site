import React from 'react'
import './Footer.scss';
import Asterisk from "../common/Asterisk";
import {Description} from "../common/Description";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MyTripadvisorIcon from "../common/socIcons/TipadvisorIcon";
import Newsletter from "../Forms/Newletter";


const Footer = (props) => {
    return (
        <footer>
            <div className="wrapper">
                <div className="back-to-top">
                    <IconButton style={{display: "block", width: '100%'}}><KeyboardArrowUpIcon className='icon'/></IconButton>
                </div>
                <div className="footer-content">
                    <div className="footer-content-about animate-up">
                        <h4>About Rosa</h4>
                        <Asterisk color='#c59d5f' className='asterisk'/>
                        <Description/>
                    </div>
                    <div className="footer-content-divider animate-bottom">
                        <div className="social-media">
                            <h4>Follow along</h4>
                            <ul className="social-icons">
                                <li><TwitterIcon className='icon'/></li>
                                <li><FacebookIcon className='icon'/></li>
                                <li><PinterestIcon className='icon'/></li>
                                <li><LinkedInIcon className='icon'/></li>
                                <li><MyTripadvisorIcon color='#ffffff' className='icon'/></li>
                            </ul>
                        </div>
                        <div className="newsletter-container">
                            <h4>Newsletter</h4>
                            <Newsletter className='newsletter-form' variant="filled"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
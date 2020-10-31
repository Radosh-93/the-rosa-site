import React, {useEffect, useState} from 'react'
import './Footer.scss';
import Asterisk from "../common/Asterisk";
import {Description} from "../common/Description";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {IconButton} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MyTripadvisorIcon from "../common/socIcons/TipadvisorIcon";
import Newsletter from "../Forms/Newletter";
import {BlockAnimation} from "components/pages/Home/animation/Animations";
import PopUp from "components/modalWindows/PopUp";


const Footer = (props) => {
    const [isPopUp, setIsPopUp] = useState(false);
    useEffect(() => {
        document.body.style.overflow = isPopUp ? 'hidden' : 'visible'
    }, [isPopUp])
    return (
        <footer id='footer'>
            <div className="wrapper">
                <div className="back-to-top">
                    <IconButton style={{display: "block", width: '100%'}} onClick={() => {
                        window.scrollTo(0, 0)
                    }}><KeyboardArrowUpIcon
                        className='icon'/></IconButton>
                </div>
                <div className="footer-content">
                    <BlockAnimation animateIn='animate__fadeInDown'
                                    animateOut='animate__fadeOutUp'>
                        <div className="footer-content-about">
                            <h4>About Rokka</h4>
                            <Asterisk color='#c59d5f' className='asterisk'/>
                            <Description/>
                        </div>
                    </BlockAnimation>
                    <BlockAnimation animateIn='animate__fadeInUp'
                                    animateOut='animate__fadeOutDown'>
                        <div className="footer-content-divider">
                            <div className="social-media">
                                <h4>Follow along</h4>
                                <ul className="social-icons">
                                    <li><a href="https://www.twitter.com"
                                           target='_blank'
                                           rel="noopener noreferrer"><TwitterIcon className='icon'/></a></li>
                                    <li><a href="https://www.facebook.com"
                                           target='_blank'
                                           rel="noopener noreferrer"><FacebookIcon className='icon'/></a></li>
                                    <li><a href="https://www.pinterest.com"
                                           target='_blank'
                                           rel="noopener noreferrer"><PinterestIcon className='icon'/></a></li>
                                    <li><a href="https://www.linkedin.com/"
                                           target='_blank'
                                           rel="noopener noreferrer"><LinkedInIcon className='icon'/></a></li>
                                    <li><a href="https://www.tripadvisor.com/"
                                           target='_blank'
                                           rel="noopener noreferrer"><MyTripadvisorIcon color='#ffffff' className='icon'/></a></li>
                                </ul>
                            </div>
                            <div className="newsletter-container">
                                <h4>Newsletter</h4>
                                <Newsletter setIsPopUp={setIsPopUp} className='newsletter-form'/>
                            </div>
                        </div>
                    </BlockAnimation>
                </div>
            </div>

            {isPopUp
                ? (<PopUp setPopUp={setIsPopUp}>
                    <h4 className="text">Thank You!</h4>
                    <p className="description">You've subscribed to our weekly newsletter!</p>
                </PopUp>)
                : null}
        </footer>
    );
};
export default Footer;
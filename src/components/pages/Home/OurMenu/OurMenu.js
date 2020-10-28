import React from 'react';
import './OurMenu.scss'
import menuGroup1 from 'assets/images/menu-group-1.jpg';
import menuGroup2 from 'assets/images/menu-group-2.jpg';
import menuGroup3 from 'assets/images/menu-group-3.jpg';
import menuGroup4 from 'assets/images/menu-group-4.jpg';
import Headline from "components/common/Headline";
import ButtonSection from "components/common/ButtonSection";
import Asterisk from "components/common/Asterisk";
import {BlockAnimation} from "components/pages/Home/animation/Animations";

const OurMenu = (props) => {
    return (
        <section className='discover-our-menu'>
            <div className="wrapper">
                <div className='restaurant-info'>
                    <BlockAnimation animateIn='animate__fadeInLeft'>
                        <div className="image-group padding-right">
                            <img src={menuGroup1} alt="menu one"/>
                            <img src={menuGroup2} alt="menu two"/>
                            <img src={menuGroup3} alt="menu three"/>
                            <img src={menuGroup4} alt="menu four"/>
                        </div>
                    </BlockAnimation>
                    <BlockAnimation animateIn='animate__fadeInRight'>
                        <div className="restaurant-description">
                            <div className="global-headline">
                                <Headline.h2>Discover</Headline.h2>
                                <Headline.h1 view='dark'>Our Menu</Headline.h1>
                                <Asterisk className="asterisk"/>
                            </div>
                            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                                doloremque eaque enim esse
                                excepturi fugiat incidunt ipsam neque nesciunt pariatur placeat, quam quibusdam quis quo
                                repellat ullam ut. Debitis, iste.</p>
                            <ButtonSection className='body-btn'>View the full menu</ButtonSection>
                        </div>
                    </BlockAnimation>
                </div>
            </div>
        </section>
    );
};
export default OurMenu;
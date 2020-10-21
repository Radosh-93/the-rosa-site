import React from 'react';
import './OurMenu.scss'
import menuGroup1 from '../../assets/images/menu-group-1.jpg';
import menuGroup2 from '../../assets/images/menu-group-2.jpg';
import menuGroup3 from '../../assets/images/menu-group-3.jpg';
import menuGroup4 from '../../assets/images/menu-group-4.jpg';
import Headline from "../common/Headline";
import ButtonSection from "../common/ButtonSection";

const OurMenu = (props) => {
    return (
        <section className='discover-our-menu'>
            <div className="wrapper">
                <div className='restaurant-info'>
                    <div className="image-group padding-right animate-left">
                        <img src={menuGroup1} alt="menu one"/>
                        <img src={menuGroup2} alt="menu two"/>
                        <img src={menuGroup3} alt="menu three"/>
                        <img src={menuGroup4} alt="menu four"/>
                    </div>
                    <div className="restaurant-description animate-right">
                        <div className="global-headline">
                            <Headline.h2>Discover</Headline.h2>
                            <Headline.h1 view='dark'>Our Menu</Headline.h1>
                            <div className="asterisk">*</div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque eaque enim esse
                            excepturi fugiat incidunt ipsam neque nesciunt pariatur placeat, quam quibusdam quis quo
                            repellat ullam ut. Debitis, iste.</p>
                        <ButtonSection className='body-btn'>View the full menu</ButtonSection>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default OurMenu;
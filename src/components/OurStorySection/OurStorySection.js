import React from 'react';
import './OurStorySection.scss'
import ourStory from "./../../assets/images/our-story-1.jpg";
import Headline from "../common/Headline";
import ButtonSection from "../common/ButtonSection";
import {Description} from "../common/Description";

const OurStorySection = (props) => {
    return (
        <section className='discover-our-story'>
            <div className="wrapper">
                <div className="restaurant-info">
                    <div className="restaurant-description padding-right animate-left">
                        <div className="global-headline">
                            <Headline.h2>Discover</Headline.h2>
                            <Headline.h1 view='dark'>Our Story</Headline.h1>
                            <div className="asterisk">*</div>
                        </div>
                        <Description />
                        <ButtonSection className="body-btn">About us</ButtonSection>
                    </div>
                    <div className="restaurant-info-img animate-right">
                        <img src={ourStory} alt='Our Story'/>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default OurStorySection;
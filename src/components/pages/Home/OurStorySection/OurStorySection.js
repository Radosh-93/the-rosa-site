import React from 'react';
import './OurStorySection.scss'
import Headline from "components/common/Headline";
import ButtonSection from "components/common/ButtonSection";
import Asterisk from "components/common/Asterisk";
import {Description} from "components/common/Description";
import ourStory from "assets/images/our-story-1.jpg";
import {BlockAnimation} from "components/pages/Home/animation/Animations";

const OurStorySection = (props) => {
    return (
        <section className='discover-our-story' id='test'>
            <div className="wrapper">
                <div className="restaurant-info">
                        <BlockAnimation animateIn='animate__fadeInLeft' className="restaurant-description padding-right">
                            <div className="global-headline">
                                <Headline.h2>Discover</Headline.h2>
                                <Headline.h1 view='dark'>Our Story</Headline.h1>
                                <Asterisk className="asterisk"/>
                            </div>
                            <Description/>
                            <ButtonSection className="body-btn">About us</ButtonSection>
                        </BlockAnimation>
                        <BlockAnimation animateIn='animate__fadeInRight' className="restaurant-info-img">
                            <img src={ourStory} alt='Our Story'/>
                        </BlockAnimation>
                </div>
            </div>
        </section>
    );
};
export default OurStorySection;
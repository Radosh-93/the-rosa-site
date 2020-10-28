import React from 'react';
import './CulinarySection.scss'
import Headline from "components/common/Headline";
import ButtonSection from "components/common/ButtonSection";
import {Description} from "components/common/Description";
import Asterisk from "components/common/Asterisk";
import delight1 from "assets/images/delight-group-1.jpg";
import delight2 from  "assets/images/delight-group-2.jpg";
import {BlockAnimation} from "components/pages/Home/animation/Animations";

const CulinarySection = (props) => {

    return (
        <section className='culinary-delight'>
            <div className="wrapper">
                <div className="restaurant-info">
                    <BlockAnimation animateIn='animate__fadeInLeft'>
                    <div className="restaurant-description padding-right">
                        <div className="global-headline">
                            <Headline.h2>Culinary</Headline.h2>
                            <Headline.h1 view='dark'>Delight</Headline.h1>
                            <Asterisk className='asterisk'/>
                        </div>
                        <Description />
                        <ButtonSection className="body-btn">Make a reservation</ButtonSection>
                    </div>
                    </BlockAnimation>
                    <div className="image-group">
                        <BlockAnimation animateIn='animate__fadeInDown'>
                        <img className='animate-top' src={delight1} alt='Delight one'/>
                        </BlockAnimation>
                        <BlockAnimation animateIn='animate__fadeInUp'>
                        <img className='animate-bottom' src={delight2} alt='Delight two'/>
                        </BlockAnimation>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CulinarySection;
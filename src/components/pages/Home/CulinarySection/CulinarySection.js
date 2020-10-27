import React from 'react';
import './CulinarySection.scss'
import Headline from "components/common/Headline";
import ButtonSection from "components/common/ButtonSection";
import {Description} from "components/common/Description";
import Asterisk from "components/common/Asterisk";
import delight1 from "assets/images/delight-group-1.jpg";
import delight2 from  "assets/images/delight-group-2.jpg";

const CulinarySection = (props) => {

    return (
        <section className='culinary-delight'>
            <div className="wrapper">
                <div className="restaurant-info">
                    <div className="restaurant-description padding-right animate-left">
                        <div className="global-headline">
                            <Headline.h2>Culinary</Headline.h2>
                            <Headline.h1 view='dark'>Delight</Headline.h1>
                            <Asterisk className='asterisk'/>
                        </div>
                        <Description />
                        <ButtonSection className="body-btn">Make a reservation</ButtonSection>
                    </div>
                    <div className="image-group">
                        <img className='animate-top' src={delight1} alt='Delight one'/>
                        <img className='animate-bottom' src={delight2} alt='Delight two'/>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CulinarySection;
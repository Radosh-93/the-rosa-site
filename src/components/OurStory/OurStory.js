import React from 'react';
import './OurStory.scss'
import ourStory from './../../assets/images/our-story-1.jpg'
import Headline from "../common/Headline";

const OurStory = (props) => {
    return (
        <section className='discover-our-story'>
            <div className="wrapper">
                <div className="restaurant-info">
                    <div className="restaurant-description padding-right animate-left">
                        <div className="global-headline">
                            <Headline view='dark' title='Our Story'>Discover</Headline>
                            <div className="asterisk">*</div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis hic minima natus nobis, reiciendis vel voluptatibus? Accusantium animi beatae blanditiis enim impedit, mollitia nihil nulla, recusandae, reprehenderit temporibus tenetur voluptates?
                        </p>
                        <a href="#" className="btn body-btn">About us</a>
                    </div>
                    <div className="restaurant-info-img animate-right">
                        <img src={ourStory} alt="Our story"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default OurStory;
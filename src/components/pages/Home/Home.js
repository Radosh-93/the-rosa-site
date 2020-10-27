import React from 'react'
import {Hero} from "./Hero/Hero";
import OurStorySection from "./OurStorySection/OurStorySection";
import ImageSection from "./ImageSection/ImageSection";
import OurMenu from "./OurMenu/OurMenu";
import CulinarySection from "./CulinarySection/CulinarySection";

const Home = (props) => {
    return (
        <>
            <Hero/>
            <OurStorySection/>
            <ImageSection className='tasteful-recipes'
                          titleH1='Recipes'
                          titleH2='Tasteful'/>
            <OurMenu/>
            <ImageSection className='perfect-blend'
                          titleH1='Blend'
                          titleH2='The Perfect'/>
            <CulinarySection /></>
    );
};

export default Home;
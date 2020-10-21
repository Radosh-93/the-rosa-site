import React from 'react';
import './App.scss';
import {Header} from './components/Header/Header';
import {Hero} from './components/Hero/Hero'
import CulinarySection from "./components/CulinarySection/CulinarySection";
import OurMenu from "./components/OurMenu/OurMenu";
import ImageSection from "./components/ImageSection/ImageSection";
import OurStorySection from "./components/OurStorySection/OurStorySection";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <OurStorySection/>
            <ImageSection className='tasteful-recipes'
                          titleH1='Recipes'
                          titleH2='Tasteful'/>
            <OurMenu/>
            <ImageSection className='perfect-blend'
                          titleH1='Blend'
                          titleH2='The Perfect'/>
            <CulinarySection />
            <Footer/>
        </div>
    );
}

export default App;

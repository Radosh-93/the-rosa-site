import React from 'react'
import './ImageSection.scss'
import Headline from "components/common/Headline";

const ImageSection = ({className, titleH1, titleH2}) => {
    return (
        <section className={`${className} between`}>
            <div className="wrapper">
                <div className="global-headline">
                    <div className="animate-top">
                        <Headline.h2>{titleH2}</Headline.h2>
                    </div>
                    <div className="animate-bottom">
                        <Headline.h1>{titleH1}</Headline.h1>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ImageSection;
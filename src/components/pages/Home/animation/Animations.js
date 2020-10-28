import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export const BlockAnimation = ({className, children, animateIn, offset = 150, animateOut}) => {
    const animateOutNew = !animateOut ? animateIn.replace('In', 'Out') : animateOut
    return (
        <ScrollAnimation className={className}
                         animateIn={animateIn}
                         animateOut={animateOutNew}
                         duration={0.7}
                         offset={offset}
        >
            {children}
        </ScrollAnimation>
    );
};
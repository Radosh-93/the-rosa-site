import React from 'react'
import './common.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css'

const Headline = {
    h1: ({children, view}) => {
        const color = view === 'dark' ? '#252525' : '#ffffff';
        return (
            <ScrollAnimation animateIn='animate__zoomIn'
                             animateOut='animate__zoomOut'
                             offset={100}>
                <h1 style={{color: color}} className="headline">{children}</h1>
            </ScrollAnimation>
        );
    },
    h2: ({children}) => {
        return (
            <ScrollAnimation animateIn='animate__fadeInUp'
                             animateOut='animate__fadeOutUp'
                             offset={100} delay={500}>
                <h2 className="sup-headline">{children}</h2>
            </ScrollAnimation>
        )
    }
};
export default Headline;
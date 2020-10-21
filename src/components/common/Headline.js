import React from 'react'
import './common.scss'

const Headline = {
    h1: ({children, view}) => {
        const color = view === 'dark' ? '#252525' : '#ffffff';
        return (
            <h1 style={{color: color}} className="headline">{children}</h1>
        );
    },
    h2: ({children}) => {
        return (
            <h2 className="sup-headline">{children}</h2>
        )
    }
};
export default Headline;
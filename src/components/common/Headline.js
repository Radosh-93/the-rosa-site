import React from 'react'
import './common.scss'
const Headline = ({children, view, title}) => {
    const color = view === 'dark' ? '#252525' : '#ffffff';
    return (
        <>
            <h2 className="sup-headline">{children}</h2>
            <h1 style={{color: color}} className="headline">{title}</h1>
        </>
    );
};
export default Headline;
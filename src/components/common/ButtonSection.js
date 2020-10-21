import React from 'react'

const ButtonSection = ({children, className = ''}) => {
    return (
        <button className={`btn ${className}`}>{children}</button>
    );
};
export default ButtonSection;
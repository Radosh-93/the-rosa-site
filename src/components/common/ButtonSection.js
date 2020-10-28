import React from 'react'

const ButtonSection = ({children, onClick, className = ''}) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}>{children}</button>
    );
};
export default ButtonSection;
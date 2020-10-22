import React from 'react'

const Asterisk = ({className, color = '#515151', size = '8px'}) => {
    return (
        <div className={className}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 455 455"
                version="1.1"
                viewBox="0 0 455 455"
                xmlSpace="preserve"
                fill={color}
                width={size}
                height={size}
            >
                <path d="M347.49 227L454.5 165.212 394.508 61.288 287.5 123.077 287.5 0 167.5 0 167.5 123.077 60.492 61.288 0.499 165.212 107.51 227 0.5 288.788 60.492 392.712 167.5 330.923 167.5 455 287.5 455 287.5 330.923 394.508 392.712 454.501 288.788z"></path>
            </svg>
        </div>
    );
};
export default Asterisk;
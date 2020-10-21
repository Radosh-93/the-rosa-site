import React from 'react'

export const Description = ({className = '', children = ''}) => {
    return (
        <p className={`description ${className}`}>
            {children}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum distinctio dolor libero possimus? Asperiores eos in iure magnam, quod repudiandae vel. Alias facere fugit iure officia quae similique veritatis.
        </p>
    );
};
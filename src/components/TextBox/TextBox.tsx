import React from 'react';

import './TextBox.css';

const TextBox: React.FC<{ title: string; text: string; }> = ({ title, text }) => {
    return (
        <div className='card'>
            <h1 className='textbox-title'>{title}</h1>
            <p className='body-text'>{text}</p>
        </div>
    );
};

export default TextBox;
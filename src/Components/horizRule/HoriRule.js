import React from 'react'
import './HoriRule.css';

export const HorizontalRule = ({title}) => {
    return (
        //<div className="seperator">Frontend</div>
        <hr data-content={title}></hr>
    );
}

import React from 'react';
import './Label.css'

function Label(props) {
    return (
        <div className={props.className}>{props.title}</div>
    );
}

export default Label;

import React from 'react';
import './InputDishes.css';

function InputDishes({ value, onChange }) {
    return (
        <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}




export default InputDishes;

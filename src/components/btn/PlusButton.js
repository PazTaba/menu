import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './PlusButton.css'

function PlusButton({ onClick }){
    return(
        <button className="plus-button" onClick={onClick} type={"button"}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    )
}

export default PlusButton;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './DeleteButton.css'
function DeleteButton(props) {
    const { onDelete } = props;

    const handleClick = () => {
        if (onDelete) {
            onDelete();
        }
    };

    return (
        <button onClick={handleClick} className="delete-button">
            <FontAwesomeIcon icon={faTrashAlt} />
        </button>
    );
}

export default DeleteButton;

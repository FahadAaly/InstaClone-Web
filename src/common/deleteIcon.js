import React from "react";

function DeleteIcon({ className, onHandleClick }) {
    const classes = `material-icons ${className}`;
    return (
        <i className={classes} onClick={onHandleClick}>
            delete
        </i>
    );
}

export default DeleteIcon;

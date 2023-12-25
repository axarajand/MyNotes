import React from "react";

function Button({ name, id, idClass, onAction }) {
    return <a className="notes-item__button" id={idClass} onClick={() => onAction(id)}>{name}</a>
}

export default Button;
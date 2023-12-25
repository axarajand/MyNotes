import React from "react";

function DeleteButton({ name, id, idClass }) {
    return <a className="notes-item__button" id={idClass} onClick={() => onDelete(id)}>{name}</a>
}

export default Button;
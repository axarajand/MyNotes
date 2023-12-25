import React from "react";
import NotesItemFooter from "./NotesItemFooter";
import moment from "moment";

function NotesItemBody({ title, body, createdAt, id, onDelete, onArchive, archived }) {
    return (
        <div className="notes-item__body">
            <h3 className="notes-item__title">{title}</h3>
            <p className="notes-item__created">{moment(createdAt).format("dddd, DD MMMM YYYY")}</p>
            <p className="notes-item__description">{body}</p>
            <NotesItemFooter id={id} onDelete={onDelete} onArchive={onArchive} archived={archived}/>
        </div>
    );
}

export default NotesItemBody;
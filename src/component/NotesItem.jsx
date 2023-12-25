import React from "react";
import NotesItemBody from "./NotesItemBody";

function NotesItem({ title, body, createdAt, id, onDelete, onArchive, archived }) {
    return (
        <div className="notes-item">
            <NotesItemBody title={title} body={body} createdAt={createdAt} id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
        </div>
    )
}

export default NotesItem;
import React from "react";
import Button from "./Button";

function NotesItemFooter({ id, onDelete, onArchive, archived }) {
    return (
        <div className="notes-item__footer">
            <Button name="Hapus" idClass="hapus" id={id} onAction={onDelete} />
            {archived ? (
                <Button name="Aktifkan" idClass="arsip" id={id} onAction={() => onArchive(id, false)} />
            ) : (
                <Button name="Arsipkan" idClass="arsip" id={id} onAction={() => onArchive(id, true)} />
            )}
        </div>
    )
}

export default NotesItemFooter;
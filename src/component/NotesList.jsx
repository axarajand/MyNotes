import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive }) {
    const activeNotes = notes.filter((note) => !note.archived);
    const archivedNotes = notes.filter((note) => note.archived);
    
    return (
        <div className="notes">
            <div className="notes-title">
                <h2>Catatan Aktif</h2>
            </div>
            <div className="notes-list">
            {activeNotes.length > 0 ? (
                <div className="notes-list">
                    {activeNotes.map((note) => (
                        <NotesItem
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            archived={note.archived}
                            {...note}
                        />
                    ))}
                </div>
            ) : (
                <div className="notes-null">
                    <p>Tidak ada Catatan Aktif.</p>
                </div>
            )}
            </div>

            <div className="notes-title">
                <h2>Catatan Diarsipkan</h2>
            </div>
            {archivedNotes.length > 0 ? (
                <div className="notes-list">
                    {archivedNotes.map((note) => (
                        <NotesItem
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            {...note}
                        />
                    ))}
                </div>
            ) : (
                <div className="notes-null">
                    <p>Tidak ada Catatan yang Diarsipkan.</p>
                </div>
            )}
        </div>
    );
}

export default NotesList;
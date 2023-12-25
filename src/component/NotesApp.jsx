import React from "react";
import NotesList from "./NotesList";
import NotesInput from "./NotesInput";
import Navbar from "./Navbar";
import { getData } from "../utils/data";

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getData(),
            search: "",
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id, isArchived) {
        const updatedNotes = this.state.notes.map((note) => {
            if (note.id === id) {
                return { ...note, archived: isArchived };
            }
            return note;
        });
    
        this.setState({ notes: updatedNotes });
    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {   
                        id: + new Date(),
                        title: title,
                        body: body,
                        archived: false,
                        createdAt: + new Date()
                    }
                ]
            }
        });
    }

    onSearchHandler(query) {
        this.setState({ search: query });
    }

    render() {
        const { notes, search } = this.state;
        const filteredNotes = notes.filter((note) =>
            note.title.toLowerCase().includes(search.toLowerCase())
        );

        return (
            <div className="notes-app">
                <Navbar onSearch={this.onSearchHandler} />
                <NotesInput addNotes={this.onAddNotesHandler} />
                <NotesList
                    notes={filteredNotes}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
            </div>
        );
    }
}

export default NotesApp;
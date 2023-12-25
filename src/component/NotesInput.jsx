import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onDeskripsiChangeEventHandler  = this.onDeskripsiChangeEventHandler.bind(this);
        this.onSubmitEventHandler  = this.onSubmitEventHandler.bind(this);
    }
 
    onTitleChangeEventHandler(event) {
        const characterLimit = 40;

        if (event.target.value.length <= characterLimit) {
            this.setState(() => {
                return {
                    title: event.target.value,
                }
            });
        }
    }
    
    onDeskripsiChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }
    
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    render() {
        const characterLimit = 40;

        return(
            <div className="notes-add">
                <h2>Tambah Catatan</h2>
                <form className="notes-input" onSubmit={this.onSubmitEventHandler}>
                    <div className="character-limit">
                        Sisa Karakter = {this.state.title.length}/{characterLimit}
                    </div>
                    <input type="text" placeholder="Masukan Judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea placeholder="Masukan Deskripsi ..." id="" cols="30" rows="10" value={this.state.body} onChange={this.onDeskripsiChangeEventHandler}></textarea>
                    <button type="submit">Tambah</button>
                </form>
            </div>
        )
    }
}

export default NotesInput;
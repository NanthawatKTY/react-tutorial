import React, {useState} from "react";
import './AppState.css';

const emptyNote  = {
    content: '', author: ''
}

function AppState(params) {

    //State
    const [note, setNote] = useState(emptyNote);
    const [editNote, setEditNote] = useState(null);
    const [allNotes, setAllNotes] = useState([]);


    //Functions form inputs
    function onNoteValueChange(event) {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                //Old content and author
                ...prevNote,

                //New value content and author
                [name]: value
            };
        });
    }

    function onEditNoteValueChange(event) {
        const { name, value } = event.target;
        setEditNote((prevNote) => {
            return {
                //Old content and author
                ...prevNote,

                //New value content and author
                [name]: value
            };
        });
    }

    //Function for adding, edit and del note
    function onAddNote(event) {
        event.preventDefault();
        
        //Add new note to the array
        setAllNotes((prevAllNotes) => {
            const newNote = { ...note }
            newNote.id = Date.now().toString();

            return [newNote, ...prevAllNotes ];
        })

        //Clear the form
        setNote(emptyNote)
    }

    function onEditNote(event) {
        event.preventDefault();

        setAllNotes((prevAllNotes) => {
            return prevAllNotes.map((note) => {
                if (note.id === editNote.id) {
                    return editNote;
                } else {
                    return note;
                }
            })
        })

        setEditNote(null);
    }

    function onDeleteNote(noteId) {
        setAllNotes((prevAllNotes) => {
            //Filter out the note with the id that not equals to the noteId
            return prevAllNotes.filter((theNote) => theNote.id !== noteId);
        })
    }


    //Elements
    const allNotesElements = allNotes.map((theNote) => {
        return (
            <div key={theNote.id} className="app-note">
                <p>{theNote.content}</p>
                <h5>{theNote.author}</h5>
                <p>
                    <button onClick={() => {setEditNote(theNote)}}>Edit</button>
                    <span> | </span>
                    <button onClick={() => onDeleteNote(theNote.id)}>Delete</button>
                </p>
            </div>
        );
    });

    let editDnoteElement = null;

    //If editNote is not null, then show the edit form
    if (!!editNote) {
        editDnoteElement = (
            <div className="app-edit-note">
                <form action="" method="post" onSubmit={onEditNote}>
                    <p>
                        <textarea
                            rows="3"
                            placeholder="บันทึกความในใจ"
                            name="content"
                            value={editNote.content}
                            onChange={onEditNoteValueChange}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            placeholder="ลงชื่อ"
                            name="author"
                            value={editNote.author}
                            onChange={onEditNoteValueChange}
                        />
                    </p>
                    <p>
                        <button type="submit">บันทึก</button>
                    </p>
                </form>
            </div>
        )
    }

    return (
        <section className="app-section">
            <div className="app-container">
                <h3>สักหน่อยมั้ยหละ</h3>
                <form action="" method="post" onSubmit={onAddNote}>
                    <p>
                        <textarea
                            rows="3"
                            placeholder="บันทึกความในใจ"
                            name="content"
                            value={note.content}
                            onChange={onNoteValueChange}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            placeholder="ลงชื่อ"
                            name="author"
                            value={note.author}
                            onChange={onNoteValueChange}
                        />
                    </p>
                    <p>
                        <button type="submit">บันทึก</button>
                    </p>
                </form>
                <div className="app-notes">
                    {allNotesElements}
                </div>
            </div>
            {editDnoteElement}
        </section>
    );
}

export default AppState;
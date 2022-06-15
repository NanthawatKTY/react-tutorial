import React, {useState} from "react";
import './AppState.css';

const emptyNote  = {
    content: '', author: ''
}

function AppState(params) {

    //State
    const [note, setNote] = useState(emptyNote);
    const [allNotes, setAllNotes] = useState([]);


    //Functions
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

    function addNote(event) {
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

    function deleteNote(noteId) {
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
                    <button>Edit</button>
                    <span> | </span>
                    <button onClick={() => deleteNote(theNote.id)}>Delete</button>
                </p>
            </div>
        );
    });

    return (
        <section className="app-section">
            <div className="app-container">
                <h3>สักหน่อยมั้ยหละ</h3>
                <form action="" method="post" onSubmit={addNote}>
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
        </section>
    );
}

export default AppState;
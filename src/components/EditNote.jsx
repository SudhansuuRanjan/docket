import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'

const EditNote = ({ setShowEditNote, showEditNote, notes, handleEdit }) => {
    const [content, setContent] = useState(notes.find(note => note.id === showEditNote.id).content);

    function handleSubmit(e) {
        e.preventDefault();
        handleEdit(showEditNote.id, content);
        setShowEditNote({
            show: false,
            id: null
        });
    }

    return (
        <div className='popup-container'>
            <div className='popup'>
                <div className='card-top'>
                    <h2>Edit Note</h2>
                    <button onClick={() => setShowEditNote({
                        show: false,
                        id: null
                    })} className='close-btn'><MdOutlineCancel /></button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="note"></label>
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} name="note" id="note" cols="30" rows="20"></textarea>
                    </div>
                    <button type='submit' className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditNote;
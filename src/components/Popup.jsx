import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'

const Popup = ({ setShowPopup, notes  , setNotes }) => {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) return;
    const newNote = {
      content: content,
      date: new Date().toLocaleDateString(),
      id: (Math.random() * 100000).toFixed(0)
    }
    setNotes([newNote, ...notes]);
    setShowPopup(false);
  }

  return (
    <div className='popup-container'>
      <div className='popup'>
        <div className='card-top'>
          <h2>New Note</h2>
          <button onClick={() => setShowPopup(false)} className='close-btn'><MdOutlineCancel /></button>
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

export default Popup
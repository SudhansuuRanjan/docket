import './App.css'
import React, { useState } from 'react';
import Card from './components/Card';
import Heading from './components/Heading';
import NavBar from './components/NavBar';
import Popup from './components/Popup';
import Search from './components/Search';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [notes, setNotes] = useState([]);

  function handleDelete(id) {
    const newNotes = notes.filter(note => note.id != id);
    setNotes(newNotes);
  }

  return (
    <div className='container'>
      {showPopup && <Popup notes={notes} setNotes={setNotes} setShowPopup={setShowPopup} />}
      <NavBar setShowPopup={setShowPopup} showPopup={showPopup} />
      <div className='main'>
        <Search />
        <Heading />
        <div className='notes-grid'>
          {
            notes.length === 0 ? <div>There isn't any note.</div> : notes.map((note, index) => {
              return <Card id={note.id} handleDelete={handleDelete} key={index} content={note.content} date={note.date} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App;

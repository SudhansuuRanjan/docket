import './App.css'
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Heading from './components/Heading';
import NavBar from './components/NavBar';
import Popup from './components/Popup';
import Search from './components/Search';
import EditNote from './components/EditNote';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showEditNote, setShowEditNote] = useState({
    show: false,
    id: null
  });
  const [searchText, setSearchText] = useState('');
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  function handleDelete(id) {
    const newNotes = notes.filter(note => note.id != id);
    localStorage.setItem('notes', JSON.stringify(newNotes));
    setNotes(newNotes);
  }

  function handleEdit(id, content) {
    const newNotes = notes.map(note => note.id === id ? { ...note, content: content } : { ...note });
    localStorage.setItem('notes', JSON.stringify(newNotes));
    setNotes(newNotes);
  }

  function getSearchResults() {
    if (searchText === '') return notes;
    return notes.filter(note => note.content.toLowerCase().includes(searchText.toLowerCase()));
  }

  useEffect(() => {
    const notes = localStorage.getItem('notes');
    if (notes) {
      setNotes(JSON.parse(notes));
    }
  }, []);

  useEffect(() =>{
    setFilteredNotes(getSearchResults())
  }, [notes,searchText]);

  return (
    <div className='container'>
      {showPopup && <Popup notes={notes} setNotes={setNotes} setShowPopup={setShowPopup} />}
      {
        showEditNote.show && <EditNote handleEdit={handleEdit} showEditNote={showEditNote} notes={notes} setShowEditNote={setShowEditNote} />
      }
      <NavBar setShowPopup={setShowPopup} showPopup={showPopup} />
      <div className='main'>
        <Search searchText={searchText} setSearchText={setSearchText} />
        <Heading />
        <div className='notes-grid'>
          {
            filteredNotes.length === 0 ?
              <div>There isn't any note.</div> :
              filteredNotes.map((note, index) => (
                <Card id={note.id} color={note.color} setShowEditNote={setShowEditNote} handleDelete={handleDelete} key={index} content={note.content} date={note.date} />
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default App;

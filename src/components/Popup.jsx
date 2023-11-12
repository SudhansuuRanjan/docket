import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const Popup = ({ setShowPopup, notes, setNotes }) => {
  const [content, setContent] = useState('');
  const [color, setColor] = useState('green');

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) return;
    const newNote = {
      content: content,
      date: new Date().toLocaleDateString(),
      id: (Math.random() * 100000).toFixed(0),
      color,
    };
    localStorage.setItem('notes', JSON.stringify([newNote, ...notes]));
    setNotes([newNote, ...notes]);
    setShowPopup(false);
  }

  const handleColorChange = (e) => {
    setColor(e.target.id);
  };

  return (
    <div className='popup-container'>
      <div className='popup'>
        <div className='card-top'>
          <h2>New Note</h2>
          <button onClick={() => setShowPopup(false)} className='close-btn'>
            <MdOutlineCancel />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='note'></label>
            <textarea
              placeholder='I wanted to...'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name='note'
              id='note'
              cols='30'
              rows='20'
            ></textarea>
          </div>
          <div>
            <label htmlFor='color' className='color-label'>
              Bg Color
            </label>
            <div className='color-item'>
              <input
                onChange={handleColorChange}
                type='radio'
                name='color'
                id='green'
                checked={color === 'green'}
              />
              <label htmlFor="green"><div className='green' style={{height:"1rem", width:"4rem"}}></div></label>
            </div>
            <div className='color-item'>
              <input
                onChange={handleColorChange}
                type='radio'
                name='color'
                id='blue'
                checked={color === 'blue'}
              />
              <label htmlFor="blue"><div className='blue' style={{height:"1rem", width:"4rem"}}></div></label>
            </div>
            <div className='color-item'>
              <input
                onChange={handleColorChange}
                type='radio'
                name='color'
                id='pink'
                checked={color === 'pink'}
              />
              <label htmlFor="pink"><div className='pink' style={{height:"1rem", width:"4rem"}}></div></label>
            </div>
            <div className='color-item'>
              <input
                onChange={handleColorChange}
                type='radio'
                name='color'
                id='orange'
                checked={color === 'orange'}
              />
              <label htmlFor="orange"><div className='orange' style={{height:"1rem", width:"4rem"}}></div></label>
            </div>
          </div>
          <button type='submit' className='submit-btn'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;

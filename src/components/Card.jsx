import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

const Card = ({ content, date, id, color, handleDelete, setShowEditNote }) => {
  return (
    <div className={`${color} note-card`}>
      <div className='note'>
        {content}
      </div>
      <div className='card-foot'>
        <p className='date'>{date}</p>
        <div className='card-foot-btns'>
          <button onClick={() => setShowEditNote({
            show: true,
            id: id
          })} className='edit-btn'><AiFillEdit /></button>
          <button onClick={() => handleDelete(id)} className='edit-btn'><AiFillDelete /></button>
        </div>
      </div>
    </div>
  )
}

export default Card
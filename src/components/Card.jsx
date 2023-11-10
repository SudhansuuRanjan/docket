import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

const Card = ({ content, date, id, handleDelete }) => {
  return (
    <div className='note-card'>
      <div className='note'>
        {content}
      </div>
      <div className='card-foot'>
        <p className='date'>{date}</p>
        <div className='card-foot-btns'>
          <button className='edit-btn'><AiFillEdit /></button>
          <button onClick={() => handleDelete(id)} className='edit-btn'><AiFillDelete /></button>
        </div>
      </div>
    </div>
  )
}

export default Card
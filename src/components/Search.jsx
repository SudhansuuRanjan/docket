import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ searchText, setSearchText }) => {
  return (
    <div style={{
      position: "relative",
    }}>
      <input
        className='search'
        value={searchText}
        onChange={function (event) {
          setSearchText(event.target.value)
        }}
        type='search'
        placeholder='Search'
      />
      <MdSearch size={22} style={{
        position: "absolute",
        top: "1.5rem",
        left: "0rem",
        margin: "auto 0.5rem",
        color:"gray"
      }} />
    </div>
  )
}

export default Search
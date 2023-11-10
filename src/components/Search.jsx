import React, { useState } from 'react'

const Search = () => {

  const [searchValue, setSearchValue] = useState('')


  return (
    <div>
      <input className='search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type='search' placeholder='Search' />
    </div>
  )
}

export default Search
import React from 'react'
import './SearchBar.scss'

function SearchBar ({searchTerm, setSearchTerm}) {

const updateSearchTerm = (e) => {
    // - check if the value in the input tag is dynamic
    console.log(e.target.value) 
    setSearchTerm(e.target.value)
}
  return (
    <div>
        <input 
        className='searchBar'
        placeholder='Search By Name'
        value={searchTerm}
        onChange={updateSearchTerm}
        />
    </div>
  )
}

export default SearchBar
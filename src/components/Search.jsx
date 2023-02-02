import React from 'react'
import { MdSearch } from 'react-icons/md'

function Search({ handleSearchNote }) {
  return (
    <div className="flex items-center rounded-[10px] p-[5px] mb-[1.5rem] bg-gray-200">
        <MdSearch className='search-icon' size='1.3em' />
        <input className="bg-gray-200 w-full border-none focus:outline-none" onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="type to search..."/>
    </div>
  )
}

export default Search
import React from 'react'

import search from "../assets/icons/search.svg"


const SearchBar = () => {
  return (
    <div>
        <form className='SearchBar'>
            <input className='SearchBar__field' type='text' placeholder='Szukaj'/>
            <button className='SearchBar__submit' type='submit'><img src={search}/></button>
        </form>
    </div>
  )
}

export default SearchBar
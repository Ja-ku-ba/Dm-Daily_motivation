import React from 'react'
import { Link } from 'react-router-dom'

import dogo from "../assets/images/dogo.jpg"
import SearchPeople from './SearchPeople'
import SearchEvents from './SearchEvents'
import SearchGoals from './SearchGoals'

const SearchResults = () => {
  return (
    <div>
        <SearchPeople/>
        <SearchGoals  />
        <SearchEvents/>
    </div>
  )
}

export default SearchResults
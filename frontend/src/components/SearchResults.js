import React from 'react'
import { Link } from 'react-router-dom'

import dogo from "../assets/images/dogo.jpg"

const SearchResults = () => {
  return (
    <Link className='SearchResults'>
        <div className='SearchResults__profile'>
            <img className='SearchResults__profile__profilePicture' src={dogo} width={"50px"} height={"50px"}></img>
            <span className='SearchResults__profile__name'>Jhon Bean</span>
            <span className='SearchResults__profile__tracker'>13 goals in last month</span>
        </div>
        <div className='SearchResults__event'>
            <img className='SearchResults__profile__profilePicture' src={dogo} width={"50px"} height={"50px"}></img>
            <span className='SearchResults__profile__name'>Jhon Bean</span>
            <span className='SearchResults__profile__tracker'>13 goals in last month</span>
        </div>
        <div className='SearchResults__achivment'>
            <img className='SearchResults__profile__profilePicture' src={dogo} width={"50px"} height={"50px"}></img>
            <span className='SearchResults__profile__name'>Jhon Bean</span>
            <span className='SearchResults__profile__tracker'>13 goals in last month</span>
        </div>
    </Link>
  )
}

export default SearchResults
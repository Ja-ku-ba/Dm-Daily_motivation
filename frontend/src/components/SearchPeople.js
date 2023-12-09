import React from 'react'
import { Link } from 'react-router-dom'

import dogo from "../assets/images/dogo.jpg"

const SearchPeople = () => {
  return (
    <div className='SearchResults'>
      <div className='SearchResults__list'>
        <img className='SearchResults__list__Picture' src={dogo} width={"50px"} height={"50px"}></img>
        <div className='SearchResults__list__informations'>
          <span className='SearchResults__list__informations__name'>Jhon Bean</span>
          <span className='SearchResults__list__informations__description'>13 goals in last month</span>
        </div>
      </div>
      <div className='SearchResults__list'>
        <img className='SearchResults__list__Picture' src={dogo} width={"50px"} height={"50px"}></img>
        <div className='SearchResults__list__informations'>
          <span className='SearchResults__list__informations__name'>Elton Jho </span>
          <span className='SearchResults__list__informations__description'>I'm still standing</span>
        </div>
      </div>
      <div className='SearchResults__list'>
        <img className='SearchResults__list__Picture' src={dogo} width={"50px"} height={"50px"}></img>
        <div className='SearchResults__list__informations'>
          <span className='SearchResults__list__informations__name'>Queen Anna</span>
          <span className='SearchResults__list__informations__description'>I will make a snowman, lets do it!</span>
        </div>
      </div>

      <Link className='SearchResults__SeeMore'> 
        Zobacz więcej    
      </Link> 
    </div>
  )
}

export default SearchPeople
import React from 'react'
import { Link } from 'react-router-dom'

import dogo from "../assets/images/dogo.jpg"

const SearchGoals = () => {
  return (
    <div className='SearchResults'>
      <div className='SearchResults__list'>
        <img className='SearchResults__list__Picture' src={dogo} width={"50px"} height={"50px"}></img>
        <div className='SearchResults__list__informations'>
          <span className='SearchResults__list__informations__name'>Running</span>
          <span className='SearchResults__list__informations__description'>#1 popular</span>
        </div>
      </div>
      <div className='SearchResults__list'>
        <img className='SearchResults__list__Picture' src={dogo} width={"50px"} height={"50px"}></img>
        <div className='SearchResults__list__informations'>
          <span className='SearchResults__list__informations__name'>Reading</span>
          <span className='SearchResults__list__informations__description'>#3 popular</span>
        </div>
      </div>
      <div className='SearchResults__list'>
        <img className='SearchResults__list__Picture' src={dogo} width={"50px"} height={"50px"}></img>
        <div className='SearchResults__list__informations'>
          <span className='SearchResults__list__informations__name'>Be yourself</span>
          <span className='SearchResults__list__informations__description'>#4 popular</span>
        </div>
      </div>
      <Link className='SearchResults__SeeMore'> 
        Zobacz więcej    
      </Link> 
    </div>
  )
}

export default SearchGoals
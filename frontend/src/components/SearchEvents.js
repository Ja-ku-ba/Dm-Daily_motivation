import React from 'react'
import { Link } from 'react-router-dom'

import dogo from "../assets/images/dogo.jpg"

const SearchEvents = () => {
  return (
    <div className='SearchResults'>
      <div className='SearchResults__list'>
        <img className='SearchResults__list__Picture' src={dogo} width={"50px"} height={"50px"}></img>
        <div className='SearchResults__list__informations'>
          <span className='SearchResults__list__informations__name'>Iron Men Poland</span>
          <span className='SearchResults__list__informations__description'>1.4k joined</span>
        </div>
      </div>
      <div className='SearchResults__list'>
        <img className='SearchResults__list__Picture' src={dogo} width={"50px"} height={"50px"}></img>
        <div className='SearchResults__list__informations'>
          <span className='SearchResults__list__informations__name'>New Year, New Me!</span>
          <span className='SearchResults__list__informations__description'>143k joined, and 3 of your firends</span>
        </div>
      </div>
      <div className='SearchResults__list'>
        <img className='SearchResults__list__Picture' src={dogo} width={"50px"} height={"50px"}></img>
        <div className='SearchResults__list__informations'>
          <span className='SearchResults__list__informations__name'>Sumer Healthcare</span>
          <span className='SearchResults__list__informations__description'>520k joined, and 17 of your friends</span>
        </div>
      </div>

      <Link className='SearchResults__SeeMore'> 
        Zobacz więcej    
      </Link> 
    </div>
  )
}

export default SearchEvents
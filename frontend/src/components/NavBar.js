import React from 'react'


const NavBar = () => {
  return (
    <div className='NavBar'>
        <ul className='NavBar__elements'>
            <li className='NavBar__elements--logo'>Logo</li>
            <li className='NavBar__elements--hamburger'>
              <button class="btn btn-4 btn-sep icon-send">
                <svg width={"48px"} height={"48px"}/>
              </button>
            </li>
        </ul>
    </div>
  )
}

export const Ham = () => {
  return (
    <div className='NavBar__Hamburger'>
        <ul>
            <l1>1. option</l1>
            <l1>1. option</l1>
            <l1>1. option</l1>
            <l1>1. option</l1>
            <l1>1. option</l1>
        </ul>        
    </div>
  )
}


export default NavBar
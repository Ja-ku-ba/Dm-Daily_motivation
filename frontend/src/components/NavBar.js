import React, {useState} from 'react'


const NavBar = () => {
  let [active, setActive] = useState(false)
  return (
    <div className='NavBar'>
        <ul className='NavBar__elements'>
            <li className='NavBar__elements--logo'>Logo</li>
            <li className='NavBar__elements--hamburger'>
              <button className="btn btn-4 btn-sep icon-send" onClick={() => setActive(!active)}>
                <svg width={"48px"} height={"48px"}/>
              </button>
            </li>
        </ul>
        {active?  <Ham></Ham> : <span></span>}
    </div>
  )
}

export const Ham = () => {
  return (
    <div className='NavBar__Hamburger'>
        <ul className='NavBar__Hamburger--list'>
            <li>1. option</li>
            <li>1. option</li>
            <li>1. option</li>
            <li>1. option</li>
            <li>1. option</li>
        </ul>        
    </div>
  )
}


export default NavBar
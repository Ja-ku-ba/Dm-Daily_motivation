import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode';

import AuthContext from '../context/AuthContext'

const NavBar = () => {

  let { user, logoutUser } = useContext(AuthContext)
  let [active, setActive] = useState(false)

  let byeBye = () => {
    logoutUser(), 
    setActive(false)
  }

  return (
    <div className='NavBar'>
        <ul className='NavBar__elements'>
            <li className='NavBar__elements--logo'><Link to={"/"}>Logo</Link></li>
            <li className='NavBar__elements--hamburger'>
            {user !== null ? 
              <button className="btn btn-4 btn-sep icon-send" onClick={() => setActive(!active)}>
                <svg width={"48px"} height={"48px"}/>
              </button> : 
              <Link to={"/login"}>Zaloguj</Link>
            }
            </li>
        </ul>
        {active ?  
        <div className='NavBar__Hamburger'>
          <ul className='NavBar__Hamburger--list' onClick={() => setActive(false)}>
            <li><Link to={`/profile/${user.username}`}>{user.username}</Link></li>
            <li>1. option</li>
            <li>1. option</li>
            <li><butotn onClick={() => byeBye()}>Wyloguj</butotn></li>
          </ul>        
        </div> : <span></span>}
    </div>
  )
}

export default NavBar
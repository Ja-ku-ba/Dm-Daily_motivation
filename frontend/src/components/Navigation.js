import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

import logo from "../assets/icons/home.svg"
import posts from "../assets/icons/posts.svg"
import friends from "../assets/icons/friends.svg"
import calendar from "../assets/icons/calendar.svg"
import settings from "../assets/icons/settings.svg"

const Navigation = () => {
  const { logoutUser } = useContext(AuthContext);
    
  return (
    <div className='Navigation'>
        <ul className='Navigation__panel'>
        <li className='Navigation__panel__ele'>
          <Link to={"/"}>
            <img width={"35px"} height={"35px"} src={logo}/>
            </Link>
        </li>
        <li className='Navigation__panel__ele'>
          <Link to={'/posts'}>
            <img width={"35px"} height={"35px"} src={posts}/>
          </Link>
        </li>
        <li className='Navigation__panel__ele'>
          <img width={"35px"} height={"35px"} src={friends}/>
        </li>
        <li className='Navigation__panel__ele'>
          <button type='button' onClick={logoutUser}>
          <img width={"35px"} height={"35px"} src={calendar}/>
          </button>
        </li>
        <li className='Navigation__panel__ele'>
          <Link to={"/login"}>
            <img width={"35px"} height={"35px"} src={settings}/>
          </Link>
        </li>
        </ul>
    </div>
  )
}

export default Navigation
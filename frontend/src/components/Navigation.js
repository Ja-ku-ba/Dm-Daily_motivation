import React from 'react'
import logo from "../assets/icons/home.svg"
import add from "../assets/icons/add.svg"
import friends from "../assets/icons/friends.svg"
import calendar from "../assets/icons/calendar.svg"
import settings from "../assets/icons/settings.svg"

const Navigation = () => {
  return (
    <div className='Navigation'>
        <ul className='Navigation__panel'>
        <li className='Navigation__panel__ele'><img width={"35px"} height={"35px"} src={logo}></img></li>
        <li className='Navigation__panel__ele'><img width={"35px"} height={"35px"} src={add}></img></li>
        <li className='Navigation__panel__ele'><img width={"35px"} height={"35px"} src={friends}></img></li>
        <li className='Navigation__panel__ele'><img width={"35px"} height={"35px"} src={calendar}></img></li>
        <li className='Navigation__panel__ele'><img width={"35px"} height={"35px"} src={settings}></img></li>
        </ul>
    </div>
  )
}

export default Navigation
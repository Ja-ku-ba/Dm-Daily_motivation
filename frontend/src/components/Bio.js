import React from 'react'
import avatar from "../assets/defaultAvatars/icons8-avatar-96.png"
const Bio = () => {
  return (
    <div className='Bio'>
        <img className='Bio__profilePicture' alt='profilePicture' src={ avatar }></img>
        <li className='Bio__additionalInfos'>
            <ul>Friends: 123</ul>
            <ul>Goals achived last month: 19</ul>
        </li>
    </div>
  )
}

export default Bio
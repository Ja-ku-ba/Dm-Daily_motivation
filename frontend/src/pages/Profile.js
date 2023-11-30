import React from 'react'
import Tracker from "../components/Tracker";
import Posts from "../components/Post";
import Bio from "../components/Bio";

const Profile = () => {
  return (
    <div className='Profile'>
        <div className='Profile__header'>
            <Bio/>
        </div>
        <div className='Profile__tracker'>
          <Tracker/>
        </div>
        <div className='Content'>
          <Posts/>
        </div>
    </div>
  )
}

export default Profile
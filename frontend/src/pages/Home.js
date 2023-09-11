import React from 'react'

import Tracker from "../components/Tracker";
import ToDoList from "../components/ToDoList";
import Post from '../components/Post';

const Home = () => {
  return (
    <div className='Home'>
        <Tracker/>
        <ToDoList/>
        <Post/>
    </div>
  )
}

export default Home
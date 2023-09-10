import React from 'react'

import Tracker from "../components/Tracker";
import ToDoList from "../components/ToDoList";
import Posts from '../components/Posts';

const Home = () => {
  return (
    <div className='Home'>
        <Tracker/>
        <ToDoList/>
        <Posts/>
    </div>
  )
}

export default Home
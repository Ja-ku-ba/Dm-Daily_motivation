import React from 'react'

import Tracker from "../components/Tracker";
import ToDoList from "../components/ToDoList";

const Home = () => {
  return (
    <div className='Home'>
        <Tracker/>
        <ToDoList/>
        <ToDoList/>
    </div>
  )
}

export default Home
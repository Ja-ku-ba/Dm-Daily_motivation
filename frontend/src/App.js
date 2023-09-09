import "./App.scss";
import React from "react";
import NavBar from "./components/NavBar";
import Tracker from "./components/Tracker";
import ToDoList from "./components/ToDoList";
import Navigation from "./components/Navigation";


function App() {
    
    return (
      <div className="App">
        <NavBar/>
        <Tracker/>
        <ToDoList/>
        <ToDoList/>
        <Navigation/>
      </div>
    );
}

export default App;

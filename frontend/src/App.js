import "./App.scss";
import React from "react";
import NavBar from "./components/NavBar";
import Tracker from "./components/Tracker";


function App() {
    
    return (
      <div className="App">
        <NavBar/>
        <Tracker/>
        <h1 className="test">Ok?</h1>
      </div>
    );
}

export default App;

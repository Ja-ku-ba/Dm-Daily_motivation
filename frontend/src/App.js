import "./App.scss";
import React from "react";
import NavBar from "./components/NavBar";
import Navigation from "./components/Navigation";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
    
    return (
      <div className="App">
        <NavBar/>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
          </Routes>
        </Router>
        
        <Navigation/>
      </div>
    );
}

export default App;

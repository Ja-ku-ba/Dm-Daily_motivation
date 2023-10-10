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
import Posts from "./pages/Posts";
import LoginRegister from "./pages/LoginRegister";

function App() {
    
    return (
      <div className="App">
        <NavBar/>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/posts" element={<Posts/>} exact/>
            <Route path="/login" element={<LoginRegister/>} exact/>
          </Routes>
          <div className="navigation--spaceFiller"></div>
          <Navigation/>
        </Router>
        
      </div>
    );
}

export default App;

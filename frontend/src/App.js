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
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";
import { AlertProvider } from "./context/AlertContext";

function App() {
    
    return (
      <div className="App">
        <NavBar/>
          <Router>
          <AuthProvider>
            <AlertProvider>
              <Routes>
                <Route element={<PrivateRoutes/>}>
                  <Route path="/" element={<Home/>} exact/>
                  <Route path="/posts" element={<Posts/>}/>
                </Route>
                <Route path="/login" element={<LoginRegister/>}/>
              </Routes>
            <div className="navigation--spaceFiller"></div>
            <Navigation/>
            </AlertProvider>
          </AuthProvider>
        </Router>
        
      </div>
    );
}

export default App;

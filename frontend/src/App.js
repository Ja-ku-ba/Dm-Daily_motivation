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
import Alert from "./components/Alert";
import Profile from "./pages/Profile";
import PostPage from "./pages/PostPage";

function App() {
    
    return (
      <div className="App">
        <Router>
          <AlertProvider>
            <AuthProvider>
              <NavBar/>
              <Alert/>
              <Routes>
                <Route element={<PrivateRoutes/>}>
                  <Route path="/" element={<Home/>} exact/>
                  <Route path="/posts" element={<Posts/>}/>
                  <Route path="/post" element={<PostPage/>}/>
                  {/* <Route path="/post/:username/:added" element={<PostPage/>}/> */}
                  <Route path="/profile/:username" element={<Profile/>}/>
                </Route>
                <Route path="/login" element={<LoginRegister/>}/>
              </Routes>
            <div className="navigation--spaceFiller"></div>
            <Navigation/>
            </AuthProvider>
          </AlertProvider>
        </Router>
        
      </div>
    );
}

export default App;

import jwtDecode from 'jwt-decode'

import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()
export default AuthContext


export const AuthProvider = ({children}) => {
    
    let [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)

    let navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        let response = await fetch("/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'email':e.target.email.value, 
                'password':e.target.password.value
            })
        })
        let data = await response.json()
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate("/")
        } else {
            alert("Coś poszło nie tak")
        }
    }

    let contextData = {
        loginUser: loginUser,
        user: user,
    }
  return(
    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
  )
}

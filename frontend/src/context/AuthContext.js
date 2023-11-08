import jwtDecode from 'jwt-decode'

import React, { createContext, useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";

import AlertContext from "../context/AlertContext"
import messages from "../utils/Messages"

const AuthContext = createContext()
export default AuthContext


export const AuthProvider = ({children}) => {
    let { params, setParams, setAlertStatus } = useContext(AlertContext)
    
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [action, setAction] = useState('l') // false means, that user wants to log in
    let [loading, steLoading] = useState(true)
    
    let navigate = useNavigate();
    
    let login = async (e) =>  {
        try{
            if (e.target.email.value){
                let response = await fetch("token/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        'email':e.target.email.value, 
                        'password':e.target.password.value
                    })
                })
            if (response.status === 200){
                let data = await response.json()
                setAuthTokens(data)
                setUser(jwtDecode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
                navigate("/")
            } else {
                setParams(messages["register"]['invalidCredentials']);
                setAlertStatus(true)
            }
            return            
            }
        }
        catch(error){
            setParams(messages["register"]['invalidCredentials']);
            setAlertStatus(true)
        }
    }
    
    let register = async (e) => {
        try{
            let response = await fetch("register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    'email':e.target.email.value, 
                    'password':e.target.password.value, 
                    'username': e.target.username.value,
                    'password2': e.target.password2.value
                })
            })
            if (response.status !== 200){
                setParams(messages["register"]['exists']);
                setAlertStatus(true);
            }
        }
        catch(error) {
            setParams(messages["register"]['exists']);
            setAlertStatus(true);
        }
    }

    const loginUser = async (e) => {
        e.preventDefault();
        if (action === 'r'){
            await register(e)
            await login(e)
        }
        else {
            await login(e)
        }
    }
    

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate("/login")
    }
    
    let updateToken = async () => {
        let response = await fetch("/token/refresh/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'refresh': authTokens.refresh
            })
        })
        let data = await response.json()
        if (response.status === 200){
            setAuthTokens(data)
            setUser(data.access)
            localStorage.setItem("authTokens", JSON.stringify(data))
        } else {
            logoutUser()
            alert("Coś poszło nie tak")
        }
    }
    
        useEffect(() => {
            const timeDelay = 1000 * 60 * 4
            let interval = setInterval(() => {
                if(authTokens) {
                    updateToken()
                }
            }, timeDelay)
            return () => clearInterval(interval)
        }, [authTokens, loading])
    
    let contextData = {
        loginUser: loginUser,
        logoutUser: logoutUser,
        user: user,
        action: action,
        setAction: setAction
    }
    return(
    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
  )
}


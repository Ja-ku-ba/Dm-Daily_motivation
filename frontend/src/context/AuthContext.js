import jwtDecode from 'jwt-decode'

import React, { createContext, useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";

import AlertContext from '../context/AlertContext';
import messages from "../utils/Messages"

const AuthContext = createContext()
export default AuthContext


export const AuthProvider = ({children}) => {
    const { alertStatus, setAlertStatus, setParams, params } = useContext(AlertContext);
    
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)

    let navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        try{
            let response = await fetch("register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    'email':e.target.emailr.value, 
                    'password':e.target.passwordr.value, 
                    'username': e.target.usernamer.value,
                    'password2': e.target.password2r.value
                })
            })
            if (response.status !== 200){
                console.log("Użytkwnik o podanych danych już istnieje")
                return
            }
            else {
            console.log(alertStatus, params)
            setAlertStatus(true)
            setParams("red", "niedowiaryzetodziala")
            console.log(alertStatus, params)
            console.log(alertStatus, params)
            console.error("Błąd podczas logowania: ", error)
            console.log(alertStatus, params)
            }
        }
        catch(error) {
            console.log(alertStatus, params)
            setAlertStatus(true)
            setParams("red", "niedowiaryzetodziala")
            console.log(alertStatus, params)
            console.log(alertStatus, params)
            console.error("Błąd podczas logowania: ", error)
            console.log(alertStatus, params)
            console.error("Błąd podczas rejestracji: ", error)
        }
        try{
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
        catch(error){
            console.log(alertStatus, params)
            setParams("red", "niedowiaryzetodziala")
            console.log(alertStatus, params)
            setAlertStatus(true)
            console.log(alertStatus, params)
            console.error("Błąd podczas logowania: ", error)
            console.log(alertStatus, params)
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate("/login")
    }
    
    let updateToken = async () => {
        console.log("Weszło")
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
        }, [authTokens])
    
    let contextData = {
        loginUser: loginUser,
        logoutUser: logoutUser,
        user: user,
    }
    return(
    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
  )
}

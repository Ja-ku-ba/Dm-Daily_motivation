import React, { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()
export default AuthContext


export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = ([null])
    let [user, setUser] = ([null])

    const loginUser = async (e) => {
        e.preventDefault();
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        let response = fetch("/token/", {
            method: "POST",
            headers: {
                "Context-Type": "application/json"
            },
            body: JSON.stringify({
                'email':e.target.value.email, 
                'password':e.target.value.password
            })
        })
        let data = await response.json()
        console.log(data, 'BBBBBBBBBBBBBBBBBBBBbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbBBBBBBBBBBBBBBBBBBBBBBBBBBBBB')
    }

    let contextData = {
        loginUser: loginUser,

    }
  return(
    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
  )
}
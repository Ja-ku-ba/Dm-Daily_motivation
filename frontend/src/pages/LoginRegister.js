import React, { useState } from 'react'
import jsSHA from 'jssha';

const LoginRegister = () => {
    let [action, setAction] = useState(["Zaloguj", "Nie masz konta?", "Zarejestruj się"])
    let changeAction = () => {
        if (action[0] === "Zaloguj"){
            setAction(["Zarejestruj", "Masz konto?", "Zaloguj się"])
        }
        else {
            setAction(["Zaloguj", "Nie masz konta?", "Zarejestruj się"])
        }
    }

    let takeAction = async (e) => {
        e.preventDefault()

        var hashObj = new jsSHA("SHA-512", "TEXT");
        hashObj.update(e.target.password.value );
        var hash = hashObj.getHash("HEX");
        
        try {
            const endpoint = action[0] === "Zaloguj" ? "login" : "register";
        
            let response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": e.target.email.value,
                    "hash": hash,
                })
            });
        } catch (error) {
            console.error("Błąd: ", error)
        }
        
        return
    }
    return (
        <div>
        <form onSubmit={(e) => takeAction(e)}>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email'/>

            <label htmlFor='password'>Hasło:</label>
            <input id='password' type='password'/>

            <input type='submit' value={action[0]}/>
        </form>
        <form>
            
        </form>
        <span>{action[1]}</span>
        <button onClick={() => changeAction()}>{action[2]}</button>
    </div>
  )
}

export default LoginRegister




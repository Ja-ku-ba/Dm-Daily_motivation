import React, { useState } from 'react'
import jsSHA from 'jssha';

const LoginRegister = () => {
    // action = true, means login, false is register
    let [action, setAction] = useState(true)            
    let changeAction = (e) => {
        const inputElements = document.querySelectorAll('input');
        inputElements.forEach((input) => {
            input.value = '';
        });

        setAction(!action)
    }

    let hashPassword = (word) => {
        var hashObj = new jsSHA("SHA-512", "TEXT");
        hashObj.update(word);
        return hashObj.getHash("HEX");
    }

    let takeAction = async (e) => {
        e.preventDefault()
        
        try {
            const requestData = {
                email: e.target.email.value,
                password: hashPassword(e.target.password.value),
            };
            
            if (!action) {
                requestData.username = e.target.username.value;
                requestData.password2 = hashPassword(e.target.password.value)
            }
            
            const endpoint = action === true ? "account/login/" : "account/register/";
            
            let response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });
            console.log(await response.json(), "tutaj--------")

        } catch (error) {
            console.error("Błąd: ", error)
        }
        
        return
    }
    return (
        <div className='Action'>

            {action === true ? (
                <div className='Action__card'>
                    <form onSubmit={(e) => takeAction(e)} className='Action__card__form'>
                        <div className='Action__card__form__group'>
                            <label htmlFor='email'>Email:</label>
                            <input id='email' type='email'/>
                        </div>
            
                        <div className='Action__card__form__group'>
                            <label htmlFor='password'>Hasło:</label>
                            <input id='password' type='password'/>
                        </div>
            
                        <input className='Action__card__form__submit' type='submit' value={"Zaloguj"}/>
                    </form>
                    
                    <hr></hr>

                    <div className='Action__card__change'>
                        <span>Nie masz konta?</span>
                        <button onClick={(e) => changeAction(e)}>Zarejestruj się</button>
                    </div>
                </div>
            ) : (
                <div className='Action__card'>
                    <form onSubmit={(e) => takeAction(e)} className='Action__card__form'>
                        <div className='Action__card__form__group'>
                            <label htmlFor='username'>Nazwa użytkownika:</label>
                            <input id='username' type='text'/>
                        </div>

                        <div className='Action__card__form__group'>
                            <label htmlFor='email'>Email:</label>
                            <input id='email' type='email'/>
                        </div>
            
                        <div className='Action__card__form__group'>
                            <label htmlFor='password'>Hasło:</label>
                            <input id='password' type='password'/>
                        </div>
            
                        <div className='Action__card__form__group'>
                            <label htmlFor='password2'>Potwierdź hasło:</label>
                            <input id='password2' type='password'/>
                        </div>
            
                        <input className='Action__card__form__submit' type='submit' value={"Zarejestruj"}/>
                    </form>

                    <hr></hr>

                    <div className='Action__card__change'>
                        <span>Masz konto?</span>
                        <button onClick={(e) => changeAction(e)}>Zaloguj się</button>
                    </div>
                </div>
            )}

        </div>
    )
                
}

export default LoginRegister





import React, { useState, useContext } from 'react'
import AuthContext from '../context/AuthContext';
import AlertContext from '../context/AlertContext';

const LoginRegister = () => {
    const { loginUser } = useContext(AuthContext);
    const { alertStatus, setAlertStatus } = useContext(AlertContext)
    
    // action = true, means login, false is register
    let [action, setAction] = useState(false)            
    let changeAction = (e) => {
        const inputElements = document.querySelectorAll('input')
        inputElements.forEach((input) => {
            input.value = ''
        })
        setAction(!action)
    }

    return (
        <div className='Action'>

            {action === true ? (
                <div className='Action__card'>
                    <form onSubmit={loginUser} className='Action__card__form'>
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
                        <button type='button' onClick={(e) => changeAction(e)}>Zarejestruj się</button>
                    </div>
                </div>
            ) : (
                <div className='Action__card'>
                    <form onSubmit={loginUser} className='Action__card__form'>
                        <div className='Action__card__form__group'>
                            <label htmlFor='usernamer'>Nazwa użytkownika:</label>
                            <input id='usernamer' type='text'/>
                        </div>

                        <div className='Action__card__form__group'>
                            <label htmlFor='emailr'>Email:</label>
                            <input id='emailr' type='email'/>
                        </div>
            
                        <div className='Action__card__form__group'>
                            <label htmlFor='passwordr'>Hasło:</label>
                            <input id='passwordr' type='password'/>
                        </div>
            
                        <div className='Action__card__form__group'>
                            <label htmlFor='password2r'>Potwierdź hasło:</label>
                            <input id='password2r' type='password'/>
                        </div>
            
                        <input className='Action__card__form__submit' type='submit' value={"Zarejestruj"}/>
                    </form>

                    <hr></hr>

                    <div className='Action__card__change'>
                        <span>Masz konto?</span>
                        <button type='button' onClick={(e) => changeAction(e)}>Zaloguj się</button>
                    </div>
                </div>
            )}

        </div>
    )
                
}

export default LoginRegister





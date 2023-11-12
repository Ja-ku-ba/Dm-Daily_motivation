import React, { useState, useContext } from 'react'
import AuthContext from '../context/AuthContext';

const LoginRegister = () => {
    const { action, setAction, loginUser } = useContext(AuthContext);

    let changeAction = () => {
        // clears inputs, othersie chrome autofiil password in email field
        const inputElements = document.querySelectorAll('input');
        inputElements.forEach((input) => {
            input.value = '';
        });
        
        if (action === 'l'){
            setAction('r')
        }
        else {
            setAction('l')
        }
    }
    return (
        <div className='Action'>

            {action === 'l' ? (
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
                        <button type='button' onClick={() => changeAction()}>Zarejestruj się</button>
                    </div>
                </div>
            ) : (
                <div className='Action__card'>
                    <form onSubmit={loginUser} className='Action__card__form'>
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
                        <button type='button' onClick={() => changeAction()}>Zaloguj się</button>
                    </div>
                </div>
            )}

        </div>
    )
                
}

export default LoginRegister





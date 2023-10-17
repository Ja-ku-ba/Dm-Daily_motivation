import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/AlertContext';

const Alert = () => {
  const { setAlerStatus, alerStatus } = useContext(AlertContext)
  if (alerStatus){
    return (
      <div className='Alert' style={{backgroundcolor: color} }>
        <div className='Alert__group'>
          <p className='Alert__group__body'>
            Alert {message}Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
            Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
            Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
            Alert Alert Alert Alert Alert Alert Alert Al
            ert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
            Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert 
          </p>
          <button onClick={() => setAlerStatus(false)} className='Alert__group__close'>X</button>
        </div>
      </div>
    )
  } else {
    <h1>no nie</h1>
  }
}

export default Alert
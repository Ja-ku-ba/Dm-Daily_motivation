import React, { useContext } from 'react'
import AlertContext from '../context/AlertContext';

const Alert = () => {
  const { alertStatus, setAlertStatus } = useContext(AlertContext)
  let print = () => {
    console.log(alertStatus, setAlertStatus)
    setAlertStatus(false)
  }
  if (alertStatus){
    return (
      <div className='Alert' style={{backgroundcolor: "#333333"} }>
        <div className='Alert__group'>
          <p className='Alert__group__body'>
            Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
            Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
            Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
          </p>
          <button onClick={() => print()} className='Alert__group__close'>X</button>
        </div>
      </div>
    )
  }
}

export default Alert

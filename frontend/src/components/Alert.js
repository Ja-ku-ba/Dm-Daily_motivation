import React, { useContext } from 'react'
import AlertContext from '../context/AlertContext';

const Alert = () => {
  const { alertStatus, setAlertStatus, params } = useContext(AlertContext)
  console.log(params, "------")
  if (alertStatus){
    return (
      <div className='Alert' style={{backgroundcolor: params.color} }>
        <div className='Alert__group'>
          <p className='Alert__group__body'>
            {params.body}
          </p>
          <button onClick={() => setAlertStatus(false)} className='Alert__group__close'>X</button>
        </div>
      </div>
    )
  }
}

export default Alert

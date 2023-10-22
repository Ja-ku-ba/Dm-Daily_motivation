import React, { useContext } from 'react';
import AlertContext from '../context/AlertContext';

const Alert = ({color, body}) => {
  const { alertStatus, setAlertStatus } = useContext(AlertContext);
  if (alertStatus) {
    return (
      <div className='Alert' style={{backgroundColor: color}}>
        <div className='Alert__group'>
          <p className='Alert__group__body'>
            {body}
          </p>
          <button onClick={() => setAlertStatus(false)} className='Alert__group__close' style={{backgroundColor: color}}>X</button>
        </div>
      </div>
    );
  }

  return null; // Dodaj to, aby obsłużyć przypadek, gdy alertStatus jest false
};

export default Alert;

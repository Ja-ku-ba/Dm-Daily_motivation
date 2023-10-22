import React, { useContext } from 'react';
import AlertContext from '../context/AlertContext';

const Alert = ({color, body}) => {
  const { alertStatus, setAlertStatus } = useContext(AlertContext);
  console.log(color, body)
  if (alertStatus) {
    return (
      <div className='Alert'>
        <div className='Alert__group'>
          <p className='Alert__group__body'>
            {body}
          </p>
          <button onClick={() => setAlertStatus(false)} className='Alert__group__close'>X</button>
        </div>
      </div>
    );
  }

  return null; // Dodaj to, aby obsłużyć przypadek, gdy alertStatus jest false
};

export default Alert;

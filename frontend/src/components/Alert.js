import React from 'react'

const Alert = ({message, color}) => {
  return (
    <div className='Alert'>
      <div className='Alert__group'>
        <p className='Alert__group__body'>
          Alert {message}Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
          Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
          Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
          Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
          Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert 
        </p>
        <span className='Alert__group__close'>X</span>
      </div>
    </div>
  )
}

export default Alert
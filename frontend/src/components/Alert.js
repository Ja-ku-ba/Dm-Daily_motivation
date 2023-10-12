import React, { useState } from 'react'

const Alert = ({message, color}) => {
  let [open, setOpen] = useState(true)
  if (open){
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
          <button onClick={() => setOpen(false)} className='Alert__group__close'>X</button>
        </div>
      </div>
    )
  }
}

export default Alert
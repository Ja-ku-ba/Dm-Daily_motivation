import React, { createContext, useState } from 'react'


const AlertContext = createContext(false)
export default AlertContext;

export const AlertProvider = ({children}) => {    
    let [alertStatus, setAlertStatus] = useState(false)

    let exportContext = {
        alertStatus: alertStatus,
        setAlertStatus: setAlertStatus
    }
    return(
        <AlertContext.Provider value={exportContext}>
            {children}
        </AlertContext.Provider>
  )
}

import React, { createContext, useState, useEffect } from 'react'
import Alert from "../components/Alert"

const AlertContext = createContext(true)
export default AlertContext;

export const AlertProvider = ({children}) => {    
    let [alertStatus, setAlertStatus] = useState(false)
    let [params, setParams] = useState({"color":"", "body":""})

    useEffect(() => {
        if (alertStatus){
            return <Alert elements={params}/>
        }
    })

    let exportContext = {
        alertStatus: alertStatus,
        setParams: setParams,
        setAlertStatus: setAlertStatus
    }
    return(
        <AlertContext.Provider value={exportContext}>
            {children}
        </AlertContext.Provider>
  )
}

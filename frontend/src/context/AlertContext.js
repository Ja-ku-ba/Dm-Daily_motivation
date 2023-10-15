import React, { createContext, useState, useEffect } from 'react'

const AlertContext = createContext()
export default AlertContext


export const AlertProvider = () => {
    
    let [alerStatus, setAlerStatus] = useState(false)
    let contextData = {
        alerStatus: alerStatus,
        changeStatus: changeStatus
    }
    
    let changeStatus = () => {
        setAlerStatus(!alerStatus)
    }
    return(
        <AlertContext.Provider value={[alerStatus, setAlerStatus]}>
        </AlertContext.Provider>
  )
}

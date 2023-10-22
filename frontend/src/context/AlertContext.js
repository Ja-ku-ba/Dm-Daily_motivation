import React, { createContext, useState, useEffect } from 'react';
import Alert from "../components/Alert"

const AlertContext = createContext();
export default AlertContext;

export const AlertProvider = ({ children }) => {
    const [alertStatus, setAlertStatus] = useState(false);
    const [params, setParams] = useState({color: "", body: ""});
    
    const exportContext = {
        alertStatus: alertStatus,
        setAlertStatus: setAlertStatus,
        params: params,
        setParams: setParams
    };

    return (
        <AlertContext.Provider value={exportContext}>
            {children}
            {alertStatus && <Alert color={params.color} body={params.body} />}
        </AlertContext.Provider>
    );
}

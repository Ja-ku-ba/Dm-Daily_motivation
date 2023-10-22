import React, { createContext, useState } from 'react';

const AlertContext = createContext();

export default AlertContext;

export const AlertProvider = ({ children }) => {
    const [alertStatus, setAlertStatus] = useState(false); // Ustaw początkową wartość na false

    const exportContext = {
        alertStatus: alertStatus,
        setAlertStatus: setAlertStatus,
    };

    return (
        <AlertContext.Provider value={exportContext}>
            {children}
        </AlertContext.Provider>
    );
}

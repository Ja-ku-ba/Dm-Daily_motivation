import { Outlet, Navigate } from "react-router-dom"
import React, { useContext } from 'react'

import AuthContext from "../context/AuthContext";

const PrivateRoutes = () => {
    let user = useContext(AuthContext)
    return(
            user.user ? <Outlet/> : <Navigate to={"/login"}/>
        )
};

export default PrivateRoutes
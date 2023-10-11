import { Outlet, Navigate } from "react-router-dom"
import React from 'react'

const PrivateRoutes = ({childern, ...rest}) => {
    let auth = {'token': false}
  return (
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes
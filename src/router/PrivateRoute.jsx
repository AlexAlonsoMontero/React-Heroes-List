import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/context'

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);

    const { pathname, search } = useLocation();

    const lasthPath = pathname +search;
    localStorage.setItem('lastPath', lasthPath);



  return (logged)
  ? children
  : <Navigate to="/login" />
}

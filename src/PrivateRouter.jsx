import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const PrivateRoute = ({ children, isLoggedIn }) => {
  const user = JSON.parse(window.sessionStorage.getItem('user'))

  if (!user) {
    useEffect(() => {
      toast.error('Login to access this page.')
    })

    return <Navigate to='/' />
  }

  return isLoggedIn ? children : false
}

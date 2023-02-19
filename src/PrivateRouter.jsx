import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const PrivateRoute = ({ children, isLoggedIn }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  if (!currentUser) {
    useEffect(() => {
      toast.error('Login to access this page.')
    })

    return <Navigate to='/' />
  }

  return isLoggedIn ? children : ''
}

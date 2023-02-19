import React from 'react'
import { useAuthContext } from '../contexts/AuthContextProvider'

export function LoggedPanel () {
  const AuthContext = useAuthContext()
  const userEmail = AuthContext.currentUser.user.email

  return (
    <div className="card-footer text-muted userPanel" data-testid='footer-element'>
    <div className='footer-text userPanel-text' >User: {userEmail}
    </div>
    <div><img src ='./src/assets/icons/logout.svg' alt='logout'></img>
    </div>
  </div>
  )
}

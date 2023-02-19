import React from 'react'
import { useAuthContext } from '../contexts/AuthContextProvider'

export function UserPanel () {
  const AuthContext = useAuthContext()
  const userEmail = AuthContext.currentUser.user.email

  return (
    <div className="card-footer text-muted user-panel" data-testid='footer-element'>
    <div className='footer-text user-panel-text' >User: {userEmail}
    </div>
    <div><img src ='./src/assets/icons/logout.svg' alt='logout'></img>
    </div>
  </div>
  )
}

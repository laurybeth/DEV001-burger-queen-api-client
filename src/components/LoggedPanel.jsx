import React from 'react'
import { useAuthContext } from '../contexts/AuthContextProvider'

export function LoggedPanel () {
  const AuthContext = useAuthContext()
  const userEmail = AuthContext.currentUser.user.email
  // useEffect(() => { AuthContext.setCurrentUser('Valentin') }, [])
  console.log('currentUser', userEmail)
  return (
    <>
    <div >
{userEmail}
    </div>
    <div >
    <img src ='./src/assets/icons/logout.svg' alt='logout'></img>
        </div>
    </>
  )
}

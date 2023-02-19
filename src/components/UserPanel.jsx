import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useAuthContext } from '../contexts/AuthContextProvider'

export function UserPanel () {
  const link = useNavigate()
  const currentUser = JSON.parse(localStorage.getItem('user'))
  const userEmail = currentUser.email
  function logout (e) {
    e.preventDefault()
    localStorage.clear()
    link('/')
    /*     currentUser = JSON.parse(localStorage.getItem('user'))
    console.log('holaaa', currentUser) */
  }

  return (
    <div className="card-footer text-muted user-panel" data-testid='footer-element'>
    <div className='footer-text user-panel-text' >User: {userEmail}
    </div>
    <div><a href='#' onClick={logout}><img src ='./src/assets/icons/logout.svg' alt='logout' ></img></a>
    </div>
  </div>
  )
}

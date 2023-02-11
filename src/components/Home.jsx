import React, { useState } from 'react'
import { LoginForm } from './LoginForm'

export function Home () {
  return (
    <div className="card">
      <div className="card-header">
        <img className="logo" src='../assets/logo-shadow.png'></img>
      </div>
      <div className="card-body">
       <LoginForm/>
      </div>
      <div className="card-footer text-muted">
         <div className='footer-text'>Copyright © 2023</div>
      </div>
      </div>)
}

import React, { useState } from 'react'
import { LoginForm } from './LoginFrom'

export function Home () {
  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const valorInput = (e) => {
    setInput(
      {
        ...input,
        [e.target.name]: e.target.value
      }
    )
  }

  return (
    <div className="card">
      <div className="card-header">
        <img className="logo" src='../assets/logo-shadow.png'></img>
      </div>
      <div className="card-body">
       <LoginForm></LoginForm>
      </div>
      <div className="card-footer text-muted">
         <div className='footer-text'>Copyright © 2023</div>
      </div>
      </div>)
}

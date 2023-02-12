import React from 'react'
import { Footer } from './Footer'
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
      <Footer/>
    </div>
  )
}

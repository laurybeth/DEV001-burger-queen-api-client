import React from 'react'
import { Footer } from './Footer'
import { Login } from './Login'

export function Home () {
  return (
    <div className="card">
      <div className="card-header">
        <img className="logo" src='../assets/logo.png'></img>
      </div>
      <div className="card-body">
       <Login/>
      </div>
      <Footer/>
    </div>
  )
}

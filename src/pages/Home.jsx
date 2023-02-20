import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Login } from '../components/Login'

export function Home () {
  const e =
  <div className="card-footer text-muted" data-testid='footer-element'>
  <div className='footer-text'>Copyright © 2023 Burger Queen
    </div>
  </div>

  return (
    <div className="card page-container">
      <Header/>
      <div className="card-body page-body">
       <Login/>
      </div>
      <Footer element = {e}/>
    </div>
  )
}

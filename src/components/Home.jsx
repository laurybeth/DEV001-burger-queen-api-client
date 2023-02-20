import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Login } from './Login'

export function Home () {
  const e =
  <div className="card-footer text-muted" data-testid='footer-element'>
  <div className='footer-text'>Copyright © 2023 Burger Queen
    </div>
  </div>

  return (
    <div className="card">
      <Header/>
      <div className="card-body">
       <Login/>
      </div>
      <Footer element = {e}/>
    </div>
  )
}

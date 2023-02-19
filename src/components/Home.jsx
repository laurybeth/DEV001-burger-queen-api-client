import React from 'react'
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
      <div className="card-header">
        <img className="logo" src='https://raw.githubusercontent.com/laurybeth/DEV001-burger-queen-api-client/main/src/assets/logo.png
        '></img>
      </div>
      <div className="card-body">
       <Login/>
      </div>
      <Footer element = {e}/>
    </div>
  )
}

import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Menu } from './Menu'
import { UserPanel } from './UserPanel'

export function WaiterPanel () {
  return (
  <div className='card container-page'>
    <Header/>
    <div className="card-body">
      <Menu/>
    </div>
    <Footer element = { <UserPanel/> }/>
  </div>

  )
}

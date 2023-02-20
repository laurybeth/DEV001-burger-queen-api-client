import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'
import { UserPanel } from '../components/UserPanel'

export function WaiterPanel () {
  return (
  <div className='card page-container'>
    <Header/>
    <div className="card-body page-body">
      <Menu/>
    </div>
    <Footer element = { <UserPanel/> }/>
  </div>

  )
}

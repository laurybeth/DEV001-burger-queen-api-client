import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'
import { UserPanel } from '../components/UserPanel'
import { Order } from '../components/Order'
import { OrderContextProvider } from '../contexts/OrderContextProvider'

export function Waiter () {
  return (
    <OrderContextProvider>
      <div className='card page-container'>
        <Header/>
        <div className="card-body page-body waiter-page-body">
          <Menu/>
          <Order/>
        </div>
        <Footer element = { <UserPanel/> }/>
      </div>
    </OrderContextProvider>
  )
}

import React from 'react'
import { Footer } from './Footer'
import { UserPanel } from './UserPanel'

export function WaiterPanel () {
  return (
  <div className='card'>

  <Footer element = { <UserPanel/> }/>
  </div>

  )
}

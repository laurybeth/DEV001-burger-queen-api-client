import React from 'react'
import { Footer } from './Footer'
import { LoggedPanel } from './LoggedPanel'

export function WaiterPanel () {
  return (
  <div className='card'>

  <Footer element = { <LoggedPanel/> }/>
  </div>

  )
}

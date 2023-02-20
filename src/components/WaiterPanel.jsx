import React from 'react'
import { Footer } from './Footer'
import { UserPanel } from './UserPanel'

export function WaiterPanel () {
  return (
  <div className='card'>
     <div className="card-body">

      </div>

  <Footer element = { <UserPanel/> }/>
  </div>

  )
}

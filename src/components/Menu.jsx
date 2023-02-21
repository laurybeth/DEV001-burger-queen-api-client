import React from 'react'
import { Product } from './Product'

export function Menu () {
  function showMenu (e) {

  }

  return (
    <div className='card container-menu'>
      <div className="card-header">
        <ul className="nav container-nav">
        <li className="nav-item">
            <a className="nav-link active nav-text" href="#">Breakfast</a>
        </li>
        <li className="nav-item">
            <a className="nav-link nav-text" href="#">Lunch & Dinner</a>
        </li>
        </ul>
      </div>
      <div className="card-body">
        <Product/>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { httpRequest } from '../fetch-api/httpRequest'
import { Product } from './Product'

export function Menu () {
  const [products, setProducts] = useState([])
  async function handleMenu (e) {
    const productType = e.target.name
    try {
      const response = await httpRequest().get(`http://localhost:8080/products?type=${productType}`)
      setProducts(response)
      console.log(products)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='card container-menu'>
      <div className="card-header">
        <ul className="nav container-nav justify-content-center">
        <li className="nav-item">
            <a className="nav-link active nav-text" href="#" onClick={handleMenu} name='Breakfast'>Breakfast</a>
        </li>
        <li className="nav-item">
            <a className="nav-link nav-text" href="#" onClick={handleMenu} name='Lunch & Dinner'>Lunch & Dinner</a>
        </li>
        </ul>
      </div>
      <div className="card-body">{products.map((product) => {
        return (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  image={product.image}
                  price={product.price}

                />
        )
      })}

      </div>
    </div>
  )
}

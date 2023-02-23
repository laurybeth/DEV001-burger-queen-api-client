import React from 'react'
import { useOrderContext } from '../contexts/OrderContextProvider'

export function Product ({ id, name, description, price, image }) {
  const { updateOrder } = useOrderContext()

  function handleAdd (e) {
    e.preventDefault()
    const order = { name, price }
    updateOrder(order)
  }

  return (
    <div className='card container-product'>
     <div className="card-body body-product">
      <div className='left-side'>
        <div className='text-product'>{name}</div>
        <div className='text-product text-product-description'>{description}</div>
      </div>
      <div className='right-side'><img className='img-product' alt='product image' src={`${image}`}/></div>
     </div>
     <div className='card-footer body-product'>
      <div className='text-product container-product-price'>{price}</div>
      <div className='text-product container-product-add'>
        <a href="#"><img src='./src/assets/icons/add.svg' alt='add product' onClick={handleAdd}></img></a>
      </div>
     </div>
    </div>
  )
}

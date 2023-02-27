import React from 'react'
import { useOrderContext } from '../contexts/OrderContextProvider'

export function Product ({ id, name, description, price, image }) {
  const { updateOrder } = useOrderContext()

  function handleAdd (e) {
    e.preventDefault()
    const order = { qty: 1, product: { id, name, description, price, image } }
    updateOrder(order)
  }

  return (
    <div className='card container-product'>
     <div className="card-body body-product">
      <div className='body-product-left-side'>
        <div className='product-text'>{name}</div>
        <div className='product-text product-description'>{description}</div>
      </div>
      <div className='body-product-right-side'><img className='img-product' alt='product image' src={`${image}`}/></div>
     </div>
     <div className='card-footer body-product'>
      <div className='product-text container-product-price'>{price}</div>
      <div className='product-text container-product-add'>
        <a href="#"><img src='./src/assets/icons/add.svg' alt='add product' onClick={handleAdd}></img></a>
      </div>
     </div>
    </div>
  )
}

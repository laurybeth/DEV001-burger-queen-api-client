import React from 'react'
import { useOrderContext } from '../contexts/OrderContextProvider'

export function Order ({ id, name, description, price, image }) {
  // const { currentORder, upddateOrder } = useContext(OrderContext)
  const { currentOrder } = useOrderContext()
  return (
    <div className='card container-product'>
      <ul>
        {currentOrder.map((product) => (
          <li>{product.name} - {product.price}</li>
        ))}
      </ul>
      <div className="card-body body-product">
        <div className='left-side'>
          <div className='text-product'>{name}</div>
          <div className='text-product text-product-description'>{description}</div>
        </div>
        <div className='right-side'><img className='img-product' src={`${image}`} /></div>
      </div>
      <div className='card-footer body-product'>
        <div className='text-product container-product-price'>{price}</div>
        <div className='text-product container-product-count'>
          <a href="#"><img src='./src/assets/icons/minus.svg'></img></a>{1}
          <a href="#"><img src='./src/assets/icons/plus.svg'></img></a>
        </div>
      </div>
    </div>
  )
}

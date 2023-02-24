import React from 'react'

export function OrderItem ({ id, name, description, price, image }) {
  return (
    <div className='card container-order-item'>
    <div className="card-body body-product order-item-body">
          <div className='body-product-left-side order-item-body-left-side'>
            <div className='product-text order-item-text'>{name}</div>
            <div className='product-text product-description order-item-description'>{description}</div>
          </div>
          <div className='body-product-right-side order-item-body-right-side'><img className='img-product' src={`${image}`} /></div>
    </div>
    <div className='card-footer'>
            <div className='order-item-number container-order-item-price'>{price}</div>
            <div className='order-item-text container-order-item-amount'>
                <div className='order-item-number container-order-item-count'>
                <a href="#"><img src='./src/assets/icons/minus.svg'></img></a>{1}
                <a href="#"><img src='./src/assets/icons/plus.svg'></img></a>
                </div>
                <div>
                <a href="#"><img src='./src/assets/icons/trash.svg'></img></a>
                </div>
            </div>
    </div>
  </div>
  )
}

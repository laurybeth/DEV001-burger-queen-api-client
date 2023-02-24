import React, { useState } from 'react'

export function OrderItem ({ id, name, description, price, image }) {
  const [amount, setAmount] = useState(1)

  function handdleDeleteItem () {

  }

  function handdleDecrease () {
    setAmount((amount) => {
      if (amount === 1) {
        return amount
      } else { return amount - 1 }
    })
  }

  function handdleIncrease () {
    setAmount((amount) => amount + 1)
  }

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
                <a href="#" onClick={handdleDecrease}><img src='./src/assets/icons/minus.svg'></img></a>{amount}
                <a href="#" onClick={handdleIncrease}><img src='./src/assets/icons/plus.svg'></img></a>
                </div>
                <div>
                <a href="#" onClick={handdleDeleteItem}><img src='./src/assets/icons/trash.svg'></img></a>
                </div>
            </div>
    </div>
  </div>
  )
}

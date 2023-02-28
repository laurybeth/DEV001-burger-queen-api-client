import React, { useState } from 'react'
import { useOrderContext } from '../contexts/OrderContextProvider'

export function OrderItem ({ id, name, price, image }) {
  const [amount, setAmount] = useState(1)
  const { handleOrderItemQty, handleOrderItemDelete } = useOrderContext()

  function handdleDeleteItem (e) {
    e.preventDefault()
    handleOrderItemDelete(id)
  }

  function handdleDecrease (e) {
    e.preventDefault()
    const value = amount - 1
    setAmount((amount) => {
      if (amount === 1) {
        return amount
      } else { return value }
    })
    handleOrderItemQty(id, value)
  }

  function handdleIncrease (e) {
    e.preventDefault()
    const value = amount + 1
    setAmount(value)
    handleOrderItemQty(id, value)
  }

  return (
    <div className='card container-order-item'>
    <div className="card-body body-product order-item-body">
          <div className='body-product-left-side order-item-body-left-side'>
            <div className='product-text order-item-text'>{name}</div>
          </div>
          <div className='body-product-right-side order-item-body-right-side'><img className='img-product' src={`${image}`} /></div>
    </div>
    <div className='card-footer'>
            <div className='order-item-number container-order-item-price'>$ {price}.00</div>
            <div className='order-item-text container-order-item-amount'>
                <div className='order-item-number container-order-item-count'>
                <img src='./src/assets/icons/minus.svg'onClick={handdleDecrease}></img>{amount}
                <img src='./src/assets/icons/plus.svg' onClick={handdleIncrease}></img>
                </div>
                <div className='container-trash'>
                <img src='./src/assets/icons/trash.svg' onClick={handdleDeleteItem}></img>
                </div>
            </div>
    </div>
  </div>
  )
}

import React from 'react'
import { useOrderContext } from '../contexts/OrderContextProvider'

export function Order () {
  // const { currentORder, upddateOrder } = useContext(OrderContext)
  const { currentOrder } = useOrderContext()
  return (
<div className='card container-menu'>
    <div className="card-header">
        <ul className="nav container-nav justify-content-center">
        <li className="nav-item">
            <a className="nav-link nav-text active" href="#" name='Summary'>Order Summary</a>
        </li>
        </ul>
    </div>
    <div className='card-body container-order-body'>
      <div className='container-select-table'>
        <select className="form-select select-table form-select-sm">
          <option defaultValue>Select table</option>
          <option className='select-options' value="1">Table nº 1</option>
          <option className='select-options' value="2">Table nº 2</option>
          <option className='select-options' value="3">Table nº 3</option>
        </select>
      </div>
        {currentOrder.map((product) => (
      // eslint-disable-next-line react/jsx-key
      <div className='card container-order-item'>
        <div className="card-body body-product order-item-body">
              <div className='body-product-left-side order-item-body-left-side'>
                <div className='product-text order-item-text'>{product.name}</div>
                <div className='product-text product-description order-item-description'>{product.description}</div>
              </div>
              <div className='body-product-right-side order-item-body-right-side'><img className='img-product' src={`${product.image}`} /></div>
        </div>
        <div className='card-footer'>
                <div className='order-item-number container-order-item-price'>{product.price}</div>
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
        ))}
      <div className='container-total'><span>Total
        </span>
        <span>$ 0.00
          </span>
      </div>
      <div className="d-grid gap-3 col-12 mx-auto">
        <button className="btn btn-primary btn-lg btn-login ">Send to Kitchen
        </button>
      </div>
    </div>
</div>
  )
}

import React from 'react'
import { OrderItem } from './OrderItem'
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
        {currentOrder.map((item) => {
          return (
                  <OrderItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                  />
          )
        })}
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

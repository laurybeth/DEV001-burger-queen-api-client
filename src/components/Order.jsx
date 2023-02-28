import React, { useEffect, useState } from 'react'
import { OrderItem } from './OrderItem'
import { useOrderContext } from '../contexts/OrderContextProvider'
import { httpRequest } from '../fetch-api/httpRequest'
import { toast } from 'react-toastify'

export function Order () {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const accessToken = localStorage.getItem('accessToken')
  const [table, setTable] = useState('')
  const [total, setTotal] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const { currentOrder } = useOrderContext()

  useEffect(() => setTotal(() =>
    currentOrder.reduce((a, c) =>
      (a + c.product.price * c.qty)
    , 0))
  )

  function handleSelected (e) {
    const selected = e.target.value
    setTable(selected)
  }

  async function handleSend (e) {
    e.preventDefault()

    if ((table === '') || (table === 'Select the table')) {
      setErrorMessage('Select the table number')
      setTimeout(() => { setErrorMessage('') }, 1500)
    } else if (currentOrder.length === 0) {
      setErrorMessage('No products in the order')
      setTimeout(() => { setErrorMessage('') }, 1500)
    } else {
      const currentUserID = currentUser.id
      const status = 'pending'
      const dataEntry = new Date()
      const order = { userId: currentUserID, client: table, products: currentOrder, status, dataEntry }

      const response = await httpRequest().post('http://localhost:8080/orders', {
        body: order,
        Authorization: `Bearer ${accessToken}`
      })
      if (response.error) {
        toast.error('Ups! Something happened')
      } else {
        toast.success('The order was sent')
      }
    }
  }

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
        <select className="form-select select-table form-select-sm" onClick={handleSelected}>
          <option defaultValue>Select the table</option>
          <option className='select-options' value="Table nº 1" name='Table nº 1'>Table nº 1</option>
          <option className='select-options' value="Table nº 2" name='Table nº 2'>Table nº 2</option>
          <option className='select-options' value="Table nº 3" name='Table nº 3'>Table nº 3</option>
          <option className='select-options' value="Table nº 4" name='Table nº 4'>Table nº 4</option>
          <option className='select-options' value="Table nº 5" name='Table nº 5'>Table nº 5</option>
        </select>
      </div>

        {currentOrder.map((item) => {
          return (
                  <OrderItem
                    key={item.product.id}
                    id={item.product.id}
                    name={item.product.name}
                    image={item.product.image}
                    price={item.product.price}
                  />
          )
        })}

      <div className='container-total'><span>Total
        </span>
        <span>$ {total}.00
          </span>
      </div>
      <div className="d-grid gap-3 col-12 mx-auto">
        <div className='container-error'><label className='error-message'>{errorMessage}
       </label></div>
        <button className="btn btn-primary btn-lg btn-login" onClick={handleSend}>Send to Kitchen
        </button>
      </div>
    </div>
</div>
  )
}

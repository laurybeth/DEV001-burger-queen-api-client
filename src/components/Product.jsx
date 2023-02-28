import React, { useState, useEffect } from 'react'
import { useOrderContext } from '../contexts/OrderContextProvider'

export function Product ({ id, name, description, price, image }) {
  const { currentOrder, updateOrder } = useOrderContext()
  const [errorMessage, setErrorMessage] = useState(null)

  /*   useEffect(() => {
    function prueba (e) {
      console.log(e.target.localName)
      if (e.target.localName !== 'img') {
        setErrorMessage('')
      }
    }
    window.addEventListener('click', prueba)
    return () => { window.removeEventListener('click', prueba) }
  }, []) */

  useEffect(() => {
    const clearErrorMessage = (e) => {
      const classList = Array.from(e.target.classList)
      const isAddSvg = classList.includes('add-product-svg')
      const isErrorMessage = classList.includes('error-message')
      const isOther = !isAddSvg && !isErrorMessage
      if (isOther) {
        setErrorMessage('')
      }
    }

    window.addEventListener('click', clearErrorMessage)

    return () => window.removeEventListener('click', clearErrorMessage)
  }, [])

  function handleAdd (e) {
    e.preventDefault()
    const productId = currentOrder.findIndex((element) =>
      element.product.id === id)
    if (productId !== -1) {
      setErrorMessage('Already added to order.')
      // setTimeout(() => { setErrorMessage('') }, 1500)
    } else {
      const order = { qty: 1, product: { id, name, description, price, image } }
      updateOrder(order)
    }
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
      <div className='product-text container-product-price'>$ {price}.00</div>
      <div className='product-text container-product-add'>
        <img src='./src/assets/icons/add.svg' alt='add product' className='add-product-svg' onClick={handleAdd} ></img>
      </div>
     </div>
     <div className='container-error'><label className='error-message'>{errorMessage}
       </label></div>
    </div>
  )
}

import React, { createContext, useContext, useEffect, useState } from 'react'

export const OrderContext = createContext()

export function useOrderContext () {
  const order = useContext(OrderContext)

  if (!order) {
    throw new Error('Este context debe ser usado dentro del OrderContextProvider')
  }

  return order
}

export const OrderContextProvider = ({ children }) => {
  const [currentOrder, setOrder] = useState([])

  const updateOrder = (newOrder) => {
    setOrder((prevOrder) => {
      return [
        ...prevOrder,
        newOrder
      ]
    })
  }

  const handleOrderItemQty = (id, amount) => {
    console.log('amount: ', amount)
    const productId = currentOrder.findIndex((element) =>
      element.product.id === id)
    setOrder((prevOrder) => {
      prevOrder[productId].qty = amount
      return [
        ...prevOrder
      ]
    })
  }

  const handleOrderItemDelete = (id) => {
    setOrder((prevOrder) => prevOrder.filter((element) =>
      element.product.id !== id)
    )
  }

  return (
    <OrderContext.Provider value={{ currentOrder, updateOrder, handleOrderItemQty, handleOrderItemDelete }}>
      {children}
    </OrderContext.Provider>
  )
}

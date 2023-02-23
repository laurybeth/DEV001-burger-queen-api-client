import React, { createContext, useContext, useState } from 'react'

export const OrderContext = createContext()

export function useOrderContext () {
  const order = useContext(OrderContext)

  if (!order) {
    throw new Error('Este context debe ser usado dentro del OrderContextProvider')
  }

  return order
}

export const OrderContextProvider = ({ children }) => {
  // const [login, setLogin] = useState(false)
  const [currentOrder, setOrder] = useState([])

  const updateOrder = (newOrder) => {
    // setOrder(currentOrder.push(newOrder))
    setOrder((prevOrder) => {
      return [
        ...prevOrder,
        newOrder
      ]
    })
  }
  /*   const setLogged = (value) => {
    setLogin(value)
  }
 */
  return (
    <OrderContext.Provider value={{ currentOrder, updateOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

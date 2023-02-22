import React, { createContext, useContext, useState } from 'react'

export const OrderContext = createContext()

export function useAuthContext () {
  const order = useContext(OrderContext)
  return order
}

export const OrderContextProvider = ({ children }) => {
  // const [login, setLogin] = useState(false)
  const [currentOrder, setOrder] = useState([])

  const setCurrentOrder = (order) => {
    setOrder(order)
  }
  /*   const setLogged = (value) => {
    setLogin(value)
  }
 */
  return (
    <OrderContext.Provider value={{ currentOrder, updateOrder: setCurrentOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

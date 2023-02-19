import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export function useAuthContext () {
  const auth = useContext(AuthContext)
  return auth
}

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  // const [login, setLogin] = useState(false)
  const [currentUser, setUser] = useState({})

  const setCurrentUser = (user) => {
    setUser(user)
  }
  /*   const setLogged = (value) => {
    setLogin(value)
  }
 */
  return (
    <AuthContext.Provider value={{ currentUser, updateUser: setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

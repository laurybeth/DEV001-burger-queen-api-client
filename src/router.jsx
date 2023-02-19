
import React from 'react'
import { Home } from './components/Home'
import { WaiterPanel } from './components/WaiterPanel'
import { Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { PrivateRoute } from './PrivateRouter'
// import reactLogo from './assets/react.svg'

function router () {
  const user = JSON.parse(window.sessionStorage.getItem('user'))
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/waiterPanel" element={<PrivateRoute isLoggedIn={user && user.roles.waiter}>
        <WaiterPanel /></PrivateRoute>}/>
    </Routes>
    <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}
export default router

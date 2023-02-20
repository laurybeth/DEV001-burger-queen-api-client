
import React from 'react'
import { Home } from './pages/Home'
import { WaiterPanel } from './pages//WaiterPanel'
import { Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { PrivateRoute } from './PrivateRouter'
// import reactLogo from './assets/react.svg'

function router () {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/waiterPanel" element={<PrivateRoute isLoggedIn={currentUser && currentUser.roles.waiter}>
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

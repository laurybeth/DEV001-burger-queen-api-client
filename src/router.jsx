
import React from 'react'
import { Home } from './components/Home'
import { WaiterPanel } from './components/WaiterPanel'
import { Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
// import reactLogo from './assets/react.svg'

function router () {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/waiterPanel" element={<WaiterPanel />}></Route>
    </Routes>
    <ToastContainer
      position="bottom-left"
      autoClose={false}
      hideProgressBar={false}
      newestOnTop={false}
      // closeOnClick
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

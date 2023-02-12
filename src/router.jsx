
import React from 'react'
import { Home } from './components/Home'
import { WaiterPanel } from './components/WaiterPanel'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
// import reactLogo from './assets/react.svg'

function router () {
  return createBrowserRouter(
    createRoutesFromElements(// o usar <routes></routes>
      <>
        <Route path="/" element={<Home />}></Route>
        <Route path="/waiterPanel" element={<WaiterPanel />}></Route>
      </>
    )
  )
}
export default router

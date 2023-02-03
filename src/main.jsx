import React from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './components/Login'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Login />}>
      </Route>
  )
)

const root = createRoot(document.getElementById('root'))

root
  .render(
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  )

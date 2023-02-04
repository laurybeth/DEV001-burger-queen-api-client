import React from 'react'
import { createRoot } from 'react-dom/client'
import router from './router'

import {

  RouterProvider
} from 'react-router-dom'

import './App.css'

const root = createRoot(document.getElementById('root'))

root
  .render(
    <React.StrictMode>
    <RouterProvider router={router()} />
  </React.StrictMode>
  )

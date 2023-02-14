import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Router'

import { BrowserRouter } from 'react-router-dom'
import './App.css'

const root = createRoot(document.getElementById('root'))

root
  .render(
    <React.StrictMode>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  </React.StrictMode>
  )

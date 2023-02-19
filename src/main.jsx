import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContextProvider'
import './App.css'

const root = createRoot(document.getElementById('root'))

root
  .render(
    <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
        <Router />
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
  )

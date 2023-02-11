
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

/*     <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div> */

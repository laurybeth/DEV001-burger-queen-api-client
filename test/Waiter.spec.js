import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Waiter } from '../src/pages/Waiter'

const localStorageMock = (function () {
  let store = {}

  return {
    getItem (key) {
      return store[key]
    },

    setItem (key, value) {
      store[key] = value
    },

    clear () {
      store = {}
    },

    removeItem (key) {
      delete store[key]
    },

    getAll () {
      return store
    }
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })
const setLocalStorage = (id, data) => {
  window.localStorage.setItem(id, JSON.stringify(data))
}

describe('Waiter', () => {
  let renderInstance
  beforeEach(() => {
    renderInstance = render(
      <MemoryRouter>
          <Waiter />
      </MemoryRouter>)
  })

  it('Should render the Waiter component', () => {
    const mockId = 'currentUser'
    const mockJson = { email: 'laly@msn.com' }
    // setLocalStorage('currentUser2', { email: 'laly@msn.com', roles: { waiter: true, admin: true }, id: 1 })
    // setLocalStorage('accessToken', 'kjkfhkijdkdlokoko')
    setLocalStorage(mockId, mockJson)
    // expect(localStorage.getItem(mockId)).toEqual(JSON.parse(mockJson))
    expect(renderInstance).toBeTruthy()
  })

/*   it('Should render the Login component', () => {
    const LoginElement = screen.getByTestId('login-element')
    expect(LoginElement).toBeInTheDocument()
  })

  it('Should render the Footer component', () => {
    const FooterElement = screen.getByTestId('footer-element')
    // screen.debug()
    expect(FooterElement).toBeInTheDocument()
  }) */
})

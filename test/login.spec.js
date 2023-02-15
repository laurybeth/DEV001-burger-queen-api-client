import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { Login } from '../src/components/Login'
import { ToastContainer } from 'react-toastify'
import { httpRequest } from '../src/fetch-api/httpRequest'

jest.mock('../src/fetch-api/httpRequest', () => ({
  httpRequest: jest.fn()
}))

describe('Login', () => {
  let renderInstance

  afterEach(jest.clearAllMocks)
  beforeEach(() => {
    renderInstance = render(
      <MemoryRouter>
        <Login />,
        <ToastContainer
           position="bottom-left"
           autoClose={2000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="light"
        />
      </MemoryRouter>)
  })

  it('Should render the Login component', () => {
    expect(renderInstance).toBeTruthy()
  })

  it('Success message with valid credentials', async () => {
    httpRequest.mockImplementation(() => ({
      post: () => Promise.resolve({})
    }))
    const user = userEvent.setup()
    await user.type(renderInstance.getByLabelText(/email/i), 'laly@msn.com')
    await user.type(renderInstance.getByLabelText(/password/i), '123456')

    const submitButton = renderInstance.getByRole('button', { name: /login/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(renderInstance.getByText(/Success/i)).toBeInTheDocument()
    })
  })

  it('Error message with invalid credentials', async () => {
    httpRequest.mockImplementation(() => ({
      post: () => Promise.resolve({ error: true, status: 400, message: 'Bad request' })
    }))
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/email/i), 'carlos@hotmail.com')
    await user.type(screen.getByLabelText(/password/i), '123456789')
    await user.click(screen.getByRole('button', { name: /login/i }))

    await waitFor(() => {
      expect(screen.getByText(/Please enter valid credentials/i)).toBeInTheDocument()
    })
  })
})

// expect(navigate).toHaveBeenCalledWith('/waiterPanel')
/* With({
        email: 'john.dee@someemail.com',
        firstName: 'John',
        lastName: 'Dee'
      }) */

// usuario y contraseña válidas en el campo de texto y haya hecho clic en el botón enviar, la página web navegará a la página de inicio
// Ingrese una identificación de usuario no válida y verifique si se muestra alguna alerta emergente fácil de usar.

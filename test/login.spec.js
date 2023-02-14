import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { Login } from '../src/components/Login'
import { ToastContainer, toast } from 'react-toastify'

jest.mock('react-toastify')
/* jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn()
  }
})) */
/* jest.mock('@react-toastify', () => {
  return {
    ...jest.requireActual('@react-toastify'),
    useToast: () => jest.fn()
  }
}) */

describe('Login', () => {
  let renderInstance

  afterEach(jest.clearAllMocks)
  beforeEach(() => {
    renderInstance = render(
    <MemoryRouter>
        <Login/>,
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
    toast.success.mockClear()
    toast.error.mockClear()
  })

  it('Should render the Login component', () => {
    expect(renderInstance).toBeTruthy()
  })

  it('Success message with valid credentials', async () => {
    // render(<Form onSubmit={handleSubmit} />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/email/i), 'laly@msn.com')
    await user.type(screen.getByLabelText(/password/i), '123456')

    await user.click(screen.getByRole('button', { name: /login/i }))
    toast.mockReturnValue({
      success: jest.fn()
    })
    /*    const toast = jest.fn()
    jest
      .spyOn(require('@react-toastify'), 'useToast')
      .mockImplementationOnce(() => toast) */

    /*  setTimeout(() => {
      expect(screen.findByText(/Success/i)).toBeInTheDocument()
    }, 2000) */

    await waitFor(() =>
      expect(toast.success).toHaveBeenCalled())
  })

  it('Error message with invalid credentials', async () => {
    // render(<Form onSubmit={handleSubmit} />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/email/i), 'carlos@hotmail.com')
    await user.type(screen.getByLabelText(/password/i), '123456789')
    await user.click(screen.getByRole('button', { name: /login/i }))

    // expect(screen.getByText(/Success/i)).toBeTruthy()
    setTimeout(() => {
      expect(screen.getByText(/Please enter valid credentials/i)).toBeInTheDocument()
    }, 2000)
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

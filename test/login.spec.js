import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { Login } from '../src/components/Login'

describe('Login', () => {
  let renderInstance

  afterEach(jest.clearAllMocks)
  beforeEach(() => {
    renderInstance = render(
    <MemoryRouter>
        <Login/>
    </MemoryRouter>)
  })

  it('Should render the Login component', () => {
    expect(renderInstance).toBeTruthy()
  })

  it('Should have', async () => {
    const handleSubmit = jest.fn()
    jest.mock('link')
    // render(<Form onSubmit={handleSubmit} />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/password/i), '123456')
    await user.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com')
    await user.click(screen.getByRole('button', { name: /login/i }))

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalled()
      /* With({
        email: 'john.dee@someemail.com',
        firstName: 'John',
        lastName: 'Dee'
      }) */
    )

    // usuario y contraseña válidas en el campo de texto y haya hecho clic en el botón enviar, la página web navegará a la página de inicio
    // Ingrese una identificación de usuario no válida y verifique si se muestra alguna alerta emergente fácil de usar.
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import { Home } from '../src/components/Home'
import { MemoryRouter } from 'react-router-dom'

describe('Home', () => {
  beforeEach(() => {
    render(
    <MemoryRouter>
        <Home />
    </MemoryRouter>)
  })

  it('Should have the Login component', () => {
    const LoginElement = screen.getByTestId('login-element')
    expect(LoginElement).toBeInTheDocument()
  })

  it('Should have the Footer component', () => {
    const FooterElement = screen.getByTestId('footer-element')
    screen.debug()
    expect(FooterElement).toBeInTheDocument()
  })
})

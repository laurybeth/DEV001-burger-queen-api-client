import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from '../src/components/Footer'

describe('Footer', () => {
  it.only('Should be a footer text', () => {
    render(<Footer/>)
    const footer = screen.getByText('Copyright © 2023 Burger Queen ®')

    expect(footer).toBeInTheDocument()
  })
})

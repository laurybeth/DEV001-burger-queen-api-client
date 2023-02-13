import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from '../src/components/Footer'

describe('Footer', () => {
  // eslint-disable-next-line jest/no-focused-tests
  it.only('Should be', () => {
    render(<Footer/>)
    const footer = screen.getByRole('div', { name: 'footer container' })
    expect(footer).toBeInTheDocument()
  })
})

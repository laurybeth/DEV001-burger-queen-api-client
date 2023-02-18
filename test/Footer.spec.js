import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from '../src/components/Footer'
import { MemoryRouter } from 'react-router-dom'

describe('Footer', () => {
  let renderInstance

  afterEach(jest.clearAllMocks)
  beforeEach(() => {
    renderInstance = render(
    <MemoryRouter>
        <Footer />
    </MemoryRouter>)
  })

  it('Should render the Footer component', () => {
    expect(renderInstance).toBeTruthy()
  })
})

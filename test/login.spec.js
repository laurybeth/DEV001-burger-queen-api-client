import React from 'react'
import { render } from '@testing-library/react'
import { Login } from '../src/components/Login'

// eslint-disable-next-line jest/no-focused-tests
describe.only('Login', () => {
  it('Should be', () => {
    render(<Login/>)
  })
})

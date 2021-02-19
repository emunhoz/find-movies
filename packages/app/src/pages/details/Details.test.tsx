import React from 'react'
import { render, screen } from '../../../test-utils'
import { MemoryRouter } from 'react-router-dom'
import Details from './Details'

describe('[Page]: Details', () => {
  test('render page', () => {
    const { asFragment } = render(<MemoryRouter><Details /></MemoryRouter>)

    expect(asFragment()).toMatchSnapshot()
  })

  test('shows loading when mount the page', () => {
    render(<MemoryRouter><Details /></MemoryRouter>)
    expect(screen.getByTestId('loading')).toBeTruthy()
  })
})

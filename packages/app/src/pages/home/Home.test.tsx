import React from 'react'
import { render, screen } from '../../../test-utils'
import Home from './Home'

describe('[Page]: Home', () => {
  test('renders home page with empty state', () => {
    render(<Home />)

    const emptyStateMessage = screen.getByText(/Don't know what to search?/i)
    expect(emptyStateMessage).toBeInTheDocument()
  })
})

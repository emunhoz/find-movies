import React from 'react'
import { render, screen, fireEvent } from '../../../test-utils'
import Home from './Home'

describe('[Page]: Home', () => {
  test('renders home page with empty state', () => {
    render(<Home />)

    const emptyStateMessage = screen.getByText(/Don't know what to search?/i)
    expect(emptyStateMessage).toBeInTheDocument()
  })

  test('show Loading component when user types a word', () => {
    const { getByRole } = render(<Home />)

    const SearchInput = getByRole('textbox', { name: /search/i })

    fireEvent.change(SearchInput, { target: { value: 'what' } })

    expect(screen.getByTestId('loading')).toBeTruthy()
  })
})

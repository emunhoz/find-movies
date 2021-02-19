import React from 'react'
import { render, screen, fireEvent } from '../../../test-utils'
import Home from './Home'

describe('[Page]: Home', () => {
  test('shows loading when mount the page', () => {
    render(<Home />)
    expect(screen.getByTestId('loading')).toBeTruthy()
  })

  test('show Loading component when user types a word', () => {
    const { getByRole } = render(<Home />)

    const SearchInput = getByRole('textbox', { name: /search/i })

    fireEvent.change(SearchInput, { target: { value: 'what' } })

    expect(screen.getByTestId('loading')).toBeTruthy()
  })
})

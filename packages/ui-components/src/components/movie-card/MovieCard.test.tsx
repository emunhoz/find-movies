import React from 'react'
import { render, fireEvent } from '../../utils/test-utils'
import { MovieCard } from './MovieCard'

describe('[Component]: MovieCard', () => {
  const mockOnClickFunction = jest.fn()

  test('render the component', () => {
    const { asFragment } = render(<MovieCard active={false} onClickCard={mockOnClickFunction} imgUrl="" title="Lorem" year="2020" />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('render the component active with image', () => {
    const { asFragment } = render(<MovieCard active onClickCard={mockOnClickFunction} imgUrl="https://images-na.ssl-images-amazon.com/images/I/A1IuOyoadxL._AC_SY550_.jpg" title="Lorem" year="2020" />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('trigger function to set card as favourite', () => {
    const { getByTestId } = render(<MovieCard active onClickCard={mockOnClickFunction} imgUrl="https://images-na.ssl-images-amazon.com/images/I/A1IuOyoadxL._AC_SY550_.jpg" title="My title" year="2020" />)
    const heartIcon = getByTestId('set-as-fav')

    fireEvent.click(heartIcon)

    expect(mockOnClickFunction).toHaveBeenCalled()
  })
})

import React from 'react'
import { render } from '../../utils/test-utils'
import { MovieCard } from './MovieCard'

describe('[Component]: MovieCard', () => {
  test('render the component', () => {
    const { asFragment } = render(<MovieCard imgUrl="N/A" title="Lorem" year="2020" />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('render the component active with image', () => {
    const { asFragment } = render(<MovieCard active imgUrl="https://images-na.ssl-images-amazon.com/images/I/A1IuOyoadxL._AC_SY550_.jpg" title="Lorem" year="2020" />)
    expect(asFragment()).toMatchSnapshot()
  })
})

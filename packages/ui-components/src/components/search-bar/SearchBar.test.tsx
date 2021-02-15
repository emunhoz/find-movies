import React from 'react'
import { render } from '../../utils/test-utils'
import { SearchBar } from './SearchBar'

describe('[Component]: SearchBar', () => {
  test('render the component', () => {
    const { asFragment } = render(<SearchBar />)
    expect(asFragment()).toMatchSnapshot()
  })
})
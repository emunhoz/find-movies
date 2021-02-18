import React from 'react'
import { render } from '../../utils/test-utils'
import { EmptyStateWrapper } from './EmptyStateWrapper'

describe('[Component]: EmptyStateWrapper', () => {
  test('render the component', () => {
    const { asFragment } = render(<EmptyStateWrapper />)
    expect(asFragment()).toMatchSnapshot()
  })
})

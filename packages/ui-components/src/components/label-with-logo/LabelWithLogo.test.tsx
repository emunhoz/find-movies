import React from 'react'
import { render } from '../../utils/test-utils'
import { LabelWithLogo } from './LabelWithLogo'

describe('[Component]: LabelWithLogo', () => {
  test('render the component', () => {
    const { asFragment } = render(<LabelWithLogo />)
    expect(asFragment()).toMatchSnapshot()
  })
})
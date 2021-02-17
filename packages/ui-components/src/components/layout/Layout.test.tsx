import React from 'react'
import { render } from '../../utils/test-utils'
import { Layout } from './Layout'

describe('[Component]: Layout', () => {
  test('render the component', () => {
    const { asFragment } = render(<Layout><h1>Olá</h1></Layout>)
    expect(asFragment()).toMatchSnapshot()
  })
})

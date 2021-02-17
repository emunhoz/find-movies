import React from 'react'
import { render, fireEvent, screen } from '../../utils/test-utils'
import { IconHeartWhite } from '@commons/images'
import { Button } from './Button'

describe('[Component]: Button', () => {
  const mockOnClickFunction = jest.fn()

  test('render the component', () => {
    const { asFragment } = render(<Button>Hello world</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  test('render active style', () => {
    const { asFragment } = render(<Button active>Hello world</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  test('render block style', () => {
    const { asFragment } = render(<Button block>Hello world</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should trigger function when button is pressed', () => {
    render(<Button onClick={mockOnClickFunction}>Hello world</Button>)

    fireEvent.click(screen.getByText('Hello world'))

    expect(mockOnClickFunction).toHaveBeenCalled()
  })

  test('render component disabled', () => {
    const { asFragment } = render(<Button disabled>Hello world</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  test('render component with icon', () => {
    const { asFragment } = render(<Button icon={IconHeartWhite}>Hello world</Button>)

    expect(asFragment()).toMatchSnapshot()
  })
})

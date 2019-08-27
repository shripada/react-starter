import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import App from './App'

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })
})

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the page header', () => {
  render(<App />)
  const linkElement = screen.getByText(/by Remy van der Wereld/i)
  expect(linkElement).toBeInTheDocument()
})

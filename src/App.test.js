import { render, screen } from '@testing-library/react';
import App from './App';

test('renders math', () => {
  render(<App />);
  const linkElement = screen.getByText(/math/i);
  expect(linkElement).toBeInTheDocument();
});

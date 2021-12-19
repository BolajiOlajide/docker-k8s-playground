import { render, screen } from '@testing-library/react';
import App from './App';

test('renders copy link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Kevin powell's github/i);
  expect(linkElement).toBeInTheDocument();
});

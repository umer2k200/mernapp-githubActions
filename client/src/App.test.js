import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Simple MERN App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple MERN App/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import Footer from './components/Footer/Footer'
import About from './components/About/About'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders about title', () => {
  render(<About />);
  expect(screen.getAllByText('About Countries App')).toHaveLength(1)
})

test('renders footer text', () => {
  render(<Footer />);
  expect(screen.getAllByText('SoyHenry')).toHaveLength(1)
})
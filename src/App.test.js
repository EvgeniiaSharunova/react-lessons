/* import { render, screen } from '@testing-library/react'; */
import render from '@testing-library/react';
import screen from '@testing-library/react';
import MainApp from './App';

it('renders learn react link', () => {
  render(< MainApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

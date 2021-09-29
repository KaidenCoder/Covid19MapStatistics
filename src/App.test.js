import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"

test('LogoImage', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByTestId('logo-image')
  expect(linkElement).toBeInTheDocument();
});

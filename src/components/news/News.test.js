import { render, screen } from '@testing-library/react';
import Newscovid from './Newscovid';

test('map text', () => {
  render(<Newscovid/>);
  const linkElement = screen.getByText(/Daily Covid news/i);
  expect(linkElement).toBeInTheDocument();
});

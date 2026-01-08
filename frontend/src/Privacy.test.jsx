import { render, screen } from '@testing-library/react';
import Privacy from './Privacy';

test('renders Privacy content', () => {
  render(<Privacy />);
  expect(screen.getByText(/Privacy content!!/i)).toBeInTheDocument();
});

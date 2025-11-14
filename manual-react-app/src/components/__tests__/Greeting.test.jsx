import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from '../Greeting';

describe('Greeting Component', () => {
  test('renders greeting component', () => {
    render(<Greeting />);
    // Add your assertions here
    // Example: expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});

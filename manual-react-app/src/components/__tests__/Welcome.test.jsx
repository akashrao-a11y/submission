import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from '../Welcome';

describe('Welcome Component', () => {
    test('renders welcome message', () => {
        render(<Welcome />);
        expect(screen.getByText('Welcome to my website')).toBeInTheDocument();
    });

    test('renders as h2 heading', () => {
        render(<Welcome />);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveTextContent('Welcome to my website');
    });
});

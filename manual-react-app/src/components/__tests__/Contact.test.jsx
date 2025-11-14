import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact Component (404 Page)', () => {
    test('renders 404 heading', () => {
        render(<Contact />);
        expect(screen.getByText('404')).toBeInTheDocument();
    });

    test('renders Page Not Found message', () => {
        render(<Contact />);
        expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    });

    test('renders error description', () => {
        render(<Contact />);
        expect(screen.getByText('The page you are looking for does not exist.')).toBeInTheDocument();
    });
});

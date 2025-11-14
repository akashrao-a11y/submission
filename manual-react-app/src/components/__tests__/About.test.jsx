import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About Component', () => {
    test('renders About Us heading', () => {
        render(<About />);
        expect(screen.getByText('About Us')).toBeInTheDocument();
    });

    test('renders welcome message', () => {
        render(<About />);
        expect(screen.getByText(/Welcome to GoLearn/i)).toBeInTheDocument();
    });

    test('renders Our Values section', () => {
        render(<About />);
        expect(screen.getByText('Our Values')).toBeInTheDocument();
    });

    test('renders all core values', () => {
        render(<About />);
        expect(screen.getByText(/Innovation/i)).toBeInTheDocument();
        expect(screen.getByText(/Quality/i)).toBeInTheDocument();
        expect(screen.getByText(/Integrity/i)).toBeInTheDocument();
        expect(screen.getByText(/Customer Focus/i)).toBeInTheDocument();
    });

    test('renders Our Team section', () => {
        render(<About />);
        expect(screen.getByText('Our Team')).toBeInTheDocument();
    });

    test('renders team description', () => {
        render(<About />);
        expect(screen.getByText(/passionate developers, designers, and innovators/i)).toBeInTheDocument();
    });
});

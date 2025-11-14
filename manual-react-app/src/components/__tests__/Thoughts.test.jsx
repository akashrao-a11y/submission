import React from 'react';
import { render, screen } from '@testing-library/react';
import Thoughts from '../Thoughts';

describe('Thoughts Component', () => {
    test('renders thoughts message', () => {
        render(<Thoughts />);
        expect(screen.getByText('You can find my thoughts here')).toBeInTheDocument();
    });

    test('renders as paragraph', () => {
        render(<Thoughts />);
        const paragraph = screen.getByText('You can find my thoughts here');
        expect(paragraph.tagName).toBe('P');
    });
});

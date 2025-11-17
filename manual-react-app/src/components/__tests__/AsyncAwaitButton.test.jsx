import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AsyncAwaitButton from '../AsyncAwaitButton';

describe('AsyncAwaitButton', () => {
    it('renders async/await button', () => {
        render(<AsyncAwaitButton />);
        expect(screen.getByTestId('async-await-btn')).toBeInTheDocument();
    });

    it('handles async/await button click', async () => {
        render(<AsyncAwaitButton />);
        fireEvent.click(screen.getByTestId('async-await-btn'));
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Async/Await User')).toBeInTheDocument();
            expect(screen.getByText('asyncawait@example.com')).toBeInTheDocument();
            expect(screen.getByText('Fetched with async/await')).toBeInTheDocument();
        });
    });
});

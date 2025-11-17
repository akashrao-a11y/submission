import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ApiButtons from '../ApiButtons';

describe('ApiButtons', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders all three async pattern buttons', () => {
        render(<ApiButtons />);
        expect(screen.getByTestId('async-await-btn')).toBeInTheDocument();
        expect(screen.getByTestId('timeout-btn')).toBeInTheDocument();
        expect(screen.getByTestId('promise-btn')).toBeInTheDocument();
    });

    it('handles async/await button click', async () => {
        render(<ApiButtons />);
        fireEvent.click(screen.getByTestId('async-await-btn'));
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Async/Await')).toBeInTheDocument();
            expect(screen.getByText(/asyncawait@example.com/)).toBeInTheDocument();
            expect(screen.getByText('Fetched with async/await')).toBeInTheDocument();
        });
    });

    it('handles timeout (callback) button click', async () => {
        render(<ApiButtons />);
        fireEvent.click(screen.getByTestId('timeout-btn'));
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Timeout')).toBeInTheDocument();
            expect(screen.getByText(/timeout@example.com/)).toBeInTheDocument();
            expect(screen.getByText('Fetched with setTimeout')).toBeInTheDocument();
        });
    });

    it('handles promise button click', async () => {
        render(<ApiButtons />);
        fireEvent.click(screen.getByTestId('promise-btn'));
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Promise')).toBeInTheDocument();
            expect(screen.getByText(/promise@example.com/)).toBeInTheDocument();
            expect(screen.getByText('Fetched with Promise')).toBeInTheDocument();
        });
    });

    it('disables all buttons during loading', async () => {
        render(<ApiButtons />);
        fireEvent.click(screen.getByTestId('async-await-btn'));
        const buttons = screen.getAllByRole('button');
        buttons.forEach(button => {
            expect(button).toBeDisabled();
        });
        await waitFor(() => {
            buttons.forEach(button => {
                expect(button).not.toBeDisabled();
            });
        });
    });
});

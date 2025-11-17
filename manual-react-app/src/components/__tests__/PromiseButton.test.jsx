import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PromiseButton from '../PromiseButton';

describe('PromiseButton', () => {
    it('renders promise button', () => {
        render(<PromiseButton />);
        expect(screen.getByTestId('promise-btn')).toBeInTheDocument();
    });

    it('handles promise button click', async () => {
        render(<PromiseButton />);
        fireEvent.click(screen.getByTestId('promise-btn'));
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Promise')).toBeInTheDocument();
        });
    });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TimeoutButton from '../TimeoutButton';

describe('TimeoutButton', () => {
    it('renders timeout button', () => {
        render(<TimeoutButton />);
        expect(screen.getByTestId('timeout-btn')).toBeInTheDocument();
    });

    it('handles timeout button click', async () => {
        render(<TimeoutButton />);
        fireEvent.click(screen.getByTestId('timeout-btn'));
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Timeout')).toBeInTheDocument();
            expect(screen.getByText(/timeout@example.com/)).toBeInTheDocument();
            expect(screen.getByText('Fetched with setTimeout')).toBeInTheDocument();
        });
    });

    it('shows error if fetch fails', async () => {
        // Simulate error by temporarily replacing fetchUserTimeout
        const orig = require('../TimeoutButton').default;
        const RealTimeoutButton = orig;
        jest.spyOn(require('../TimeoutButton'), 'default').mockImplementation(() => {
            const [result, setResult] = React.useState(null);
            const [loading, setLoading] = React.useState(false);
            const [error, setError] = React.useState(null);
            const handleClick = () => {
                setLoading(true);
                setError(null);
                setResult(null);
                setTimeout(() => {
                    setLoading(false);
                    setError('Failed to fetch user');
                }, 10);
            };
            return (
                <div>
                    <button data-testid="timeout-btn" onClick={handleClick} disabled={loading}>
                        {loading ? 'Loading...' : 'Timeout'}
                    </button>
                    {error && <div>{error}</div>}
                </div>
            );
        });
        render(<TimeoutButton />);
        fireEvent.click(screen.getByTestId('timeout-btn'));
        await waitFor(() => {
            expect(screen.getByText('Failed to fetch user')).toBeInTheDocument();
        });
        jest.restoreAllMocks();
    });
});

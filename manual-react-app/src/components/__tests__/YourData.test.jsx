import React from 'react';
import { render, screen } from '@testing-library/react';
import YourData from '../YourData';

describe('YourData Component', () => {
    test('renders "Your Data" heading', () => {
        render(<YourData />);
        expect(screen.getByText('Your Data')).toBeInTheDocument();
    });

    test('shows "No data submitted yet" when no data is provided', () => {
        render(<YourData submittedData={null} />);
        expect(screen.getByText('No data submitted yet')).toBeInTheDocument();
    });

    test('displays submitted user data when provided', () => {
        const mockData = {
            username: 'John Doe',
            email: 'john@example.com',
            password: 'password123'
        };

        render(<YourData submittedData={mockData} />);

        expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
        expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/••••••••/)).toBeInTheDocument();
    });

    test('hides password with bullets', () => {
        const mockData = {
            username: 'Jane Smith',
            email: 'jane@example.com',
            password: 'secretpassword'
        };

        render(<YourData submittedData={mockData} />);

        expect(screen.queryByText('secretpassword')).not.toBeInTheDocument();
        expect(screen.getByText(/••••••••/)).toBeInTheDocument();
    });

    test('renders all data fields when data is submitted', () => {
        const mockData = {
            username: 'Test User',
            email: 'test@test.com',
            password: 'pass123'
        };

        render(<YourData submittedData={mockData} />);

        expect(screen.getByText(/Name:/i)).toBeInTheDocument();
        expect(screen.getByText(/Email ID:/i)).toBeInTheDocument();
        expect(screen.getByText(/Password:/i)).toBeInTheDocument();
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import PeopleData from '../PeopleData';

// Mock PeopleDisplay component
jest.mock('../PeopleDisplay', () => {
    return function MockPeopleDisplay({ people, searchTerm, setSearchTerm }) {
        return (
            <div data-testid="people-display">
                <div data-testid="people-count">{people.length}</div>
                <div data-testid="search-term">{searchTerm}</div>
            </div>
        );
    };
});

describe('PeopleData Component', () => {
    test('renders PeopleDisplay component', () => {
        render(<PeopleData />);
        expect(screen.getByTestId('people-display')).toBeInTheDocument();
    });

    test('passes 5 people to PeopleDisplay', () => {
        render(<PeopleData />);
        expect(screen.getByTestId('people-count')).toHaveTextContent('5');
    });

    test('initializes with empty search term', () => {
        render(<PeopleData />);
        expect(screen.getByTestId('search-term')).toHaveTextContent('');
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import FormContainer from '../FormContainer';
import formReducer from '../../formSlice';

// Mock Child2 component
jest.mock('../Child2', () => {
    return function MockChild2() {
        return <div data-testid="child2">Child2 Component</div>;
    };
});

// Mock FormComponent
jest.mock('../FormComponent', () => {
    return function MockFormComponent() {
        return <div data-testid="form-component">Form Component</div>;
    };
});

// Helper to create a mock store
const createMockStore = () => {
    return configureStore({
        reducer: {
            form: formReducer,
        },
    });
};

describe('FormContainer Component', () => {
    test('renders heading', () => {
        const store = createMockStore();
        render(
            <Provider store={store}>
                <FormContainer />
            </Provider>
        );
        expect(screen.getByText('Redux Form Example')).toBeInTheDocument();
    });

    test('renders FormComponent', () => {
        const store = createMockStore();
        render(
            <Provider store={store}>
                <FormContainer />
            </Provider>
        );
        expect(screen.getByTestId('form-component')).toBeInTheDocument();
    });

    test('renders Child2 component', () => {
        const store = createMockStore();
        render(
            <Provider store={store}>
                <FormContainer />
            </Provider>
        );
        expect(screen.getByTestId('child2')).toBeInTheDocument();
    });
});

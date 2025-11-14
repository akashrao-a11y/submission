import {
    loginUser,
    registerUser,
    isAuthenticated,
} from '../authService';

// Mock fetch globally
global.fetch = jest.fn();

describe('Login API Tests', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        fetch.mockClear();
        // Clear localStorage
        localStorage.clear();
    });

    // Test 1: Successful Login
    test('should login successfully with valid credentials', async () => {
        const mockResponse = {
            Token: 'mock-jwt-token-12345',
            FullName: 'John Doe',
            Role: 'Customer',
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse,
        });

        const credentials = {
            email: 'test@example.com',
            password: 'password123',
        };

        const result = await loginUser(credentials);

        // Verify the API was called correctly
        expect(fetch).toHaveBeenCalledWith(
            'http://localhost:56309/api/Auth/login',
            expect.objectContaining({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        );

        // Verify successful response
        expect(result.success).toBe(true);
        expect(result.data.Token).toBe('mock-jwt-token-12345');
        expect(result.data.FullName).toBe('John Doe');
        
        // Verify token is stored in localStorage
        expect(localStorage.getItem('authToken')).toBe('mock-jwt-token-12345');
        expect(localStorage.getItem('currentUser')).toBe('John Doe');
        expect(localStorage.getItem('userRole')).toBe('Customer');
    });

    // Test 2: Failed Login (Invalid Credentials)
    test('should fail login with invalid credentials', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            text: async () => 'Invalid email or password',
        });

        const credentials = {
            email: 'wrong@example.com',
            password: 'wrongpassword',
        };

        const result = await loginUser(credentials);

        // Verify failure response
        expect(result.success).toBe(false);
        expect(result.message).toBe('Invalid email or password');
        
        // Verify no token is stored
        expect(localStorage.getItem('authToken')).toBeNull();
        expect(localStorage.getItem('currentUser')).toBeNull();
    });

    // Test 3: Successful Registration
    test('should register user successfully', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            text: async () => 'User registered successfully',
        });

        const userData = {
            fullName: 'Jane Smith',
            email: 'jane@example.com',
            password: 'password123',
            role: 'Customer',
        };

        const result = await registerUser(userData);

        // Verify the API was called correctly
        expect(fetch).toHaveBeenCalledWith(
            'http://localhost:56309/api/Auth/register',
            expect.objectContaining({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        );

        // Verify successful registration
        expect(result.success).toBe(true);
        expect(result.message).toBe('User registered successfully');
    });
});

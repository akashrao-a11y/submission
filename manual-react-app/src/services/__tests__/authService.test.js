import {
    loginUser,
    registerUser,
    logoutUser,
    isAuthenticated,
    getCurrentUser,
    getAuthToken,
} from '../authService';

// Mock fetch globally
global.fetch = jest.fn();

describe('Auth Service', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        fetch.mockClear();
        // Clear localStorage
        localStorage.clear();
    });

    describe('loginUser', () => {
        it('should login successfully with valid credentials', async () => {
            const mockResponse = {
                Token: 'mock-jwt-token',
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

            expect(fetch).toHaveBeenCalledWith(
                'http://localhost:56309/api/Auth/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Email: credentials.email,
                        Password: credentials.password,
                    }),
                }
            );

            expect(result.success).toBe(true);
            expect(result.data).toEqual(mockResponse);
            expect(localStorage.getItem('authToken')).toBe('mock-jwt-token');
            expect(localStorage.getItem('currentUser')).toBe('John Doe');
            expect(localStorage.getItem('userRole')).toBe('Customer');
        });

        it('should fail login with invalid credentials', async () => {
            fetch.mockResolvedValueOnce({
                ok: false,
                text: async () => 'Invalid credentials',
            });

            const credentials = {
                email: 'wrong@example.com',
                password: 'wrongpassword',
            };

            const result = await loginUser(credentials);

            expect(result.success).toBe(false);
            expect(result.message).toBe('Invalid credentials');
            expect(localStorage.getItem('authToken')).toBeNull();
        });

        it('should handle network errors gracefully', async () => {
            fetch.mockRejectedValueOnce(new Error('Network error'));

            const credentials = {
                email: 'test@example.com',
                password: 'password123',
            };

            const result = await loginUser(credentials);

            expect(result.success).toBe(false);
            expect(result.message).toBe('Network error');
        });

        it('should handle server errors (500)', async () => {
            fetch.mockResolvedValueOnce({
                ok: false,
                text: async () => 'Internal Server Error',
            });

            const credentials = {
                email: 'test@example.com',
                password: 'password123',
            };

            const result = await loginUser(credentials);

            expect(result.success).toBe(false);
            expect(result.message).toBe('Internal Server Error');
        });
    });

    describe('registerUser', () => {
        it('should register user successfully', async () => {
            fetch.mockResolvedValueOnce({
                ok: true,
                text: async () => 'Registration successful',
            });

            const userData = {
                fullName: 'Jane Smith',
                email: 'jane@example.com',
                password: 'password123',
                role: 'Customer',
            };

            const result = await registerUser(userData);

            expect(fetch).toHaveBeenCalledWith(
                'http://localhost:56309/api/Auth/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        FullName: userData.fullName,
                        Password: userData.password,
                        Email: userData.email,
                        Role: userData.role,
                    }),
                }
            );

            expect(result.success).toBe(true);
            expect(result.message).toBe('Registration successful');
        });

        it('should fail registration with existing email', async () => {
            fetch.mockResolvedValueOnce({
                ok: false,
                text: async () => 'Email already exists',
            });

            const userData = {
                fullName: 'Jane Smith',
                email: 'existing@example.com',
                password: 'password123',
                role: 'Customer',
            };

            const result = await registerUser(userData);

            expect(result.success).toBe(false);
            expect(result.message).toBe('Email already exists');
        });

        it('should use default role if not provided', async () => {
            fetch.mockResolvedValueOnce({
                ok: true,
                text: async () => 'Registration successful',
            });

            const userData = {
                fullName: 'Jane Smith',
                email: 'jane@example.com',
                password: 'password123',
            };

            await registerUser(userData);

            const callArgs = JSON.parse(fetch.mock.calls[0][1].body);
            expect(callArgs.Role).toBe('Customer');
        });
    });

    describe('logoutUser', () => {
        it('should clear all auth data from localStorage', () => {
            localStorage.setItem('authToken', 'mock-token');
            localStorage.setItem('currentUser', 'John Doe');
            localStorage.setItem('userRole', 'Customer');

            logoutUser();

            expect(localStorage.getItem('authToken')).toBeNull();
            expect(localStorage.getItem('currentUser')).toBeNull();
            expect(localStorage.getItem('userRole')).toBeNull();
        });
    });

    describe('isAuthenticated', () => {
        it('should return true when token exists', () => {
            localStorage.setItem('authToken', 'mock-token');

            expect(isAuthenticated()).toBe(true);
        });

        it('should return false when token does not exist', () => {
            expect(isAuthenticated()).toBe(false);
        });
    });

    describe('getCurrentUser', () => {
        it('should return user info when authenticated', () => {
            localStorage.setItem('authToken', 'mock-token');
            localStorage.setItem('currentUser', 'John Doe');
            localStorage.setItem('userRole', 'Admin');

            const user = getCurrentUser();

            expect(user).toEqual({
                fullName: 'John Doe',
                role: 'Admin',
            });
        });

        it('should return null when not authenticated', () => {
            const user = getCurrentUser();

            expect(user).toBeNull();
        });
    });

    describe('getAuthToken', () => {
        it('should return token when it exists', () => {
            localStorage.setItem('authToken', 'mock-jwt-token');

            expect(getAuthToken()).toBe('mock-jwt-token');
        });

        it('should return null when token does not exist', () => {
            expect(getAuthToken()).toBeNull();
        });
    });
});

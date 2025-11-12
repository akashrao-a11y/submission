// API Base URL - Update this to match your API URL
const API_BASE_URL = 'http://localhost:56309/api';

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @param {string} userData.fullName - Full name
 * @param {string} userData.password - Password
 * @param {string} userData.email - Email address
 * @param {string} userData.role - User role (default: Customer)
 * @returns {Promise<Object>} Response from the API
 */
export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/Auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                FullName: userData.fullName,
                Password: userData.password,
                Email: userData.email,
                Role: userData.role || 'Customer',
            }),
        });

        const data = await response.text();

        if (!response.ok) {
            throw new Error(data || 'Registration failed');
        }

        return {
            success: true,
            message: data,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'An error occurred during registration',
        };
    }
};

/**
 * Login user
 * @param {Object} credentials - Login credentials
 * @param {string} credentials.email - Email or username
 * @param {string} credentials.password - Password
 * @returns {Promise<Object>} Response with token and user info
 */
export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${API_BASE_URL}/Auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Email: credentials.email,
                Password: credentials.password,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Login failed');
        }

        const data = await response.json();

        // Store token and user info in localStorage
        if (data.Token) {
            localStorage.setItem('authToken', data.Token);
            localStorage.setItem('currentUser', data.FullName);
            localStorage.setItem('userRole', data.Role);
        }

        return {
            success: true,
            data: data,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'An error occurred during login',
        };
    }
};

/**
 * Logout user
 */
export const logoutUser = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if user has a valid token
 */
export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
};

/**
 * Get current user info
 * @returns {Object|null} User info or null
 */
export const getCurrentUser = () => {
    const token = localStorage.getItem('authToken');
    if (!token) return null;

    return {
        fullName: localStorage.getItem('currentUser'),
        role: localStorage.getItem('userRole'),
    };
};

/**
 * Get auth token
 * @returns {string|null} JWT token or null
 */
export const getAuthToken = () => {
    return localStorage.getItem('authToken');
};

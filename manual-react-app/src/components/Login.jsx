import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/authService';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegisterMode, setIsRegisterMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Handle Registration
    const handleRegister = async (e) => {
        e.preventDefault();

        // Simple validation
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        setIsLoading(true);

        const result = await registerUser({
            fullName,
            password,
            email,
            role: 'Customer',
        });

        setIsLoading(false);

        if (result.success) {
            alert('Registration successful! Please login.');
            setIsRegisterMode(false);
            // Clear form
            setFullName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } else {
            alert(result.message || 'Registration failed');
        }
    };

    // Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const result = await loginUser({
            email,
            password,
        });

        setIsLoading(false);

        if (result.success) {
            // Store authentication data
            if (result.token) {
                localStorage.setItem('token', result.token);
            }
            localStorage.setItem('user', JSON.stringify({ email }));
            
            alert('Login successful!');
            navigate('/home');
        } else {
            alert(result.message || 'Invalid email or password');
        }
    };

    const handleSubmit = (e) => {
        if (isRegisterMode) {
            handleRegister(e);
        } else {
            handleLogin(e);
        }
    };

    // Styles props 
    const containerStyle = {
        maxWidth: '400px',
        margin: '2rem auto',
        padding: '2rem',
        background: '#1a1a2e',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        border: '1px solid #2d2d44',
    };

    const headingStyle = {
        textAlign: 'center',
        color: '#00d4ff',
        marginBottom: '1.5rem',
        fontSize: '2rem',
        fontWeight: 600,
    };

    const formGroupStyle = {
        marginBottom: '1.5rem',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        color: '#b0b0b0',
        fontWeight: 500,
        fontSize: '14px',
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        fontSize: '16px',
        border: '1px solid #2d2d44',
        borderRadius: '8px',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        background: '#0f0f23',
        color: '#e0e0e0',
    };

    const buttonStyle = {
        width: '100%',
        padding: '0.875rem',
        fontSize: '16px',
        fontWeight: 600,
        color: '#0f0f23',
        background: '#00d4ff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background 0.3s ease, transform 0.2s ease',
    };

    const toggleButtonStyle = {
        background: 'none',
        border: 'none',
        color: '#00d4ff',
        cursor: 'pointer',
        fontSize: '14px',
        textDecoration: 'underline',
        marginTop: '1rem',
        width: '100%',
        textAlign: 'center',
        padding: '0.5rem',
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>
                {isRegisterMode ? 'Register' : 'Login'}
            </h2>

            <form onSubmit={handleSubmit}>
                {isRegisterMode && (
                    <>
                        <div style={formGroupStyle}>
                            <label htmlFor="fullName" style={labelStyle}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                style={inputStyle}
                                placeholder="Enter your full name"
                                onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                                onBlur={(e) => e.target.style.borderColor = '#2d2d44'}
                                required
                            />
                        </div>
                    </>
                )}

                <div style={formGroupStyle}>
                    <label htmlFor="email" style={labelStyle}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={inputStyle}
                        placeholder="Enter your email"
                        onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                        onBlur={(e) => e.target.style.borderColor = '#2d2d44'}
                        required
                    />
                </div>

                <div style={formGroupStyle}>
                    <label htmlFor="password" style={labelStyle}>
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={inputStyle}
                        placeholder="Enter your password"
                        onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                        onBlur={(e) => e.target.style.borderColor = '#2d2d44'}
                        required
                    />
                </div>

                {isRegisterMode && (
                    <div style={formGroupStyle}>
                        <label htmlFor="confirmPassword" style={labelStyle}>
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            style={inputStyle}
                            placeholder="Confirm your password"
                            onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                            onBlur={(e) => e.target.style.borderColor = '#2d2d44'}
                            required
                        />
                    </div>
                )}

                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={(e) => e.target.style.background = '#00b8d4'}
                    onMouseOut={(e) => e.target.style.background = '#00d4ff'}
                    disabled={isLoading}
                >
                    {isLoading ? 'Please wait...' : (isRegisterMode ? 'Register' : 'Login')}
                </button>
            </form>

            <button
                type="button"
                style={toggleButtonStyle}
                onClick={() => {
                    setIsRegisterMode(!isRegisterMode);
                    setFullName('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                }}
            >
                {isRegisterMode
                    ? 'Already have an account? Login here'
                    : "Don't have an account? Register here"}
            </button>
        </div>
    );
}

export default Login;

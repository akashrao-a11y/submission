import React, { useState } from 'react';

// Async/await mock
const fetchUserAsyncAwait = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return {
        success: true,
        data: { id: 1, name: 'Async/Await User', email: 'asyncawait@example.com' },
        message: 'Fetched with async/await',
    };
};

// setTimeout (callback style)
const fetchUserTimeout = (cb) => {
    setTimeout(() => {
        cb({
            success: true,
            data: { id: 2, name: 'Timeout User', email: 'timeout@example.com' },
            message: 'Fetched with setTimeout',
        });
    }, 400);
};

// Direct Promise
const fetchUserPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: { id: 3, name: 'Promise User', email: 'promise@example.com' },
                message: 'Fetched with Promise',
            });
        }, 400);
    });
};

function ApiButtons() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(null); // null | 'async' | 'timeout' | 'promise'
    const [error, setError] = useState(null);


    // Button 1: async/await
    const handleAsyncAwait = async () => {
        setLoading('async');
        setError(null);
        setResult(null);
        const response = await fetchUserAsyncAwait();
        setLoading(null);
        if (response.success) {
            setResult({
                type: 'Async/Await',
                data: response.data,
                message: response.message,
            });
        } else {
            setError(response.message);
        }
    };

    // Button 2: setTimeout (callback)
    const handleTimeout = () => {
        setLoading('timeout');
        setError(null);
        setResult(null);
        fetchUserTimeout((response) => {
            setLoading(null);
            if (response.success) {
                setResult({
                    type: 'Timeout',
                    data: response.data,
                    message: response.message,
                });
            } else {
                setError(response.message);
            }
        });
    };

    // Button 3: Promise
    const handlePromise = () => {
        setLoading('promise');
        setError(null);
        setResult(null);
        fetchUserPromise().then((response) => {
            setLoading(null);
            if (response.success) {
                setResult({
                    type: 'Promise',
                    data: response.data,
                    message: response.message,
                });
            } else {
                setError(response.message);
            }
        });
    };

    // Styles
    const containerStyle = {
        maxWidth: '800px',
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
        marginBottom: '2rem',
        fontSize: '2rem',
        fontWeight: 600,
    };

    const buttonContainerStyle = {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        marginBottom: '2rem',
        flexWrap: 'wrap',
    };

    const buttonStyle = {
        padding: '0.875rem 1.5rem',
        fontSize: '16px',
        fontWeight: 600,
        color: '#0f0f23',
        background: '#00d4ff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background 0.3s ease, transform 0.2s ease',
        minWidth: '150px',
    };

    const resultBoxStyle = {
        padding: '1.5rem',
        background: '#0f0f23',
        borderRadius: '8px',
        border: '1px solid #2d2d44',
        color: '#e0e0e0',
        maxHeight: '400px',
        overflowY: 'auto',
    };

    const errorStyle = {
        padding: '1rem',
        background: '#ff3366',
        color: 'white',
        borderRadius: '8px',
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>API Test Buttons</h1>


            <div style={buttonContainerStyle}>
                <button
                    onClick={handleAsyncAwait}
                    style={buttonStyle}
                    disabled={!!loading}
                    data-testid="async-await-btn"
                >
                    {loading === 'async' ? 'Loading...' : 'Async/Await'}
                </button>
                <button
                    onClick={handleTimeout}
                    style={buttonStyle}
                    disabled={!!loading}
                    data-testid="timeout-btn"
                >
                    {loading === 'timeout' ? 'Loading...' : 'Timeout'}
                </button>
                <button
                    onClick={handlePromise}
                    style={buttonStyle}
                    disabled={!!loading}
                    data-testid="promise-btn"
                >
                    {loading === 'promise' ? 'Loading...' : 'Promise'}
                </button>
            </div>

            {error && (
                <div style={errorStyle}>
                    <strong>Error:</strong> {error}
                </div>
            )}

            {result && (
                <div style={resultBoxStyle}>
                    <h3 style={{ color: '#00d4ff', marginTop: 0 }}>{result.type}</h3>
                    <pre style={{ whiteSpace: 'pre-wrap', fontSize: '14px' }}>
                        {JSON.stringify(result.data, null, 2)}
                    </pre>
                    <p style={{ color: '#b0b0b0', marginTop: '1rem' }}>{result.message}</p>
                </div>
            )}
        </div>
    );
}

export default ApiButtons;

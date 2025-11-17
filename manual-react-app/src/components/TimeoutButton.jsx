import React, { useState } from 'react';

import { fetchRandomUser } from '../services/userService';

// setTimeout (callback style) using service
const fetchUserTimeout = (cb) => {
    fetchRandomUser('timeout').then((result) => {
        setTimeout(() => {
            cb(result);
        }, 0);
    });
};


const buttonStyle = {
    padding: '0.9rem 2.2rem',
    fontSize: '1.05rem',
    color: '#181824',
    background: 'linear-gradient(90deg, #00d4ff 0%, #3a7bd5 100%)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
    transition: 'background 0.2s, color 0.2s',
    minWidth: '150px',
    margin: '0 0.5rem',
};

const resultStyle = {
    background: '#23233a',
    color: '#fff',
    borderRadius: '6px',
    padding: '0.7rem 1.2rem',
    marginTop: '1rem',
    boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
    textAlign: 'left',
};


/**
 * @typedef {Object} UserResult
 * @property {boolean} success
 * @property {{ id: string, name: string, email: string }} [data]
 * @property {string} message
 */

function TimeoutButton() {
    /** @type {[any,Function]} */
    const [result, setResult] = useState(null);
    /** @type {[boolean,Function]} */
    const [loading, setLoading] = useState(false);
    /** @type {[string|null,Function]} */
    const [error, setError] = useState(null);

    const handleClick = () => {
        setLoading(true);
        setError(null);
        setResult(null);
        fetchUserTimeout((/** @type {UserResult} */ response) => {
            setLoading(false);
            if (response.success) {
                setResult(response);
            } else {
                setError(response.message);
            }
        });
    };

    return (
        <div style={{ margin: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button
                style={buttonStyle}
                onClick={handleClick}
                disabled={loading}
                data-testid="timeout-btn"
            >
                {loading ? 'Loading...' : 'Timeout'}
            </button>
            {error && <div style={{ color: 'red', marginTop: '0.7rem' }}>{error}</div>}
            {result && result.data && (
                <div style={{ ...resultStyle, textAlign: /** @type {any} */ ('left') }}>
                    <h3 style={{ margin: 0 }}>{result.data.name}</h3>
                    <p style={{ margin: 0 }}>{result.data.email}</p>
                    <p style={{ margin: 0 }}>{result.message}</p>
                </div>
            )}
        </div>
    );
}

export default TimeoutButton;

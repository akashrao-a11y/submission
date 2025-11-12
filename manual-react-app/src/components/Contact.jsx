import React from 'react';

function NotFound() {
    return (
        <div style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1976d2',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
            <h2 style={{ marginBottom: '0.5rem' }}>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}

export default NotFound;

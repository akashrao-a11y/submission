import React from 'react';

function NotFound() {
    return (
        <div style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#00d4ff',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#00d4ff' }}>404</h1>
            <h2 style={{ marginBottom: '0.5rem', color: '#e0e0e0' }}>Page Not Found</h2>
            <p style={{ color: '#b0b0b0' }}>The page you are looking for does not exist.</p>
        </div>
    );
}

export default NotFound;

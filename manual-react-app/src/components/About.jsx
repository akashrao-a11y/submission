import React from 'react';

const theme = {
    borderColor: '#1976d2',
    borderRadius: 12,
    padding: '2rem',
    marginBottom: '1.5rem',
    cardBg: '#fff',
    textColor: '#333',
    accentColor: '#1976d2',
};

function About() {
    return (
        <div
            style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '2rem',
            }}
        >
            <div
                style={{
                    border: `1.5px solid ${theme.borderColor}`,
                    padding: theme.padding,
                    borderRadius: theme.borderRadius,
                    marginBottom: theme.marginBottom,
                    background: theme.cardBg,
                    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.07)',
                }}
            >
                <h1 style={{ color: theme.accentColor, marginBottom: '1.5rem' }}>
                    About Us
                </h1>
                <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.8', 
                    color: theme.textColor,
                    marginBottom: '1rem',
                }}>
                    Welcome to MyApp! We are dedicated to providing the best experience for our users.
                </p>
                <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.8', 
                    color: theme.textColor,
                    marginBottom: '1rem',
                }}>
                    Our mission is to create innovative solutions that make a difference in people's lives.
                </p>
            </div>

            <div
                style={{
                    border: `1.5px solid ${theme.borderColor}`,
                    padding: theme.padding,
                    borderRadius: theme.borderRadius,
                    marginBottom: theme.marginBottom,
                    background: theme.cardBg,
                    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.07)',
                }}
            >
                <h2 style={{ color: theme.accentColor, marginBottom: '1rem' }}>
                    Our Values
                </h2>
                <ul style={{ 
                    textAlign: 'left', 
                    fontSize: '1rem', 
                    lineHeight: '2',
                    color: theme.textColor,
                }}>
                    <li><strong>Innovation:</strong> Always pushing the boundaries</li>
                    <li><strong>Quality:</strong> Excellence in everything we do</li>
                    <li><strong>Integrity:</strong> Honest and transparent</li>
                    <li><strong>Customer Focus:</strong> Your success is our priority</li>
                </ul>
            </div>

            <div
                style={{
                    border: `1.5px solid ${theme.borderColor}`,
                    padding: theme.padding,
                    borderRadius: theme.borderRadius,
                    background: theme.cardBg,
                    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.07)',
                }}
            >
                <h2 style={{ color: theme.accentColor, marginBottom: '1rem' }}>
                    Our Team
                </h2>
                <p style={{ 
                    fontSize: '1rem', 
                    lineHeight: '1.8', 
                    color: theme.textColor,
                }}>
                    We are a team of passionate developers, designers, and innovators working together 
                    to create amazing products and experiences.
                </p>
            </div>
        </div>
    );
}

export default About;

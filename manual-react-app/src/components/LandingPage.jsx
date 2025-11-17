import React from 'react';
import { useNavigate } from 'react-router-dom';
import AsyncAwaitButton from './AsyncAwaitButton';
import TimeoutButton from './TimeoutButton';
import PromiseButton from './PromiseButton';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: '100vh',
            background: '#181824',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'sans-serif'
        }}>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.2rem 2rem',
                background: '#23233a',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}>
                <h1 style={{
                    color: '#00d4ff',
                    fontSize: '1.5rem',
                    margin: 0,
                    fontWeight: 700
                }}>
                    GoLearn
                </h1>
                <button
                    style={{
                        padding: '0.5rem 1.2rem',
                        fontSize: '1rem',
                        color: '#23233a',
                        background: '#00d4ff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 500
                    }}
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </header>
            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
            }}>
                <h2 style={{
                    color: '#00d4ff',
                    fontSize: '2.2rem',
                    marginBottom: '0.7rem',
                    fontWeight: 700
                }}>
                    Welcome to GoLearn
                </h2>
                <p style={{
                    color: '#b0b0b0',
                    fontSize: '1.1rem',
                    marginBottom: '1.5rem',
                    maxWidth: '420px',
                    textAlign: 'center'
                }}>
                    GoLearn helps you manage your learning, discover people, and organize your data with ease.
                </p>
                <ul style={{
                    color: '#e0e0e0',
                    fontSize: '1rem',
                    marginBottom: '2rem',
                    padding: 0,
                    listStyle: 'none',
                    textAlign: 'left',
                    maxWidth: '350px'
                }}>
                    <li style={{ marginBottom: '0.7rem' }}>• Simple data management</li>
                    <li style={{ marginBottom: '0.7rem' }}>• Find and connect with learners</li>
                    <li style={{ marginBottom: '0.7rem' }}>• Easy to use and secure</li>
                </ul>
                <div>
                    <button
                        style={{
                            padding: '0.8rem 2.2rem',
                            fontSize: '1rem',
                            color: '#181824',
                            background: '#00d4ff',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: 600,
                            marginRight: '1rem'
                        }}
                        onClick={() => navigate('/login')}
                    >
                        Get Started
                    </button>
                    <button
                        style={{
                            padding: '0.8rem 2.2rem',
                            fontSize: '1rem',
                            color: '#00d4ff',
                            background: 'transparent',
                            border: '2px solid #00d4ff',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: 600
                        }}
                        onClick={() => navigate('/about')}
                    >
                        Learn More
                    </button>
                </div>

                {/* API Test Buttons Section */}
                <div style={{ marginTop: '3rem', width: '100%', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <AsyncAwaitButton />
                    <TimeoutButton />
                    <PromiseButton />
                </div>
            </main>
        </div>
    );
}

export default LandingPage;

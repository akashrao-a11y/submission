import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const theme = {
    topBarBg: '#1a1a2e',
    topBarColor: '#e0e0e0',
    linkHover: '#00d4ff',
    linkActiveBg: 'rgba(0, 212, 255, 0.15)',
    shadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    borderBottom: '#2d2d44',
    accentColor: '#00d4ff',
};

function Topbarlayout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear any stored authentication data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        // Show logout confirmation
        alert('You have been logged out successfully!');
        
        // Navigate to login page
        navigate('/');
    };

    const navLinkStyle = {
        color: theme.topBarColor,
        textDecoration: 'none',
        padding: '0.75rem 1.5rem',  
        fontSize: '16px',
        fontWeight: 600,
        transition: 'all 0.3s ease',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'inline-block',
    };

    const logoutButtonStyle = {
        color: theme.topBarColor,
        background: 'rgba(0, 212, 255, 0.2)',
        border: '1px solid rgba(0, 212, 255, 0.4)',
        padding: '0.75rem 1.5rem',  
        fontSize: '16px',
        fontWeight: 600,
        transition: 'all 0.3s ease',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'inline-block',
    };

    return (
        <nav
            style={{
                background: theme.topBarBg,
                padding: '1rem 2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: theme.shadow,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                borderBottom: `2px solid ${theme.borderBottom}`,
            }}
        >
            <div style={{ 
                fontSize: '1.75rem', 
                fontWeight: 700, 
                color: theme.topBarColor,
                letterSpacing: '-0.5px',
            }}>
                MyApp
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Link
                    to="/home"
                    style={navLinkStyle}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = theme.linkActiveBg;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    style={navLinkStyle}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = theme.linkActiveBg;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    style={navLinkStyle}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = theme.linkActiveBg;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    Contact
                </Link>
                <button
                    onClick={handleLogout}
                    style={logoutButtonStyle}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 212, 255, 0.3)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 212, 255, 0.2)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Topbarlayout;

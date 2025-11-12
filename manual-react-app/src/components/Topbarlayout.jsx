import React from 'react';
import { Link } from 'react-router-dom';

const theme = {
    topBarBg: '#1976d2',
    topBarColor: '#fff',
    linkHover: '#1565c0',
    linkActiveBg: 'rgba(255, 255, 255, 0.15)',
    shadow: '0 2px 8px rgba(25, 118, 210, 0.2)',
    borderBottom: '#90caf9',
};

function Topbarlayout() {
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
            </div>
        </nav>
    );
}

export default Topbarlayout;

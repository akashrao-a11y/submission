import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Topbarlayout from './components/Topbarlayout';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import LandingPage from './components/LandingPage';

function MainContent() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isLandingPage = location.pathname === '/';

    return (
        <div>
            {!isLoginPage && !isLandingPage && <Topbarlayout />}
            <div
                style={{
                    marginTop: (isLoginPage || isLandingPage) ? '0' : '80px',
                    minHeight: (isLoginPage || isLandingPage) ? '100vh' : 'calc(100vh - 80px)',
                }}
            >
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<App />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

function Main() {
    return (
        <Router>
            <MainContent />
        </Router>
    );
}

export default Main;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Topbarlayout from './components/Topbarlayout';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

function MainContent() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/';

    return (
        <div>
            {!isLoginPage && <Topbarlayout />}
            <div
                style={{
                    marginTop: isLoginPage ? '0' : '80px',
                    minHeight: isLoginPage ? '100vh' : 'calc(100vh - 80px)',
                }}
            >
                <Routes>
                    <Route path="/" element={<Login />} />
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

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbarlayout from './components/Topbarlayout';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

function Main() {
    return (
        <Router>
            <div>
                <Topbarlayout />
                <div
                    style={{
                        marginTop: '80px',
                        minHeight: 'calc(100vh - 80px)',
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
        </Router>
    );
}

export default Main;

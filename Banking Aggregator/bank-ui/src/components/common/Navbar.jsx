import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import '../../AppTheme.css';


const getUser = () => {
  const user = localStorage.getItem('user');
  if (user) return JSON.parse(user);
  // Fallback: if accountNumber or accountId is present, treat as logged in
  const accountNumber = localStorage.getItem('accountNumber');
  const accountId = localStorage.getItem('accountId');
  if (accountNumber || accountId) return { accountNumber, accountId };
  return null;
};


const Navbar = () => {
  const navigate = useNavigate();
  /** @type {[any, Function]} */
  const [user, setUser] = useState(getUser());
  const [loggedIn, setLoggedIn] = useState(!!getUser());

  useEffect(() => {
    const check = () => {
      const u = getUser();
      setUser(u);
      setLoggedIn(!!u);
    };
    window.addEventListener('storage', check);
    return () => window.removeEventListener('storage', check);
  }, []);


  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Banking Aggregator</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {loggedIn && <Link to="/dashboard">Dashboard</Link>}
        {loggedIn && <Link to="/transactions">Transactions</Link>}
        {loggedIn && user && user.role === 'Sysadmin' && <Link to="/manage-users">Manage Users</Link>}
        {loggedIn && user && user.role === 'Sysadmin' && <Link to="/manage-banks">Manage Banks</Link>}
        {!loggedIn && <Link to="/login">Login</Link>}
        {loggedIn && <button className="navbar-logout" onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
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
  const [loggedIn, setLoggedIn] = useState(!!getUser());
  const user = getUser();

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Banking Aggregator</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
  {user && <Link to="/dashboard">Dashboard</Link>}
  {user && <Link to="/transactions">Transactions</Link>}
  {user && user.role === 'Sysadmin' && <Link to="/manage-users">Manage Users</Link>}
  {user && user.role === 'Sysadmin' && <Link to="/manage-banks">Manage Banks</Link>}
  {!getUser() && <Link to="/login">Login</Link>}
  {getUser() && <button className="navbar-logout" onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;

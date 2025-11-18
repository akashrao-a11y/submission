import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import PlansPage from './pages/PlansPage';
import LoginPage from './pages/LoginPage';
// import AccountsPage from './pages/AccountsPage';
import TransactionsPage from './pages/TransactionsPage';
import ManageUsersPage from './pages/ManageUsersPage';
import ManageBanksPage from './pages/ManageBanksPage';
import NotFoundPage from './pages/NotFoundPage';
import BankDetailsPage from './pages/BankDetailsPage';
import DashboardPage from './pages/DashboardPage';

import ProtectedRoute from './components/common/ProtectedRoute.jsx';
import Navbar from './components/common/Navbar.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<AboutPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        {/* AccountsPage removed, use DashboardPage instead */}
        <Route path="/transactions" element={
          <ProtectedRoute>
            <TransactionsPage />
          </ProtectedRoute>
        } />
        <Route path="/manage-users" element={
          <ProtectedRoute role="Sysadmin">
            <ManageUsersPage />
          </ProtectedRoute>
        } />
        <Route path="/manage-banks" element={
          <ProtectedRoute role="Sysadmin">
            <ManageBanksPage />
          </ProtectedRoute>
        } />
        <Route path="/register/bank-details" element={<BankDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;

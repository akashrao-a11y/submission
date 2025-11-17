import React from 'react';
import '../AppTheme.css';

const Home = () => (
  <div className="page-container">
    <h2>Welcome to Banking Aggregator</h2>
    <p>
      <strong>Banking Aggregator</strong> is your one-stop solution to manage all your bank accounts, transactions, and financial activities in a single, secure platform.
    </p>
    <ul style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
      <li>View and manage accounts from multiple banks</li>
      <li>Track transactions and balances in real time</li>
      <li>Transfer funds and close accounts easily</li>
      <li>Advanced data grids for sorting, searching, and filtering</li>
      <li>Admin features for managing users, banks, and branches</li>
      <li>Modern, responsive UI for all devices</li>
    </ul>
    <p>
      Get started by registering or logging in. Enjoy seamless banking with <strong>Banking Aggregator</strong>!
    </p>
  </div>
);

export default Home;

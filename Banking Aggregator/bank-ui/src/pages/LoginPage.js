



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../services/apiConfig';


const LoginPage = () => {

  const navigate = useNavigate();
  const [accountNumber, setAccountNumber] = useState('');
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  // Registration fields
  const [userId, setUserId] = useState('');
  const [bankId, setBankId] = useState('');
  const [bankName, setBankName] = useState('');
  const [branch, setBranch] = useState('');
  const [state, setState] = useState('');
  const [accountType, setAccountType] = useState('Savings');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [createdAccountNumber, setCreatedAccountNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!accountNumber) {
      setError('Account number is required');
      return;
    }
    localStorage.setItem('accountNumber', accountNumber);
    navigate('/dashboard');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setRegisterSuccess('');
    setCreatedAccountNumber('');
    if (!userId || !bankId || !bankName || !branch || !state || !accountType) {
      setError('All fields are required');
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/accounts/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: parseInt(userId),
          bankId: parseInt(bankId),
          bankName,
          branch,
          state,
          accountType
        })
      });
      if (!response.ok) throw new Error('Failed to create account');
      const data = await response.json();
      setRegisterSuccess('Account created successfully!');
      setCreatedAccountNumber(data.AccountNumber || data.accountNumber || '');
    } catch (err) {
      setError(err.message || 'Failed to create account');
    }
  };

  return (
    <div className="auth-container">
      {!showRegister ? (
        <>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Account Number"
              value={accountNumber}
              onChange={e => setAccountNumber(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <button className="toggle-btn" onClick={() => setShowRegister(true)}>New user? Register here</button>
          {error && <div className="error-message">{error}</div>}
        </>
      ) : (
        <>
          <h1>Register Account</h1>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={e => setUserId(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Bank ID"
              value={bankId}
              onChange={e => setBankId(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Bank Name"
              value={bankName}
              onChange={e => setBankName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Branch"
              value={branch}
              onChange={e => setBranch(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={e => setState(e.target.value)}
              required
            />
            <select value={accountType} onChange={e => setAccountType(e.target.value)} required>
              <option value="Savings">Savings</option>
              <option value="Checking">Checking</option>
            </select>
            <button type="submit">Create Account</button>
          </form>
          <button className="toggle-btn" onClick={() => setShowRegister(false)}>Back to Login</button>
          {error && <div className="error-message">{error}</div>}
          {registerSuccess && (
            <div className="success-message">
              {registerSuccess}
              {createdAccountNumber && (
                <div style={{ marginTop: 8 }}>
                  <b>Your Account Number:</b> <span style={{ color: '#1976d2', fontWeight: 700 }}>{createdAccountNumber}</span>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LoginPage;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetForm } from '../formSlice';

function Child2() {
  const submitted = useSelector((state) => state.form.submitted);
  const dispatch = useDispatch();

  if (!submitted) {
    return (
      <div style={{ padding: '1rem', textAlign: 'center', color: '#666' }}>
        No data submitted yet
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '1rem', 
      border: '1px solid #2d2d44', 
      borderRadius: 6, 
      background: '#1a1a2e',
      color: '#e0e0e0'
    }}>
      <h3 style={{ color: '#00d4ff' }}>Submitted Data (Child Component)</h3>
      <div><strong>Username:</strong> {submitted.username}</div>
      <div><strong>Email:</strong> {submitted.email}</div>
      <div><strong>Password:</strong> {submitted.password}</div>
      <button 
        onClick={() => dispatch(resetForm())} 
        style={{ 
          marginTop: 10, 
          padding: '8px 16px', 
          cursor: 'pointer',
          background: '#00d4ff',
          color: '#0f0f23',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 600
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Child2;
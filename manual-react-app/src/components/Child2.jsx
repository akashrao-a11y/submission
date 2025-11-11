import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetForm } from '../formSlice';

function Child2() {
  const submitted = useSelector((state) => state.form.submitted);
  const dispatch = useDispatch();

  if (!submitted) {
    return (
      <div style={{ padding: '1rem', textAlign: 'center', color: '#999' }}>
        No data submitted yet
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: 6, background: '#fafafa' }}>
      <h3>Submitted Data (Child Component)</h3>
      <div><strong>Username:</strong> {submitted.username}</div>
      <div><strong>Email:</strong> {submitted.email}</div>
      <div><strong>Password:</strong> {submitted.password}</div>
      <button 
        onClick={() => dispatch(resetForm())} 
        style={{ marginTop: 10, padding: '8px 16px', cursor: 'pointer' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Child2;
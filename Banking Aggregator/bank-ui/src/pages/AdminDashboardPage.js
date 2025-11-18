
import React, { useEffect, useState } from 'react';
import { fetchBanks } from '../services/bankService';
import { fetchAccounts } from '../services/accountService';

// Define Bank type for TypeScript (or JSDoc for JS)
/**
 * @typedef {Object} Bank
 * @property {number} bankId
 * @property {string} bankName
 * @property {string} ifscCode
 * @property {Array<{ branchId: number, branchName: string, state: string }>} [branches]
 */

const AdminDashboardPage = () => {
  /** @type {[Bank[], Function]} */
  const [banks, setBanks] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const [banksData, accountsData] = await Promise.all([
          fetchBanks(token),
          fetchAccounts(token)
        ]);
        setBanks(banksData);
        setAccounts(accountsData);
      } catch (err) {
        setError('Failed to load data');
      }
      setLoading(false);
    };
    load();
  }, [token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="page-container" style={{ maxWidth: 1100, margin: '0 auto', padding: '2.5rem 1rem' }}>
      <h1>Sysadmin Dashboard</h1>
      {/* Debug output: show banks array length and preview */}
      <div style={{ background: '#f8f8f8', color: '#333', fontSize: 13, marginBottom: 16, padding: 8, borderRadius: 6 }}>
        Banks loaded: {banks.length}
        <pre style={{ maxHeight: 120, overflow: 'auto', margin: 0 }}>{JSON.stringify(banks, null, 2)}</pre>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'flex-start' }}>
        {banks.length === 0 ? (
          <div>No banks found.</div>
        ) : (
          banks.map(bank => (
            <div key={bank.bankId} style={{ minWidth: 260, maxWidth: 320, background: '#fff', borderRadius: 14, boxShadow: '0 2px 8px #0001', padding: '1.5rem 1.5rem', marginBottom: 18 }}>
              <h2 style={{ color: '#1976d2', fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>{bank.bankName}</h2>
              <div style={{ color: '#555', fontSize: '1rem', marginBottom: 6 }}><b>IFSC:</b> {bank.ifscCode}</div>
              {bank.branches && bank.branches.length > 0 && (
                <div style={{ color: '#333', fontSize: '0.98rem', marginBottom: 6 }}><b>Branches:</b> {bank.branches.length}</div>
              )}
              {/* Add more bank details here if needed */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;

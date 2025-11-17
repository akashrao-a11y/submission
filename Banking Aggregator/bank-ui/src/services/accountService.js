
import API_BASE_URL from './apiConfig';

// Create a new account
export async function createAccount(account, token) {
  const response = await fetch(`${API_BASE_URL}/accounts/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(account)
  });
  if (!response.ok) throw new Error('Failed to create account');
  return response.json();
}

export async function fetchAccounts(token) {
  console.log('fetchAccounts: token =', token);
  const url = `${API_BASE_URL}/accounts`;
  console.log('fetchAccounts: url =', url);
  const response = await fetch(url, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!response.ok) {
    console.error('fetchAccounts: response', response.status, response.statusText);
    throw new Error('Failed to fetch accounts');
  }
  return response.json();
}

export async function deposit(accountId, amount, token) {
  const response = await fetch(`${API_BASE_URL}/accounts/${accountId}/deposit?amount=${amount}`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!response.ok) throw new Error('Deposit failed');
  return response.json();
}

export async function withdraw(accountId, amount, token) {
  const response = await fetch(`${API_BASE_URL}/accounts/${accountId}/withdraw?amount=${amount}`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!response.ok) throw new Error('Withdraw failed');
  return response.json();
}

// Transfer funds between accounts
export async function transfer(fromAccountId, toAccountId, amount, token) {
  const response = await fetch(`${API_BASE_URL}/accounts/transfer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({ fromAccountId, toAccountId, amount })
  });
  if (!response.ok) throw new Error('Transfer failed');
  return response.json();
}

// Close account
export async function closeAccount(accountId, token) {
  const response = await fetch(`${API_BASE_URL}/accounts/${accountId}/close`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!response.ok) throw new Error('Close account failed');
  return response.json();
}

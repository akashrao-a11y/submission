import API_BASE_URL from './apiConfig';

export async function fetchBanks(token) {
  const response = await fetch(`${API_BASE_URL}/bank`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!response.ok) throw new Error('Failed to fetch banks');
  return response.json();
}

export async function addBank(bank, token) {
  const response = await fetch(`${API_BASE_URL}/bank`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify(bank)
  });
  if (!response.ok) throw new Error('Failed to add bank');
  return response.json();
}

export async function fetchBranches(bankId, token) {
  const response = await fetch(`${API_BASE_URL}/bank/${bankId}/branches`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!response.ok) throw new Error('Failed to fetch branches');
  return response.json();
}

export async function addBranch(bankId, branch, token) {
  const response = await fetch(`${API_BASE_URL}/bank/${bankId}/branches`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify(branch)
  });
  if (!response.ok) throw new Error('Failed to add branch');
  return response.json();
}

export const USERS_API = 'https://jsonplaceholder.typicode.com/users';
export async function fetchUsers() {
  const res = await fetch(USERS_API);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}


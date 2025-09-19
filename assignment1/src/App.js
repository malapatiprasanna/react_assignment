import React, { useEffect, useState } from 'react';
import { fetchUsers } from './services/api';
import UserCard from './components/UserCard';
import './components/LoadingSpinner.css';
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let mounted = true;
    fetchUsers()
      .then((data) => { if (!mounted) return; setUsers(data); setLoading(false); })
      .catch((err) => { if (!mounted) return; setError(err.message || 'Error'); setLoading(false); });
    return () => { mounted = false; };
  }, []);
  return (
    <div className="container py-4">
      <h2 className="mb-4">Users Directory (Assignment 1)</h2>
      {loading && (
        <div className="centered"><div><div className="sk-chase"><div className="sk-chase-dot" /></div><div className="mt-2">Loading users...</div></div></div>
      )}
      {error && (<div className="alert alert-danger">{error}</div>)}
      {!loading && !error && (<div>{users.map((u) => (<UserCard key={u.id} user={u} />))}</div>)}
    </div>
  );
}
export default App;


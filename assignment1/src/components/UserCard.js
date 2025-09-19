import React from 'react';
export default function UserCard({ user }) {
  const avatarUrl = `https://api.dicebear.com/6.x/avataaars/svg?seed=${encodeURIComponent(user.username)}&mood=happy`;

  return (
    <div className="card mb-3" style={{ maxWidth: 700 }}>
      <div className="row g-0 align-items-center">
        <div className="col-auto p-3">
          <img src={avatarUrl} alt={user.username} width={96} height={96} style={{ borderRadius: '8px' }} />
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text mb-1"><strong>Email:</strong> {user.email}</p>
            <p className="card-text mb-1"><strong>Phone:</strong> {user.phone}</p>
            <p className="card-text mb-1"><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}</p>
            <p className="card-text mb-1"><strong>Website:</strong> {user.website}</p>
            <p className="card-text mb-0"><strong>Company:</strong> {user.company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


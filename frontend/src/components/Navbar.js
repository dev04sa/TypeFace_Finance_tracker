import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="bg-white p-3 shadow">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link to="/" className="font-bold">Personal Finance</Link>
        </div>
        <div className="flex gap-3 items-center">
          {user ? (
            <>
              <span>{user.profile?.name || 'You'}</span>
              <button onClick={logout} className="px-3 py-1 border rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
              <Link to="/register" className="px-3 py-1 border rounded">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

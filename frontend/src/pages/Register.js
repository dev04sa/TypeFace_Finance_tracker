import React, { useState, useContext } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', form);
      login(res.data.token, res.data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <form onSubmit={onSubmit} className="space-y-3">
        <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Name" className="w-full p-2 border rounded" />
        <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="Password" className="w-full p-2 border rounded" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Register</button>
      </form>
    </div>
  );
}

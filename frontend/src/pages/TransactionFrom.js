import React, { useState } from 'react';
import api from '../api/api';

export default function TransactionForm({ onCreated }) {
  const [form, setForm] = useState({ type: 'expense', amount: '', category: '', description: '', date: '' });
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/transactions', { ...form, amount: parseFloat(form.amount) });
      setForm({ type: 'expense', amount: '', category: '', description: '', date: '' });
      onCreated && onCreated();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed');
    }
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-semibold mb-2">Add Transaction</h3>
      {error && <div className="text-red-600">{error}</div>}
      <form onSubmit={submit} className="space-y-2">
        <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="p-2 border rounded w-full">
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <input value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} placeholder="Amount" className="w-full p-2 border rounded" />
        <input value={form.category} onChange={e => setForm({...form, category: e.target.value})} placeholder="Category" className="w-full p-2 border rounded" />
        <input value={form.date} onChange={e => setForm({...form, date: e.target.value})} type="date" className="w-full p-2 border rounded" />
        <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} placeholder="Description" className="w-full p-2 border rounded" />
        <button className="px-4 py-2 bg-green-600 text-white rounded">Add</button>
      </form>
    </div>
  );
}

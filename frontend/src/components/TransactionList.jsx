import React from 'react';
import api from '../api/api';

export default function TransactionList({ transactions, onDeleted }) {
  const del = async (id) => {
    await api.delete('/transactions/' + id);
    onDeleted && onDeleted();
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Transactions</h3>
      {transactions.length === 0 && <div>No transactions</div>}
      <ul>
        {transactions.map(tx => (
          <li key={tx._id} className="flex justify-between border-b py-2">
            <div>
              <div className="font-medium">{tx.category} — {tx.type}</div>
              <div className="text-sm text-gray-600">{new Date(tx.date).toLocaleDateString()} • ₹{tx.amount}</div>
            </div>
            <div>
              <button onClick={() => del(tx._id)} className="text-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

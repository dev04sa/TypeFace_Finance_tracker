import React from 'react';

export default function ChartExpensesByCategory({ data = [] }) {
  if (!data || data.length === 0) return <div>No data for chart</div>;
  const max = Math.max(...data.map(d => d.total));
  return (
    <div className="p-4 bg-white rounded shadow">
      <h4 className="font-semibold mb-2">Expenses by Category</h4>
      <div>
        {data.map(item => (
          <div key={item.category} className="mb-2">
            <div className="flex justify-between text-sm">
              <div>{item.category}</div>
              <div>₹{item.total.toFixed(2)}</div>
            </div>
            <div className="h-3 bg-gray-200 rounded">
              <div style={{ width: `${(item.total / max) * 100}%` }} className="h-3 bg-blue-500 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

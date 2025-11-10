// src/app/components/TicketCard.jsx
'use client';

export default function TicketCard({ ticket, inQueue, onAdd, onRemove }) {
  const { title, priority, status, assignee, updatedAt } = ticket;

const labelStyles = {
base: 'inline-block px-2 py-0.5 rounded text-sm font-semibold',
priority: {
Low: 'bg-green-200 text-green-800',
Medium: 'bg-yellow-200 text-yellow-800',
High: 'bg-orange-200 text-orange-800',
Critical: 'bg-red-500 text-red-900',
},
status: {
'Open': 'bg-blue-200 text-blue-800',
'In Progress': 'bg-purple-200 text-purple-800',
'On Hold': 'bg-gray-300 text-gray-800',
'Resolved': 'bg-green-100 text-green-800',
},
};
const handleAddClick = () => {
    if (typeof onAdd === 'function') {
      onAdd();
    } else {
      console.warn('onAdd is not a function');
    }
  };

  const handleRemoveClick = () => {
    if (typeof onRemove === 'function') {
      onRemove();
    } else {
      console.warn('onRemove is not a function');
    }
  };
return (
<div className="border rounded p-4 shadow hover:shadow-lg transition">
    <h3 className="font-semibold mb-2">{title}</h3>
    <div className="flex space-x-2 mb-2">
    <span className={`${labelStyles.base} ${labelStyles.priority[priority]}`}>
Priority: {priority}
    </span>
    <span className={`${labelStyles.base} ${labelStyles.status[status]}`}>
Status: {status}
    </span>
    </div>
<p><strong>Assignee:</strong> {assignee}</p>
<p className="text-sm text-gray-600"><strong>Updated:</strong> {new Date(updatedAt).toLocaleString()}</p>
<div className="mt-3 flex space-x-2">
<button
disabled={inQueue}
onClick={handleAddClick}
className={`px-3 py-1 rounded ${inQueue ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
>
{inQueue ? 'In Queue' : 'Add to My Queue'}
</button>
<button
onClick={handleRemoveClick}
className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
>
Remove
</button>
</div>
</div>
  );
}
//src/app/components/MyQueueSummary.jsx
'use client'

export default function MyQueueSummary({ count, onClear }) {
return (
<div className="flex justify-between items-center mb-4 p-2 border rounded bg-gray-100">
<div>
<strong>{count}</strong> ticket(s) in your queue
</div>
<button
className="bg-red-500 text-white px-3 py-1 rounded disabled:opacity-50"
onClick={onClear}
disabled={count === 0}
>
Clear Queue
</button>
</div>
);
}
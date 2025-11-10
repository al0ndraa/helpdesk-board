// src/app/components/StatusFilter.jsx
import React from 'react';
export default function StatusFilter({ value, onChange }) {
  const options = ['Open', 'In Progress', 'Closed'];
return (
<select value={value} onChange={(e) => onChange(e.target.value)}>
{options.map((status) => (
<option key={status} value={status}>{status}</option>
))}
</select>
);
}
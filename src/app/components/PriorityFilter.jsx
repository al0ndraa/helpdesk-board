// src/app/components/PriorityFilter.jsx
import React from 'react';
export default function PriorityFilter({ value, onChange }) {
  const options = ['Low', 'Medium', 'High'];
  return (
<select value={value} onChange={(e) => onChange(e.target.value)}>
{options.map((priority) => (
<option key={priority} value={priority}>{priority}</option>
))}
</select>
);
}
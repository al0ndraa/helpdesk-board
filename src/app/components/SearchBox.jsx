// src/app/components/SearchBox.jsx
import React from 'react';
export default function SearchBox({ value, onChange }) {
return (
<input
type="text"
placeholder="Search..."
value={value}
onChange={(e) => onChange(e.target.value)}
/>
);
}
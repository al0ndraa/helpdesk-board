// src/app/components/Board.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';
import { priorityOrder, statusOrder } from '../lib/severity';
export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({});
  const fetchRef = useRef();
useEffect(() => {
fetchRef.current = true;
fetch('/api/tickets')
    .then(res => res.json())
    .then(data => {
    if (fetchRef.current) {
    setTickets(data);
    setLoading(false);
    }
    })
    .catch(() => {
    if (fetchRef.current) {
    setError('Unable to load tickets.');
    setLoading(false);
    }
    });
return () => {
fetchRef.current = false;
    };
  }, []);
useEffect(() => {
const interval = setInterval(() => {
    setTickets(prevTickets => {
    if (prevTickets.length === 0) return prevTickets;
    const index = Math.floor(Math.random() * prevTickets.length);
    const ticket = { ...prevTickets[index] };
    if (Math.random() < 0.5) {
    const statuses = Object.keys(statusOrder);
    const currentIdx = statuses.indexOf(ticket.status);
    const nextIdx = (currentIdx + 1) % statuses.length;
    ticket.status = statuses[nextIdx];
} else {
    const priorities = Object.keys(priorityOrder);
    const currentIdx = priorities.indexOf(ticket.priority);
    const nextIdx = (currentIdx + 1) % priorities.length;
    ticket.priority = priorities[nextIdx];
}
    ticket.updatedAt = new Date().toISOString();

    const newTickets = [...prevTickets];
    newTickets[index] = ticket;
    return newTickets;
    });
    }, Math.floor(6000 + Math.random() * 4000));
return () => clearInterval(interval);
  }, []);
const visibleTickets = tickets.filter(ticket => {
const statusMatch =
    filters.status === 'All' || ticket.status === filters.status;
const priorityMatch =
    filters.priority === 'All' || ticket.priority === filters.priority;
const searchLower = search.toLowerCase();
const titleMatch = ticket.title.toLowerCase().includes(searchLower);
const descMatch = ticket.description.toLowerCase().includes(searchLower);
return statusMatch && priorityMatch && (titleMatch || descMatch);
});
const handleAddToQueue = (ticketId) => {
setQueue(prev => ({ ...prev, [ticketId]: true }));
};
const handleRemoveFromQueue = (ticketId) => {
setQueue(prev => {
const newQ = { ...prev };
delete newQ[ticketId];
return newQ;
});
};
const handleClearQueue = () => {
setQueue({});
};
return (
<div className="space-y-4">
    <div className="flex space-x-4 mb-4">
    <StatusFilter
        value={filters.status}
        onChange={(val) => setFilters(prev => ({ ...prev, status: val }))}
    />
    <PriorityFilter
        value={filters.priority}
        onChange={(val) => setFilters(prev => ({ ...prev, priority: val }))}
    />
    <SearchBox
        value={search}
        onChange={(val) => setSearch(val)}
    />
    </div>
    <div className="flex justify-between items-center mb-4">
    <MyQueueSummary
        queue={queue}
        tickets={tickets}
        onRemove={handleRemoveFromQueue}
        onClear={handleClearQueue}
    />
    <StatusMessage
        loading={loading}
        error={error}
        filteredCount={visibleTickets.length}
    />
      </div>
    <TicketList
        tickets={visibleTickets}
        queue={queue}
        onAddToQueue={handleAddToQueue}
      />
    </div>
  );
}
// src/app/page.js
//stylg included here
import Board from './components/Board';
export default function HomePage() {
  return (
      <main className="mx-auto-max-w-6xlp-6">
        <h1 className="text-3xlf font-bold mb-4">Helpdesk Ticket Board</h1>
        <Board />
      </main>
  );
}
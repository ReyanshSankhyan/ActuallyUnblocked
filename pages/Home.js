import React, { useEffect, useState } from 'react';
import { html } from 'htm/react';
import { fetchGames } from '../services/gameData.js';
import GameCard from '../components/GameCard.js';
import { Loader2 } from 'lucide-react';

const Home = ({ searchQuery }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGames().then(data => {
      setGames(data);
      setLoading(false);
    });
  }, []);

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  if (loading) {
    return html`
      <div className="flex items-center justify-center h-full min-h-[50vh]">
        <${Loader2} className="w-8 h-8 text-arcade-accent animate-spin" />
      </div>
    `;
  }

  return html`
    <div className="p-6 md:p-8 max-w-7xl mx-auto w-full">
      ${filteredGames.length > 0 ? html`
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          ${filteredGames.map(game => html`<${GameCard} key=${game.id} game=${game} />`)}
        </div>
      ` : html`
        <div className="text-center py-20">
          <p className="text-slate-500 font-medium">No games found.</p>
        </div>
      `}
    </div>
  `;
};

export default Home;
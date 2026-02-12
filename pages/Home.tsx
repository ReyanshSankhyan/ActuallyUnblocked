import React, { useEffect, useState } from 'react';
import { Game, GameCategory } from '../types';
import { fetchGames } from '../services/gameData';
import GameCard from '../components/GameCard';
import { Loader2 } from 'lucide-react';

interface HomeProps {
  searchQuery: string;
  selectedCategory: GameCategory;
}

const Home: React.FC<HomeProps> = ({ searchQuery, selectedCategory }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data load
    fetchGames().then(data => {
      setGames(data);
      setLoading(false);
    });
  }, []);

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === GameCategory.ALL || game.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[50vh]">
        <Loader2 className="w-10 h-10 text-arcade-accent animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          {selectedCategory === GameCategory.ALL ? 'Popular Games' : `${selectedCategory} Games`}
        </h1>
        <p className="text-slate-400">
          {filteredGames.length} games available for you to play right now.
        </p>
      </div>

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-arcade-800/50 rounded-2xl border border-dashed border-arcade-700">
          <p className="text-xl text-slate-400 font-medium">No games found matching criteria.</p>
          <p className="text-slate-500 mt-2">Try adjusting your search or category filter.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
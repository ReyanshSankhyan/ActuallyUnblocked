import React from 'react';
import { Game } from '../types';
import { Play, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="group bg-arcade-800 rounded-xl overflow-hidden border border-arcade-700 hover:border-arcade-accent hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 cursor-pointer flex flex-col h-full"
      onClick={() => navigate(`/game/${game.id}`)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <div className="bg-arcade-accent rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Play fill="white" className="text-white ml-1" size={24} />
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
           <Star size={12} className="text-yellow-400" fill="#facc15" />
           <span className="text-xs font-bold text-white">{game.rating}</span>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-arcade-accent transition-colors line-clamp-1">
            {game.title}
          </h3>
        </div>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4 flex-grow">
          {game.description}
        </p>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-xs px-2 py-1 rounded bg-arcade-700 text-slate-300 border border-arcade-600">
            {game.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
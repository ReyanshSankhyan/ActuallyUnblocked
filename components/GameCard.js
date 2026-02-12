import React from 'react';
import { html } from 'htm/react';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  return html`
    <div 
      className="group relative bg-arcade-800 rounded-lg border border-arcade-700 hover:border-arcade-accent hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 cursor-pointer h-32 flex items-center justify-center p-4 overflow-hidden"
      onClick=${() => navigate(`/game/${game.id}`)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-arcade-800 to-arcade-900 group-hover:from-arcade-800 group-hover:to-arcade-700 transition-colors" />
      
      <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-arcade-accent/10" />

      <div className="relative z-10 text-center">
        <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors tracking-tight">
          ${game.title}
        </h3>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-8 left-1/2 transform -translate-x-1/2 pt-2">
            <${Play} size=${16} className="text-arcade-accent fill-arcade-accent" />
        </div>
      </div>
    </div>
  `;
};

export default GameCard;
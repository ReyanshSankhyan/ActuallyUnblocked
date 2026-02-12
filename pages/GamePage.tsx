import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Game } from '../types';
import { fetchGameById } from '../services/gameData';
import { ArrowLeft, Maximize2, Share2, ThumbsUp, AlertTriangle } from 'lucide-react';

const GamePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      fetchGameById(id).then(data => {
        setGame(data || null);
        setLoading(false);
      });
    }
  }, [id]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      iframeContainerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (loading) return <div className="p-8 text-center text-white">Loading game info...</div>;
  if (!game) return <div className="p-8 text-center text-white">Game not found</div>;

  return (
    <div className="flex flex-col h-full bg-arcade-900">
      {/* Game Header Controls */}
      <div className="px-4 py-3 bg-arcade-800 border-b border-arcade-700 flex items-center justify-between">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-300 hover:text-white hover:bg-arcade-700 px-3 py-1.5 rounded-lg transition-colors text-sm font-medium"
        >
          <ArrowLeft size={18} />
          Back to Arcade
        </button>
        <h1 className="text-lg font-bold text-white hidden md:block">{game.title}</h1>
        <div className="flex items-center gap-2">
             <button className="p-2 text-slate-400 hover:text-white hover:bg-arcade-700 rounded-lg transition-colors" title="Like">
                <ThumbsUp size={20} />
             </button>
             <button className="p-2 text-slate-400 hover:text-white hover:bg-arcade-700 rounded-lg transition-colors" title="Share">
                <Share2 size={20} />
             </button>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
        
        {/* Iframe Container */}
        <div className="flex-1 bg-black relative flex flex-col justify-center items-center p-4 md:p-6 overflow-y-auto">
          <div 
            ref={iframeContainerRef}
            className={`
              relative w-full max-w-5xl aspect-video bg-arcade-800 rounded-lg overflow-hidden shadow-2xl border border-arcade-700
              ${isFullscreen ? 'w-full h-full max-w-none rounded-none border-none' : ''}
            `}
          >
            <iframe
              src={game.url}
              title={game.title}
              className="w-full h-full border-0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-same-origin allow-scripts allow-forms allow-pointer-lock allow-popups"
            />
            
            {!isFullscreen && (
               <button 
                  onClick={toggleFullscreen}
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-arcade-accent text-white p-2 rounded-lg backdrop-blur-sm transition-colors z-10"
                  title="Fullscreen"
               >
                  <Maximize2 size={20} />
               </button>
            )}
          </div>
          
          {/* Game Description (Below Iframe on desktop) */}
          <div className="w-full max-w-5xl mt-6 space-y-4">
             <div className="flex items-center justify-between">
                <div>
                   <h2 className="text-2xl font-bold text-white">{game.title}</h2>
                   <p className="text-arcade-accent text-sm font-medium mt-1">{game.category}</p>
                </div>
                <div className="bg-arcade-800 px-4 py-2 rounded-lg border border-arcade-700">
                   <span className="text-yellow-400 font-bold mr-1">★</span>
                   <span className="text-white font-bold">{game.rating}</span>
                   <span className="text-slate-500 text-sm ml-1">/ 5.0</span>
                </div>
             </div>
             
             <div className="bg-arcade-800/50 p-4 rounded-xl border border-arcade-700/50">
                <p className="text-slate-300 leading-relaxed">{game.description}</p>
             </div>

             <div className="flex gap-2 items-start p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
                <AlertTriangle className="text-yellow-500 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-yellow-200/80">
                   If the game does not load, it might be blocked by your network administrator or the game server might be down. 
                </p>
             </div>
          </div>
        </div>

        {/* Sidebar for "Related" or Ads (Placeholder) */}
        <div className="hidden lg:block w-80 bg-arcade-900 border-l border-arcade-800 p-4 overflow-y-auto">
           <h3 className="text-slate-400 font-semibold mb-4 text-sm uppercase tracking-wider">Controls</h3>
           <div className="bg-arcade-800 rounded-lg p-4 mb-6 text-sm text-slate-300 space-y-2">
              <div className="flex justify-between border-b border-arcade-700 pb-2">
                 <span>Move</span>
                 <span className="font-mono bg-arcade-900 px-2 rounded text-xs py-1 border border-arcade-700">WASD / Arrows</span>
              </div>
              <div className="flex justify-between border-b border-arcade-700 pb-2 pt-2">
                 <span>Action</span>
                 <span className="font-mono bg-arcade-900 px-2 rounded text-xs py-1 border border-arcade-700">Space / Click</span>
              </div>
              <div className="flex justify-between pt-2">
                 <span>Pause</span>
                 <span className="font-mono bg-arcade-900 px-2 rounded text-xs py-1 border border-arcade-700">P / Esc</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
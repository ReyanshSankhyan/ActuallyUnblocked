import React, { useEffect, useState, useRef } from 'react';
import { html } from 'htm/react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchGameById } from '../services/gameData.js';
import { ArrowLeft, Maximize2 } from 'lucide-react';

const GamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeContainerRef = useRef(null);

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

  if (loading) return html`<div className="p-8 text-center text-slate-500">Loading...</div>`;
  if (!game) return html`<div className="p-8 text-center text-slate-500">Game not found</div>`;

  // Default permissions if none provided in data
  const defaultSandbox = "allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads";
  const defaultPermissions = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

  return html`
    <div className="flex flex-col h-full bg-arcade-900 min-h-screen">
      <div className="px-6 py-4 flex items-center gap-4">
        <button 
          onClick=${() => navigate('/')}
          className="text-slate-400 hover:text-white transition-colors"
        >
          <${ArrowLeft} size=${20} />
        </button>
        <h1 className="text-lg font-bold text-white tracking-wide">${game.title}</h1>
      </div>

      <div className="flex-1 flex flex-col items-center p-4 md:p-6">
        
        <div 
          ref=${iframeContainerRef}
          className=${`
            relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl
            ${isFullscreen ? 'w-full h-full max-w-none rounded-none' : 'aspect-video'}
          `}
        >
          <iframe
            src=${game.url}
            title=${game.title}
            className="w-full h-full border-0"
            allowFullScreen
            sandbox=${game.sandbox || defaultSandbox}
            allow=${game.permissions || defaultPermissions}
          />
          
          ${!isFullscreen ? html`
             <button 
                onClick=${toggleFullscreen}
                className="absolute bottom-4 right-4 bg-black/50 hover:bg-white/20 text-white p-2 rounded-md backdrop-blur-sm transition-colors z-10"
                title="Fullscreen"
             >
                <${Maximize2} size=${18} />
             </button>
          ` : null}
        </div>
        
      </div>
    </div>
  `;
};

export default GamePage;
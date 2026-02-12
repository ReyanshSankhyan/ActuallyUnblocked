import React from 'react';
import { html } from 'htm/react';
import { Search } from 'lucide-react';

const Navbar = ({ onSearch }) => {
  return html`
    <nav className="sticky top-0 z-30 bg-arcade-900/95 backdrop-blur-sm border-b border-arcade-700 h-16 px-4 md:px-6 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        <a href="#/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent hidden sm:block">
            Actually Unblocked
          </span>
        </a>
      </div>

      <div className="flex-1 max-w-xl mx-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <${Search} className="h-5 w-5 text-slate-500 group-focus-within:text-arcade-accent transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search games..."
            className="block w-full pl-10 pr-3 py-2 border border-arcade-700 rounded-full leading-5 bg-arcade-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:bg-arcade-900 focus:border-arcade-accent focus:ring-1 focus:ring-arcade-accent sm:text-sm transition-all shadow-inner"
            onInput=${(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
      </div>
    </nav>
  `;
};

export default Navbar;
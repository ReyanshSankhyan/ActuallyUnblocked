import React from 'react';
import { Gamepad2, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  onSearch: (query: string) => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className="sticky top-0 z-30 bg-arcade-900/95 backdrop-blur-sm border-b border-arcade-700 h-16 px-4 md:px-6 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-arcade-800 rounded-lg text-slate-300 md:hidden transition-colors"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <a href="#/" className="flex items-center gap-2 group">
          <div className="p-2 bg-arcade-accent rounded-lg group-hover:bg-arcade-hover transition-colors shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <Gamepad2 className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent hidden sm:block">
            ArcadeHub
          </span>
        </a>
      </div>

      <div className="flex-1 max-w-xl mx-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500 group-focus-within:text-arcade-accent transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search games..."
            className="block w-full pl-10 pr-3 py-2 border border-arcade-700 rounded-full leading-5 bg-arcade-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:bg-arcade-900 focus:border-arcade-accent focus:ring-1 focus:ring-arcade-accent sm:text-sm transition-all shadow-inner"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
         {/* Placeholder for user actions or additional links */}
         <div className="hidden md:flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-slate-400 font-medium">8 Games Online</span>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
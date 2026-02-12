import React from 'react';
import { GameCategory } from '../types';
import { 
  LayoutGrid, 
  Swords, 
  Puzzle, 
  Gamepad, 
  BrainCircuit, 
  FlagTriangleRight 
} from 'lucide-react';

interface SidebarProps {
  selectedCategory: GameCategory;
  onSelectCategory: (category: GameCategory) => void;
  isOpen: boolean;
  closeMobileSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  selectedCategory, 
  onSelectCategory, 
  isOpen,
  closeMobileSidebar
}) => {
  
  const getIcon = (category: GameCategory) => {
    switch (category) {
      case GameCategory.ALL: return <LayoutGrid size={20} />;
      case GameCategory.ACTION: return <Swords size={20} />;
      case GameCategory.PUZZLE: return <Puzzle size={20} />;
      case GameCategory.ARCADE: return <Gamepad size={20} />;
      case GameCategory.STRATEGY: return <BrainCircuit size={20} />;
      case GameCategory.RACING: return <FlagTriangleRight size={20} />;
      default: return <Gamepad size={20} />;
    }
  };

  const categories = Object.values(GameCategory);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
          onClick={closeMobileSidebar}
        />
      )}

      {/* Sidebar Content */}
      <aside 
        className={`
          fixed md:sticky top-16 left-0 z-20 h-[calc(100vh-4rem)] w-64 
          bg-arcade-900 border-r border-arcade-700 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          overflow-y-auto
        `}
      >
        <div className="p-4">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">
            Categories
          </h2>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onSelectCategory(category);
                  closeMobileSidebar();
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                  ${selectedCategory === category 
                    ? 'bg-arcade-accent text-white shadow-md shadow-indigo-500/20' 
                    : 'text-slate-400 hover:bg-arcade-800 hover:text-white'}
                `}
              >
                {getIcon(category)}
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-arcade-800">
             <div className="bg-arcade-800 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-2">Did you know?</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                   Playing puzzle games can improve cognitive function and short-term memory!
                </p>
             </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
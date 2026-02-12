import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-arcade-900 border-t border-arcade-700 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} ArcadeHub. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Made for gamers, by gamers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
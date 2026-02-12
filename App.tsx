import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import { GameCategory } from './types';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GameCategory>(GameCategory.ALL);
  const location = useLocation();

  // Check if we are on a game detail page to adjust layout if needed
  const isGamePage = location.pathname.startsWith('/game/');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex flex-col bg-arcade-900 font-sans text-slate-100">
      {!isGamePage && (
        <Navbar 
          onSearch={setSearchQuery} 
          toggleSidebar={toggleSidebar} 
          isSidebarOpen={isSidebarOpen}
        />
      )}
      
      <div className="flex flex-1 overflow-hidden">
        {/* Only show sidebar on Home page */}
        {!isGamePage && (
          <Sidebar 
            isOpen={isSidebarOpen} 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            closeMobileSidebar={() => setIsSidebarOpen(false)}
          />
        )}
        
        <main className={`flex-1 overflow-y-auto ${!isGamePage ? 'bg-arcade-900' : 'bg-black'} relative`}>
          <Routes>
            <Route path="/" element={
              <Home 
                searchQuery={searchQuery} 
                selectedCategory={selectedCategory} 
              />
            } />
            <Route path="/game/:id" element={<GamePage />} />
          </Routes>
          
          {!isGamePage && <Footer />}
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
};

export default App;
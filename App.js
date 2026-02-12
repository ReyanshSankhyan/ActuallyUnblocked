import React, { useState } from 'react';
import { html } from 'htm/react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import GamePage from './pages/GamePage.js';

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isGamePage = location.pathname.startsWith('/game/');

  return html`
    <div className="min-h-screen flex flex-col bg-arcade-900 font-sans text-slate-100">
      ${!isGamePage ? html`<${Navbar} onSearch=${setSearchQuery} />` : null}
      
      <main className="flex-1">
        <${Routes}>
          <${Route} path="/" element=${
            html`<${Home} searchQuery=${searchQuery} />`
          } />
          <${Route} path="/game/:id" element=${html`<${GamePage} />`} />
        <//>
      </main>
      
      ${!isGamePage ? html`<${Footer} />` : null}
    </div>
  `;
};

const App = () => {
  return html`
    <${HashRouter}>
      <${Layout} />
    <//>
  `;
};

export default App;
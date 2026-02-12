import React from 'react';
import { html } from 'htm/react';

const Footer = () => {
  return html`
    <footer className="bg-arcade-900 border-t border-arcade-700 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-600 text-xs">
          © ${new Date().getFullYear()} Actually Unblocked.
        </p>
      </div>
    </footer>
  `;
};

export default Footer;
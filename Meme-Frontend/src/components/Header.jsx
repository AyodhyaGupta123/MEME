import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-14 bg-[#15181C] border-b border-[#262930] flex items-center justify-between px-4 shrink-0 relative z-50">
      
      {/* Left: Logo and Desktop Nav */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Hamburger (Mobile Only) */}
        <button 
          className="md:hidden text-slate-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <div className="flex items-center gap-2 font-bold text-[#FCD535] tracking-wider text-sm sm:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
          </svg>
          <span className="hidden xs:inline">MEME COIN</span>
          <span className="xs:hidden">MEME</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="text-white border-b-2 border-[#FCD535] h-14 flex items-center">Markets</a>
          <a href="#" className="hover:text-white transition-colors h-14 flex items-center">Trade</a>
          <a href="#" className="hover:text-white transition-colors h-14 flex items-center">Derivatives</a>
        </nav>
      </div>

      {/* Right: Price, Status and Wallet */}
      <div className="flex items-center gap-2 sm:gap-4 font-mono text-sm">
        {/* Hide BTC price on very small screens */}
        <div className="hidden sm:flex gap-4 text-xs">
          <span>BTC <span className="text-[#0ECB81]">$67,450</span></span>
        </div>
        
        <div className="hidden sm:block h-6 w-px bg-[#262930]"></div>

        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-400">
          <div 
            className="w-[6px] h-[6px] bg-[#0ECB81] rounded-full animate-pulse shadow-[0_0_8px_#0ECB81]"
          ></div> 
          <span className="hidden xs:inline">Stable</span>
        </div>

        <button className="bg-[#FCD535] text-black px-3 sm:px-4 py-1.5 rounded text-[10px] sm:text-xs font-bold hover:opacity-90">
          Wallet
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#15181C] border-b border-[#262930] flex flex-col p-4 gap-4 md:hidden">
          <a href="#" className="text-white">Markets</a>
          <a href="#" className="text-slate-400">Trade</a>
          <a href="#" className="text-slate-400">Derivatives</a>
          <div className="h-px bg-[#262930] w-full"></div>
          <span className="text-xs text-slate-400">BTC Price: <span className="text-[#0ECB81]">$67,450</span></span>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pulse { animation: pulse 2s infinite; }
        @media (max-width: 400px) { .xs:hidden { display: none; } .xs:inline { display: inline; } }
      `}</style>
    </header>
  );
};

export default Header;
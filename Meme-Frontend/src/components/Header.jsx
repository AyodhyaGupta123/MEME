import React from 'react';

const Header = () => {
  return (
    <header className="h-12 bg-[#15181C] border-b border-[#262930] flex items-center justify-between px-4 shrink-0">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 font-bold text-[#FCD535] tracking-wider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
          </svg>
          MEME COIN
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="text-white border-b-2 border-[#FCD535] pb-3.5 mt-3.5">Markets</a>
          <a href="#" className="hover:text-white transition-colors">Trade</a>
          <a href="#" className="hover:text-white transition-colors">Derivatives</a>
        </div>
      </div>
      <div className="flex items-center gap-4 font-mono text-sm">
        <div className="flex gap-4 text-xs">
          <span>BTC <span className="text-[#0ECB81]">$67,450</span></span>
        </div>
        <div className="h-6 w-px bg-[#262930]"></div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <div 
            className="w-[6px] h-[6px] bg-[#0ECB81] rounded-full"
            style={{ 
              boxShadow: '0 0 8px #0ECB81',
              animation: 'blink 1s infinite'
            }}
          ></div> 
          Stable
        </div>
        <button className="bg-[#FCD535] text-black px-4 py-1.5 rounded text-xs font-bold hover:opacity-90">
          Wallet
        </button>
      </div>

      <style>{`
        @keyframes blink {
          50% { opacity: 0.4; }
        }
      `}</style>
    </header>
  );
};

export default Header;
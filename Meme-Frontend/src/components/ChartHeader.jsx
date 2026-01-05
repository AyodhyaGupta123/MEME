import React from 'react';

const ChartHeader = ({ currentPrice }) => {
  return (
    <div className="min-h-[56px] py-2 bg-[#0B0E11] border-b border-[#262930] flex flex-wrap items-center px-4 justify-between gap-y-2 shrink-0">
      
      {/* Left Section: Pair and Price */}
      <div className="flex items-center gap-3 sm:gap-4">
        <h1 className="text-base sm:text-lg font-bold flex items-center gap-2 whitespace-nowrap">
          BTC/USDT 
          <span className="text-[9px] sm:text-[10px] text-[#FCD535] px-1.5 rounded bg-[#FCD535]/10">
            PERP
          </span>
        </h1>
        
        {/* Price: Responsive Font Size */}
        <span className="text-lg sm:text-xl font-mono font-bold text-[#0ECB81]">
          {currentPrice.toFixed(2)}
        </span>
      </div>

      {/* Right Section: 24h Stats */}
      {/* Mobile pe ye wrap hokar neeche chala jayega aur space barabar lega */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-slate-400">
        
        <div className="flex flex-row sm:flex-col gap-2 sm:gap-0 border-r border-[#262930] sm:border-none pr-3 sm:pr-0">
          <span className="text-[9px] sm:text-[10px] uppercase text-slate-500">24h Change</span>
          <span className="text-[#0ECB81] font-semibold">+2.45%</span>
        </div>

        <div className="flex flex-row sm:flex-col gap-2 sm:gap-0 border-r border-[#262930] sm:border-none pr-3 sm:pr-0">
          <span className="text-[9px] sm:text-[10px] uppercase text-slate-500">24h High</span>
          <span className="text-white sm:text-slate-400">68,900.00</span>
        </div>

        <div className="flex flex-row sm:flex-col gap-2 sm:gap-0">
          <span className="text-[9px] sm:text-[10px] uppercase text-slate-500">24h Low</span>
          <span className="text-white sm:text-slate-400">66,100.00</span>
        </div>

      </div>
    </div>
  );
};

export default ChartHeader;
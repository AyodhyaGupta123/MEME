import React from 'react';

const ChartHeader = ({ currentPrice }) => {
  return (
    <div className="h-14 bg-[#0B0E11] border-b border-[#262930] flex items-center px-4 justify-between shrink-0">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-bold flex items-center gap-2">
          BTC/USDT 
          <span className="text-[10px] text-[#FCD535] px-1.5 rounded" style={{ backgroundColor: 'rgba(252, 213, 53, 0.1)' }}>
            PERP
          </span>
        </h1>
        <span className="text-xl font-mono font-bold text-[#0ECB81]">
          {currentPrice.toFixed(2)}
        </span>
      </div>
      <div className="flex gap-6 font-mono text-xs text-slate-400 max-[768px]:flex-col max-[768px]:gap-1 max-[768px]:text-[11px]">
        <div>
          <span className="block text-[10px]">24h Change</span>
          <span className="text-[#0ECB81]">+2.45%</span>
        </div>
        <div>
          <span className="block text-[10px]">24h High</span>
          68,900.00
        </div>
        <div>
          <span className="block text-[10px]">24h Low</span>
          66,100.00
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
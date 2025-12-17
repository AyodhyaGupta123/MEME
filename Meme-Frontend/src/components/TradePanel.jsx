import React from 'react';

const TradePanel = ({ onOpenModal, inputPrice, setInputPrice }) => {
  return (
    <div className="p-4 flex flex-col">
      <div className="flex bg-[#0B0E11] p-0.5 rounded mb-4 text-xs">
        <button className="flex-1 py-1.5 font-bold bg-[#15181C] rounded text-white shadow-sm">
          Limit
        </button>
        <button className="flex-1 py-1.5 font-medium text-slate-400 hover:text-white">
          Market
        </button>
      </div>
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between bg-[#0B0E11] border border-[#262930] rounded px-3 py-2">
          <span className="text-slate-400 text-xs">Price</span>
          <input 
            type="text" 
            value={inputPrice} 
            onChange={(e) => setInputPrice(e.target.value)}
            className="text-right bg-transparent w-28 font-mono text-sm text-white border-none outline-none focus:ring-0"
            style={{ 
              transition: 'border-color 0.2s'
            }}
          />
        </div>
        <div className="flex items-center justify-between bg-[#0B0E11] border border-[#262930] rounded px-3 py-2">
          <span className="text-slate-400 text-xs">Size (BTC)</span>
          <input 
            type="text" 
            placeholder="0.5" 
            className="text-right bg-transparent w-28 font-mono text-sm text-white border-none outline-none focus:ring-0 max-[480px]:p-4 max-[480px]:text-base"
          />
        </div>
        <div className="flex justify-between text-[10px] text-slate-400">
          <span>Avail: 4,520 USDT</span>
          <span className="flex items-center gap-1">
            Lev: <span className="text-white bg-[#262930] px-1 rounded">20x</span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-auto max-[480px]:grid-cols-1">
        <button 
          onClick={() => onOpenModal('buy')}
          className="py-3 bg-[#0ECB81] hover:opacity-90 text-black font-bold rounded text-sm transition-opacity max-[480px]:p-4 max-[480px]:text-[1.1rem]"
        >
          Buy / Long
        </button>
        <button 
          onClick={() => onOpenModal('sell')}
          className="py-3 bg-[#F6465D] hover:opacity-90 text-white font-bold rounded text-sm transition-opacity max-[480px]:p-4 max-[480px]:text-[1.1rem]"
        >
          Sell / Short
        </button>
      </div>
    </div>
  );
};

export default TradePanel;
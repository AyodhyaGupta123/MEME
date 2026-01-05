import React from 'react';

const TradePanel = ({ onOpenModal, inputPrice, setInputPrice }) => {
  return (
    <div className="p-4 flex flex-col bg-[#15181C] h-full">
      {/* Order Type Switcher (Limit/Market) */}
      <div className="flex bg-[#0B0E11] p-1 rounded-lg mb-5 text-[11px] sm:text-xs">
        <button className="flex-1 py-2 font-bold bg-[#262930] rounded-md text-[#FCD535] shadow-lg transition-all">
          Limit
        </button>
        <button className="flex-1 py-2 font-medium text-slate-500 hover:text-white transition-colors">
          Market
        </button>
      </div>

      {/* Inputs Section */}
      <div className="space-y-4 mb-6">
        {/* Price Input */}
        <div className="group flex flex-col gap-1.5">
          <label className="text-[10px] text-slate-500 uppercase font-bold px-1">Price (USDT)</label>
          <div className="flex items-center justify-between bg-[#0B0E11] border border-[#262930] group-focus-within:border-[#FCD535]/50 rounded-xl px-4 py-3 sm:py-2 transition-all">
            <input 
              type="number" 
              value={inputPrice} 
              onChange={(e) => setInputPrice(e.target.value)}
              className="bg-transparent w-full font-mono text-base sm:text-sm text-white border-none outline-none focus:ring-0"
              placeholder="0.00"
            />
            <span className="text-slate-600 text-[10px] font-bold">USDT</span>
          </div>
        </div>

        {/* Size Input */}
        <div className="group flex flex-col gap-1.5">
          <label className="text-[10px] text-slate-500 uppercase font-bold px-1">Size (BTC)</label>
          <div className="flex items-center justify-between bg-[#0B0E11] border border-[#262930] group-focus-within:border-[#FCD535]/50 rounded-xl px-4 py-3 sm:py-2 transition-all">
            <input 
              type="number" 
              placeholder="0.000" 
              className="bg-transparent w-full font-mono text-base sm:text-sm text-white border-none outline-none focus:ring-0"
            />
            <span className="text-slate-600 text-[10px] font-bold">BTC</span>
          </div>
        </div>

        {/* Account Info Labels */}
        <div className="flex justify-between items-center px-1">
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-500 uppercase">Available</span>
            <span className="text-xs text-white font-mono">4,520.25 USDT</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[9px] text-slate-500 uppercase">Leverage</span>
            <button className="text-[10px] text-white bg-[#262930] px-2 py-0.5 rounded-md hover:bg-[#32363e]">
              Cross 20x
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons: Responsive Grid */}
      <div className="grid grid-cols-2 gap-3 mt-auto md:mt-0">
        <button 
          onClick={() => onOpenModal('buy')}
          className="flex flex-col items-center justify-center py-3 bg-[#0ECB81] hover:brightness-110 active:scale-95 text-black rounded-xl transition-all"
        >
          <span className="text-sm font-black uppercase">Buy</span>
          <span className="text-[9px] font-bold opacity-70">Long</span>
        </button>
        
        <button 
          onClick={() => onOpenModal('sell')}
          className="flex flex-col items-center justify-center py-3 bg-[#F6465D] hover:brightness-110 active:scale-95 text-white rounded-xl transition-all"
        >
          <span className="text-sm font-black uppercase">Sell</span>
          <span className="text-[9px] font-bold opacity-70">Short</span>
        </button>
      </div>

      {/* Additional Mobile Helper (Optional) */}
      <p className="text-[9px] text-slate-600 text-center mt-4 hidden sm:block">
        Trading involves risk. Always check your liquidation price.
      </p>
    </div>
  );
};

export default TradePanel;
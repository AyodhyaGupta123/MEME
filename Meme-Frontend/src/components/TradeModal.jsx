import React from 'react';

const TradeModal = ({ isOpen, onClose, orderType, inputPrice }) => {
  if (!isOpen) return null;

  const isBuy = orderType === 'buy';

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        style={{ 
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.3s'
        }}
        onClick={onClose}
      ></div>
      <div 
        className="relative bg-[#15181C] border border-[#262930] p-6 rounded-xl w-full max-w-sm shadow-2xl max-[768px]:mx-4 max-[768px]:w-[calc(100%-2rem)]"
        style={{ 
          opacity: isOpen ? 1 : 0, 
          transform: isOpen ? 'scale(1)' : 'scale(0.95)', 
          transition: 'all 0.25s ease-out' 
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold">Confirm Order</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-white">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
        <div className="space-y-4 mb-8 font-mono text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Contract</span>
            <span className="font-bold">BTCUSDT PERP</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Type</span>
            <span>Limit Order</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Side</span>
            <span className={`font-bold ${isBuy ? 'text-[#0ECB81]' : 'text-[#F6465D]'}`}>
              {isBuy ? 'BUY / LONG' : 'SELL / SHORT'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Price</span>
            <span>{inputPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Amount</span>
            <span>0.500 BTC</span>
          </div>
          <div className="h-px bg-[#262930] my-4"></div>
          <div className="flex justify-between text-base font-bold">
            <span>Total Cost</span>
            <span>33,725.00 USDT</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={onClose}
            className="py-3 bg-[#0B0E11] border border-[#262930] rounded-lg font-bold text-sm text-slate-400 hover:text-white hover:border-white/20 transition-all"
          >
            Cancel
          </button>
          <button 
            className={`py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity ${
              isBuy ? 'bg-[#0ECB81] text-black' : 'bg-[#F6465D] text-white'
            }`}
          >
            {isBuy ? 'Confirm Buy' : 'Confirm Sell'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeModal;
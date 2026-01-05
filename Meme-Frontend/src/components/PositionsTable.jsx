import React from 'react';

const PositionsTable = () => {
  return (
    <div className="flex-1 min-h-[250px] md:h-64 bg-[#15181C] border-t border-[#262930] flex flex-col shrink-0 pb-16 md:pb-0">
      {/* Tab Headers */}
      <div className="flex border-b border-[#262930] text-[11px] sm:text-xs font-bold bg-[#15181C] sticky top-0 z-20">
        <button className="px-4 py-3 text-[#FCD535] border-b-2 border-[#FCD535] whitespace-nowrap">
          Positions (1)
        </button>
        <button className="px-4 py-3 text-slate-400 hover:text-white whitespace-nowrap">
          Open Orders (0)
        </button>
        <button className="px-4 py-3 text-slate-400 hover:text-white whitespace-nowrap">
          History
        </button>
      </div>

      <div className="flex-1 overflow-auto font-mono text-xs">
        {/* DESKTOP VIEW: Standard Table */}
        <table className="w-full text-left hidden md:table">
          <thead className="text-slate-500 sticky top-0 bg-[#15181C] z-10 shadow-sm">
            <tr>
              <th className="px-4 py-3 font-medium">Symbol</th>
              <th className="px-4 py-3 font-medium">Size</th>
              <th className="px-4 py-3 font-medium">Entry Price</th>
              <th className="px-4 py-3 font-medium">Mark Price</th>
              <th className="px-4 py-3 font-medium text-right">PNL (ROE%)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#262930]">
            <tr className="hover:bg-[#0B0E11] transition-colors">
              <td className="px-4 py-3">
                <div className="flex flex-col">
                  <span className="text-[#0ECB81] font-bold">BTCUSDT</span>
                  <span className="text-[10px] text-slate-500">Isolated 20x</span>
                </div>
              </td>
              <td className="px-4 py-3 text-white">0.500 BTC</td>
              <td className="px-4 py-3 text-slate-300">66,800.50</td>
              <td className="px-4 py-3 text-slate-300">67,450.00</td>
              <td className="px-4 py-3 text-[#0ECB81] font-bold text-right">+324.75 (+19.25%)</td>
            </tr>
          </tbody>
        </table>

        {/* MOBILE VIEW: Card Layout */}
        <div className="md:hidden p-3 space-y-3">
          <div className="bg-[#0B0E11] rounded-lg p-4 border border-[#262930] space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#0ECB81]/10 text-[#0ECB81] text-[10px] px-1.5 py-0.5 rounded font-bold">LONG</span>
                  <span className="font-bold text-white text-sm">BTCUSDT</span>
                  <span className="text-slate-500 text-[10px]">20x</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">Cross • Perp</p>
              </div>
              <div className="text-right">
                <p className="text-slate-500 text-[10px] uppercase">Unrealized PNL</p>
                <p className="text-[#0ECB81] font-bold text-sm">+324.75 USDT</p>
                <p className="text-[#0ECB81] text-[10px] font-bold">+19.25%</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#262930]">
              <div>
                <p className="text-slate-500 text-[10px] uppercase">Size (BTC)</p>
                <p className="text-white text-[11px]">0.500</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase text-right">Margin (USDT)</p>
                <p className="text-white text-[11px] text-right">1,670.00</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase">Entry Price</p>
                <p className="text-slate-300 text-[11px]">66,800.50</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase text-right">Mark Price</p>
                <p className="text-slate-300 text-[11px] text-right">67,450.00</p>
              </div>
            </div>
            
            <div className="flex gap-2 pt-2">
              <button className="flex-1 bg-[#262930] hover:bg-[#2f333b] py-2 rounded text-[11px] font-bold text-white transition-colors">
                Close Position
              </button>
              <button className="flex-1 bg-[#262930] hover:bg-[#2f333b] py-2 rounded text-[11px] font-bold text-white transition-colors">
                TP/SL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionsTable;
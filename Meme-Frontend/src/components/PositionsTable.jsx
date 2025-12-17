import React from 'react';

const PositionsTable = () => {
  return (
    <div className="h-64 bg-[#15181C] border-t border-[#262930] flex flex-col shrink-0">
      <div className="flex border-b border-[#262930] text-xs font-bold">
        <button className="px-4 py-2 text-[#FCD535] border-b-2 border-[#FCD535]">
          Positions (1)
        </button>
        <button className="px-4 py-2 text-slate-400 hover:text-white">
          Open Orders (0)
        </button>
      </div>
      <div className="flex-1 overflow-auto font-mono text-xs">
        <table className="w-full text-left">
          <thead className="text-slate-500 sticky top-0 bg-[#15181C]">
            <tr>
              <th className="px-4 py-2">Symbol</th>
              <th className="px-4 py-2">Size</th>
              <th className="px-4 py-2">Entry</th>
              <th className="px-4 py-2">Mark</th>
              <th className="px-4 py-2">PNL (ROE%)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[#0B0E11] transition-colors">
              <td className="px-4 py-2 text-[#0ECB81] font-bold">BTCUSDT LONG 20x</td>
              <td className="px-4 py-2">0.500 BTC</td>
              <td className="px-4 py-2">66,800.50</td>
              <td className="px-4 py-2">67,450.00</td>
              <td className="px-4 py-2 text-[#0ECB81]">+324.75 (+19.25%)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PositionsTable;
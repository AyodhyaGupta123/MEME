import React from 'react';

const OrderbookRow = ({ price, size, total, type }) => {
  const depth = Math.min((total / 5) * 100, 100);
  const bgColor = type === 'ask' ? 'rgba(246, 70, 93, 0.15)' : 'rgba(14, 203, 129, 0.15)';
  
  return (
    <div className="flex justify-between px-2 py-[2px] relative">
      <div 
        className="absolute inset-y-0 right-0 opacity-50" 
        style={{ 
          width: `${depth}%`,
          backgroundColor: bgColor
        }}
      ></div>
      <span className="relative z-10">{price.toFixed(1)}</span>
      <span className="text-white relative z-10">{size.toFixed(3)}</span>
      <span className="text-slate-400 relative z-10">{total.toFixed(3)}</span>
    </div>
  );
};

export default OrderbookRow;
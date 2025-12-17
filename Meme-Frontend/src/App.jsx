import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import ChartHeader from './components/ChartHeader';
import TradingViewChart from './components/TradingViewChart';
import PositionsTable from './components/PositionsTable';
import Orderbook from './components/Orderbook';
import TradePanel from './components/TradePanel';
import TradeModal from './components/TradeModal';

const App = () => {
  const [currentPrice, setCurrentPrice] = useState(67450);
  const [inputPrice, setInputPrice] = useState('67450.00');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderType, setOrderType] = useState('buy');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrice(prev => prev + (Math.random() - 0.5) * 6);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const handleOpenModal = (type) => {
    setOrderType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <style>{`
        body {
          background-color: #0B0E11;
          color: #EAECEF;
          height: 100vh;
          overflow: hidden;
          margin: 0;
          font-family: 'Inter', sans-serif;
        }
        
        ::-webkit-scrollbar { 
          width: 4px; 
          height: 4px; 
        }
        
        ::-webkit-scrollbar-thumb { 
          background: #262930; 
          border-radius: 2px; 
        }
        
        ::-webkit-scrollbar-track { 
          background: transparent; 
        }
      `}</style>

      <div className="antialiased flex flex-col h-screen">
        <TradeModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          orderType={orderType}
          inputPrice={inputPrice}
        />

        <Header />

        <div className="flex-1 flex overflow-hidden max-[1280px]:flex-col">
          <LeftSidebar />

          <div className="flex-1 flex flex-col min-w-0">
            <ChartHeader currentPrice={currentPrice} />
            <TradingViewChart />
            <PositionsTable />
          </div>

          <aside className="w-72 bg-[#15181C] border-l border-[#262930] flex flex-col shrink-0 max-[1280px]:w-full max-[1280px]:border-l-0 max-[1280px]:border-t max-[1280px]:border-t-[#262930]">
            <Orderbook currentPrice={currentPrice} />
            <TradePanel 
              onOpenModal={handleOpenModal}
              inputPrice={inputPrice}
              setInputPrice={setInputPrice}
            />
          </aside>
        </div>
      </div>
    </>
  );
};

export default App;
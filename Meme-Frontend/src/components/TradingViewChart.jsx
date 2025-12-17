import React, { useEffect, useRef } from 'react';

const TradingViewChart = () => {
  const containerRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = () => {
        setTimeout(() => {
          if (window.TradingView && containerRef.current) {
            scriptLoadedRef.current = true;
            new window.TradingView.widget({
              autosize: true,
              symbol: "BINANCE:BTCUSDT.P",
              interval: "15",
              timezone: "Etc/UTC",
              theme: "dark",
              style: "1",
              locale: "en",
              enable_publishing: false,
              backgroundColor: "#0B0E11",
              gridColor: "rgba(38, 41, 48, 0.3)",
              hide_top_toolbar: false,
              save_image: false,
              container_id: "tradingview_chart"
            });
          }
        }, 100);
      };
      document.head.appendChild(script);
    };

    loadScript();

    return () => {
    };
  }, []);

  return (
    <div 
      className="w-full h-screen bg-[#0B0E11] overflow-hidden"
    >
      <div className="tradingview-widget-container h-full w-full">
        <div id="tradingview_chart" ref={containerRef} style={{ height: '100%', width: '100%' }}></div>
      </div>
    </div>
  );
};

export default TradingViewChart;
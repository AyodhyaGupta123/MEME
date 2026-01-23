const config = {
  API_BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  WS_BINANCE_URL:
    import.meta.env.VITE_WS_BINANCE_URL ||
    "wss://stream.binance.com:9443/ws/btcusdt@trade",
  ENV: import.meta.env.VITE_ENV || "development",
};

export default config;

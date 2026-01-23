import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import config from "../config/config";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!email || !password) {
        setError("Email aur password zaroori hain");
        setLoading(false);
        return;
      }

      const response = await fetch(`${config.API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      // 1. Auth Token Save Karein
      localStorage.setItem("authToken", data.token);

      // 2. User Data (Real Name fallback to Email)
      // Agar backend se 'name' nahi aa raha, toh hum email se naam nikal lenge
      const displayName = data.user.name || data.user.email.split("@")[0];

      const userData = {
        name: displayName,
        email: data.user.email,
        balance: data.user.balance || 0,
      };

      localStorage.setItem("user_data", JSON.stringify(userData));

      setLoading(false);
      navigate("/coin");

      // Header ko refresh karne ke liye event
      window.dispatchEvent(new Event("storage"));
    } catch (err) {
      console.error("Login error:", err);
      setError("Server se connect nahi ho paya.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight">
          MEME <span className="text-indigo-600">TRADE</span>
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Apne account mein login karein
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl rounded-xl border border-gray-100">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="naam@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm bg-red-50 p-2 rounded border border-red-200">
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
            >
              {loading ? "Process ho raha hai..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Account nahi hai?{" "}
              <a
                href="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Register Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

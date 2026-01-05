import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Mock Registration Logic
    setTimeout(() => {
      const { username, email, password } = formData;

      if (!username || !email || !password) {
        setError("Sabhi fields bharna zaroori hai");
        setLoading(false);
        return;
      }

      if (password.length < 6) {
        setError("Password kam se kam 6 aksharo ka hona chahiye");
        setLoading(false);
        return;
      }

      const mockUser = {
        id: "user_" + Date.now(),
        username,
        email,
        balance: 100000,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem("token", "mock_jwt_token_" + Date.now());
      localStorage.setItem("user", JSON.stringify(mockUser));

      setLoading(false);
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight">
          MEME <span className="text-indigo-600">JOIN</span>
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Meme revolution ka hissa banein
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl rounded-xl border border-gray-100">
          <form className="space-y-5" onSubmit={handleRegister}>
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="cool_trader"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="naam@example.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm bg-red-50 p-2 rounded border border-red-200">
                ⚠️ {error}
              </div>
            )}

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
            >
              {loading ? "Account ban raha hai..." : "Create Account"}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Pehle se account hai?{" "}
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Login karein
              </a>
            </p>
          </div>
        </div>

        {/* Benefits Cards - Simple Version */}
        <div className="mt-6 grid grid-cols-3 gap-2">
          {[
            { label: "Bonus", val: "₹1L" },
            { label: "Fees", val: "0%" },
            { label: "Coins", val: "100+" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded-lg text-center">
              <p className="text-[10px] text-gray-500 uppercase">{item.label}</p>
              <p className="text-sm font-bold text-gray-800">{item.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;
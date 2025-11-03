import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ Used to redirect

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    setMessage("Account created successfully! Redirecting to login...");
    setTimeout(() => {
      navigate("/login"); // ✅ Go to Login page after signup
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-neutral-900 text-white">
      <div className="bg-neutral-900/90 backdrop-blur-lg border border-red-500/20 shadow-2xl rounded-2xl p-8 w-full max-w-md transform transition duration-300 hover:scale-[1.01] hover:shadow-red-500/30">
        <h2 className="text-center text-red-500 font-extrabold text-3xl mb-2 tracking-tight">
          Create Account 🎧
        </h2>
        <p className="text-center text-gray-400 text-sm mb-6">
          Join the community and explore your favorite tracks
        </p>

        {message && (
          <div className="bg-green-900/50 text-green-300 p-3 rounded-lg mb-4 text-sm font-medium text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-300 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-black transition duration-200"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-black transition duration-200"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-black transition duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold text-lg py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg hover:shadow-red-500/30"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-500 font-semibold hover:underline hover:text-red-400"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

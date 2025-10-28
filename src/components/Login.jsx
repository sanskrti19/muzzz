import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css"; // shared styles for login + signup

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // Add login API logic here later
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back 🎶</h2>
        <p className="auth-subtitle">Log in to continue your music journey</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="primary-btn full-width">
            Log In
          </button>
        </form>

        <p className="auth-footer">
  Don’t have an account?{" "}
  <Link to="/register" className="auth-link">
    Sign up
  </Link>
</p>

      </div>
    </div>
  );
};

export default Login;

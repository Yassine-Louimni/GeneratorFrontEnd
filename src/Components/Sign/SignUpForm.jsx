// src/components/SignUpForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Title from "../Title/Title";
import "./auth.css";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for error handling
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8090/auth/signup", {
        username,
        email,
        phoneNumber,
        password,
      });
      console.log(response.data);
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data || "Error occurred");
      setError(err.response?.data?.error || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <Title subtitle="Our Customer" title="Welcome To YAM" />
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2 className="title">Sign up</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <i className="fas fa-phone"></i>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Sign up" className="auth-button" />
        <p className="social-text">Or Sign up with social platforms</p>
        <div className="social-auth">
          <button type="button" className="social-button">
            <i className="fab fa-google"></i>
          </button>
          <button type="button" className="social-button">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;

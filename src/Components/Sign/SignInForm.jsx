import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./auth.css";
import Title from '../Title/Title';

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to redirect to the registration page
  const handleRegisterClick = () => {
    navigate("/register"); // Redirect to the register page
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8090/auth/signin", { email, password }) // Correct endpoint
      .then((result) => {
        console.log(result); // You can handle the response here
        navigate("/update"); // Redirect to home page after login
      })
      .catch((err) => {
        console.error("Error during login:", err); // Log errors for debugging
        alert("Login failed. Please check your credentials."); // Display user-friendly error message
      });
  };

  return (
    <>
     
      
<div className="container">
<Title subtitle="Our Customer" title="Welcome To YAM" />
      <div className="sign-up-form">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Login</h2>

          {/* Email field */}
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

          {/* Password field */}
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

          {/* Submit button */}
          <input type="submit" value="Login" className="auth-button" />

          {/* Link to register */}
          <p className="social-text">Don't have an account?</p>
        </form>

        {/* Register button */}
        <div className="register-button-container">
          <button
            className="register-button"
            onClick={handleRegisterClick} // Redirect to /register
          >
            Register
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default SignInForm;

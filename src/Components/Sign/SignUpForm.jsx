// src/components/SignUpForm.js
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./auth.css";

function SignUpForm() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit =(e) => {
    e.preventDefault()
    axios.post('http://localhost:8090/auth/signup',{ username, email, phoneNumber, password })
    .then(result => console.log(result))
    .catch(err => console.log(err))
    navigate('/login')
  }

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" name="username" placeholder="Username" 
        onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email"  name="email" placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="input-field">
        <i className="fas fa-phone"></i>
        <input type="phoneNumber"  name="phoneNumber" placeholder="phoneNumber" 
        onChange={(e) => setPhoneNumber(e.target.value)}/>
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" name="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" value="Sign up" className="auth-button" />
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-auth">
        <button className="social-button">
          <i className="fab fa-google"></i>
        </button>
        <button className="social-button">
          <i className="fab fa-github"></i>
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;

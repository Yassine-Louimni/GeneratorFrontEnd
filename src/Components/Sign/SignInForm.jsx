import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./auth.css";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Fonction pour rediriger l'utilisateur vers la page d'inscription
  const handleLoginClick = () => {
    navigate('/register'); // Redirige vers la page d'inscription
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8090/auth/signin", { email, password }) // Point de terminaison correct
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    navigate("/"); // Redirige vers la page d'accueil après connexion
  };

  return (
    <div  className="sign-up-form">
      <form onSubmit={handleSubmit}>
        <h2 className="title">Login</h2>
        
        {/* Champ email */}
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        {/* Champ mot de passe */}
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        {/* Bouton de soumission */}
        <input type="submit" value="Login" className="auth-button" />
        
        {/* Lien vers l'inscription */}
        <p className="social-text">Don't have an account?</p>
        
        {/* Bouton "Register" pour rediriger vers la page d'inscription */}
        
       
      </form>
      <div className="register-button-container">
      <button
        className="register-button"
        onClick={handleLoginClick}  // Redirection vers la page /register
      >
        Register
      </button>
      </div>
    </div>
  );
}

export default SignInForm;

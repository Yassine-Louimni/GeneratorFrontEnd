import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignInForm from './Components/Sign/SignInForm';
import SignUpForm from './Components/Sign/SignUpForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUpForm />} />
          <Route path="/login" element={<SignInForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

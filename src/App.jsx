import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignInForm from './Components/Sign/SignInForm';
import SignUpForm from './Components/Sign/SignUpForm';
import Template from './Components/Template/Template';
import Explore from './Components/Explore/Explore';
import UpdateTemplate from './Components/Template/UpdateTemplate';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUpForm />} />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/template" element={<Template />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/update" element={<UpdateTemplate />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

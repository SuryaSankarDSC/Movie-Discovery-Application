// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import HomePage from './Homepage';
import Navigation from './Navigation';
import Footer from './Footer';
import './MovieApp.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

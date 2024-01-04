// Slider.js

import React from 'react';
import './Slider.css';

const Slider = () => {
  return (
    <div id="main-container">
      <div className="menu">
        <ul className="menu-content">
          <li><a href="#"><span className="material-symbols-outlined">home</span><span>Home</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">dashboard</span><span>DashBoard</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">explore</span><span>Explore</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">analytics</span><span>Analytics</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">settings</span><span>Settings</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">person</span><span>Account</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">report</span><span>Report</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">email</span><span>Contact</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">logout</span><span>Logout</span></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Slider;

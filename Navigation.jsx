// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation-container">
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/" className="navigation-link">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/signup" className="navigation-link">
            <i className="fas fa-user-plus"></i> Signup
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/login" className="navigation-link">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/wishlist" className="navigation-link">
            <i className="fas fa-heart"></i> Wishlist
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

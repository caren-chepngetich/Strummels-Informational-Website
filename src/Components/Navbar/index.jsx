// Navbar.js
import React from 'react';
import './index.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Top dual-colored bar */}
      <div className="top-bar">
        <div className="black-section"></div>
        <div className="purple-section"></div>
      </div>
      
      {/* Navigation content */}
      <nav className="nav-content">
        {/* Logo */}
        <div className="logo">
          strummels
        </div>
        
        {/* Navigation links */}
        <div className="nav-links">
          <a href="#about">ABOUT US</a>
          <a href="#services">SERVICES</a>
          <a href="#contact">CONTACT</a>
          <a href="#news">NEWS AND UPDATES</a>
        </div>
        
        {/* Register button */}
        <button className="register-btn">
          Register
        </button>
      </nav>
    </div>
  );
};

export default Navbar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRegisterClick = () => {
    setIsModalOpen(true);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="navbar-container">
      {/* Top dual-colored bar */}
      {/* <div className="top-bar">
        <div className="black-section"></div>
        <div className="purple-section"></div>
      </div> */}
      
      {/* Navigation content */}
      <nav className="nav-content">
        {/* Logo */}
        <Link to="/" className="logo">
          strummels
        </Link>
        
        {/* Hamburger menu button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Navigation links */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <button 
            className="register-btn mobile-register"
            onClick={handleRegisterClick}
          >
            Register
          </button>
          <Link to="/about" onClick={toggleMenu}>ABOUT US</Link>
          <Link to="/services" onClick={toggleMenu}>SERVICES</Link>
          <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
          <Link to="/news" onClick={toggleMenu}>NEWS AND UPDATES</Link>
        </div>
        
        {/* Desktop Register button */}
        <button 
          className="register-btn desktop-register"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </nav>

      {/* Register Modal */}
      <RegisterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Navbar;
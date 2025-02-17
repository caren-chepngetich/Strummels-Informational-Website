// src/Components/Contact/index.js
import React, { useState } from 'react';
import './index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>CONNECT WITH STRUMMELS</h1>
        <h2>We're Here to Assist You</h2>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <div className="info-item">
            <strong>Phone:</strong>
            <p>(555) 123 - 4567</p>
          </div>
          <div className="info-item">
            <strong>Email:</strong>
            <p>info@strummels.com</p>
          </div>
          <div className="info-item">
            <strong>Address:</strong>
            <p>456 Dairy Lane, Denver, CO</p>
          </div>
          <div className="info-item">
            <strong>Hours:</strong>
            <p>Mon - Fri: 9:00am - 5:00pm</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
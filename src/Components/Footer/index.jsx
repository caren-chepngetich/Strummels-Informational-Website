import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info Column */}
        <div className="footer-column company-info">
          <h2 className="footer-logo">strummels</h2>
          <p className="company-description">
            At strummels, we support dairy farmers with essential
            services such as loans, delivery of dairy products,
            and real estate management. Join us as we empower
            the agricultural community.
          </p>
        </div>

        {/* Helpful Links Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Helpful Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/news">News and Updates</a></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Reach Us</h3>
          <ul className="footer-contact">
            <li>(555) 123 - 4567</li>
            <li>info@strummels.com</li>
            <li>456 Dairy Lane, Denver, CO</li>
            <li>Mon - Fri: 9:00am - 5:00pm</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
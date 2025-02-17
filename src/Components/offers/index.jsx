import React, { useState } from 'react';
import './index.css';
import dairyProducts from '../../assests/cheese.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-overlay">
        <div className="contact-header">
          <h2 className="contact-title">CONNECT WITH STRUMMELS</h2>
          <h3 className="contact-subtitle">We're Here to Assist You</h3>
          <p className="contact-description">
            Strummels is committed to serving dairy farmers with all the resources and support you need. 
            Whether it's securing a loan, ensuring timely delivery of your dairy products, or managing your real estate investments, 
            we are ready to help you thrive.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-image">
            <img src={dairyProducts} alt="Dairy products display" />
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                value={formData.fullName}
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
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
// src/Components/Services/index.js
import React from 'react';
import './index.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-hero">
        <h1>OUR SERVICES</h1>
        <h2>Comprehensive Solutions for Dairy Farmers</h2>
      </div>

      <div className="services-content">
        <section className="services-intro">
          <h2>UNVEILING OUR SERVICES</h2>
          <p>Discover How We Support You</p>
          <div className="intro-text">
            We empower dairy farmers through a suite of specialized services designed to enhance productivity and profitability. Our user-friendly registration process allows seamless access to tailored loan options crafted for your operational needs.
          </div>
        </section>

        <div className="services-grid">
          <div className="service-item">
            <h3>Flexible Loan Solutions</h3>
            <p>Advanced customized financial support tailored to the needs of dairy farmers, helping you grow your business sustainably.</p>
            <button className="learn-more">Learn More</button>
          </div>

          <div className="service-item">
            <h3>Reliable Delivery Services</h3>
            <p>Count on us for timely deliveries of your dairy products, ensuring freshness and customer satisfaction.</p>
            <button className="learn-more">Learn More</button>
          </div>

          <div className="service-item">
            <h3>Expert Real Estate Management</h3>
            <p>Let us manage your properties to maximize rental income while you concentrate on your dairy farming.</p>
            <button className="learn-more">Learn More</button>
          </div>

          <div className="service-item">
            <h3>Community Support and SACCOs</h3>
            <p>Join our SACCO initiatives that empower dairy farmers through collective growth and support.</p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
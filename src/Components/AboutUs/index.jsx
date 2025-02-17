// AboutUs.js
import React from 'react';
import Navbar from '../Navbar';
import './index.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* <Navbar /> */}
      
      <div className="hero-section">
        <h1>EMPOWERING DAIRY FARMERS</h1>
        <h2>Your Partner in Dairy and Real Estate</h2>
      </div>

      <div className="main-content">
        <section className="vision-section">
          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>To make dairy farming sustainable and profitable for all</p>
          </div>
          
          <div className="vision-card">
            <h3>Our Commitment</h3>
            <p>Providing farmers with essential tools for success in dairy</p>
          </div>
        </section>

        <section className="description-section">
          <h2>Your Partner in Dairy Farming and Real Estate Management</h2>
          <p>Strummels goes beyond just being a good link between groups of dairy farmers to bringing new value to them every day! We provide dairy business development solutions that can focus on what you do best - farm management - while we take care of your other business timely delivery services encompassing of fresh milk and other dairy farm reach sustainably efficiently alongside the estate management. Nobody helps farmers more than we do!</p>
        </section>

        <section className="services-grid">
          <div className="service-card">
            <h3>Flexible Loan Solutions</h3>
            <p>Advanced customized financial support tailored to the needs of dairy farmers, helping you grow your business sustainably.</p>
          </div>
          
          <div className="service-card">
            <h3>Reliable Delivery Services</h3>
            <p>Count on us for timely deliveries of your dairy products, ensuring freshness and customer satisfaction.</p>
          </div>
          
          <div className="service-card">
            <h3>Expert Real Estate Management</h3>
            <p>Let us manage your properties to maximize rental income while you concentrate on your dairy farming.</p>
          </div>
          
          <div className="service-card">
            <h3>Community Support and SACCOs</h3>
            <p>Join our SACCO initiatives that empower dairy farmers through collective growth and support.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
import React from 'react';
import './index.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1>EMPOWERING DAIRY FARMERS</h1>
        <h2>Your Partner in Dairy and Real Estate</h2>
      </div>

      <div className="main-content">
        {/* Vision & Commitment Section */}
        <section className="vision-section">
          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>To make dairy farming sustainable and profitable for all.</p>
          </div>
          <div className="vision-card">
            <h3>Our Commitment</h3>
            <p>Providing farmers with essential tools for success in dairy.</p>
          </div>
        </section>

        {/* Description Section */}
        <section className="description-section">
          <h2>Your Partner in Dairy Farming and Real Estate Management</h2>
          <p>
            Strummels goes beyond just being a good link between groups of dairy farmers 
            to bringing new value to them every day! We provide dairy business development 
            solutions so you can focus on what you do best – farm management – while we take 
            care of timely deliveries of fresh milk and other dairy products. Additionally, 
            we offer estate management services to support sustainable and efficient operations.
            Nobody helps farmers more than we do!
          </p>
        </section>

        {/* Services Section */}
        <section className="services-grid">
          <div className="service-card">
            <h3>Flexible Loan Solutions</h3>
            <p>Customized financial support tailored to dairy farmers' needs, helping grow businesses sustainably.</p>
          </div>
          <div className="service-card">
            <h3>Reliable Delivery Services</h3>
            <p>Timely delivery of dairy products, ensuring freshness and customer satisfaction.</p>
          </div>
          <div className="service-card">
            <h3>Expert Real Estate Management</h3>
            <p>Maximize rental income while focusing on dairy farming – we manage your properties for you.</p>
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

// 

import React from 'react';
import cow from '../../assests/cow.jpeg';
import './index.css';

const DairyLandingPage = () => {
  return (
    <div className="landing-container">
      {/* Background Image */}
      <div 
        className="background-image"
        style={{
          backgroundImage: `url(${cow})`
        }}
      />
      
      {/* Content Container */}
      <div className="content-container">
        {/* Purple Card */}
        <div className="card">
          <div className='card-2'>
          {/* Header */}
          <div className="header">
            <p className="subtitle">EMPOWERING DAIRY FARMERS</p>
            <h1 className="title">
              Your Partner in Dairy<br />and Real Estate
            </h1>
          </div>

          {/* Main Content */}
          <div className="main-content">
            <p>
              Strummels is dedicated to supporting dairy farmers with tailored services 
              designed to enhance their livelihoods. From seamless registration for our 
              comprehensive offerings to reliable loans, we ensure you have the resources 
              to thrive. Additionally, our effecient delivery services guarantee fresh 
              dairy products reach your customers, while our expertise in real estate 
              manages your properties, maximizing rental income. Explore a world of 
              opportunities with Strummels today.
            </p>
          </div>

          {/* CTA Button */}
          <button className="cta-button">
            JOIN US TODAY
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DairyLandingPage;
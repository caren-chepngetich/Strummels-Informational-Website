import React from 'react';
import './index.css';
import dairyCows from '../../assests/dairy-cows.png';

const DairyLanding = () => {
  return (
    <div className="dairy-landing">
      {/* Hero Section */}
      
      <div className="hero-set">
        <div className='car'>
      <div className="dairy-image">
          <img src={dairyCows} alt="Dairy farm operations" />
        </div>
        <div className='cars'>
          <h3>Empowering Dairy Farms</h3>
        </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="supporting-text">SUPPORTING YOUR DAIRY JOURNEY</h2>
            <h1 className="hero-title">
              Empowering Farmers<br />in Dairy and Real Estate
            </h1>
            <p className="hero-description">
              Strummels is your dedicated partner in enhancing the success of dairy farmers. 
              Our streamlined registration opens the door to a range of essential services, 
              including tailored loans designed to meet your unique financial needs. We ensure 
              your dairy products reach customers promptly through our dependable delivery system. 
              Moreover, our expertise in real estate management allows you to maximize rental yields 
              on your properties while simplifying your operations. Join Strummels today and unlock 
              your full potential in the dairy industry.
            </p>
          </div>

          {/* Vision and Commitment Section */}
          <div className="vision-commitment">
            <div className="commitment">
              <div className="circle-icon"></div>
              <h3>Our Commitment</h3>
              <p>Providing farmers with essential tools for success in dairy</p>
            </div>
            <div className="vision">
              <div className="circle-icon"></div>
              <h3>Our Vision</h3>
              <p>To make dairy farming sustainable and profitable for all</p>
            </div>
          </div>

          <button className="join-button">JOIN US TODAY</button>
        </div>

        {/* <div className="dairy-image">
          <img src={dairyCows} alt="Dairy farm operations" />
        </div> */}
      </div>
    </div>
  );
};

export default DairyLanding;
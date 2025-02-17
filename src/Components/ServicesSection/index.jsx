import React from 'react';

const ServicesSection = () => {
  const sectionStyle = {
    backgroundColor: '#EDDBED',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const titleStyle = {
    color: '#521462',
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const lineStyle = {
    borderBottom: '4px solid #521462',
    width: '50%',
    margin: '0 auto 20px auto', // Centers the line and adds space below
  };

  const paragraphStyle = {
    fontSize: '1.1em',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>UNVEILING OUR SERVICES</h2>
      <div style={lineStyle}></div>
      <p style={paragraphStyle}>
        Discover How We Support You
      </p>
      <p style={paragraphStyle}>
        We empower dairy farmers through a suite of specialized services designed to enhance productivity and profitability. Our user-friendly registration process allows seamless access to tailored loan options crafted for your operational needs. Experience dependable delivery of fresh dairy products, skillfully managed by our team, while we oversee your real estate investments to maximize rental income. Join us in cultivating a prosperous dairy community.
      </p>
    </div>
  );
};

export default ServicesSection;
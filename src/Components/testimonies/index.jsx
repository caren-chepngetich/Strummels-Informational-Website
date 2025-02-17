import React from 'react';
// import cow from '../../assests/cow.jpeg';
import './index.css';

const Testimony = () => {
  const testimonials = [
    {
      name: "Anna K.",
      role: "Dairy Farmer",
      text: "Strummels provided me with the financial support I needed right when I needed it. Their timely loans and assistance have truly empowered my farming operations.",
      rating: 5
    },
    {
      name: "David M.",
      role: "Dairy Producer",
      text: "The delivery service is outstanding! Fresh milk arrives at my doorstep, and I can focus on raising my herd without worrying about logistics.",
      rating: 5
    },
    {
      name: "Catherine L.",
      role: "Real Estate Investor",
      text: "Thanks to Strummels' real estate management, I can maximize my rental income without the hassle. They handle everything so I can focus on my dairy farm.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating);
  };

  return (
    <div className="dairy-container">
      {/* Previous hero and services sections remain the same */}
      
      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2 className="testimonials-subtitle">WHAT OUR CLIENTS ARE SAYING</h2>
          <h1 className="testimonials-title">Hear from Our Valued Dairy Farmers</h1>
          <p className="testimonials-description">
            Strummels has transformed the way farmers operate, providing essential services that 
            enhance their productivity and success. Our clients share their experiences and the 
            impact we've made on their dairy farming journeys.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-avatar"></div>
              <div className="testimonial-stars">{renderStars(testimonial.rating)}</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimony;
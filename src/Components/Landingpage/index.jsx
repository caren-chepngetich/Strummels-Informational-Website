// // 

// import React from 'react';
// import cow from '../../assests/cow.jpeg';
// import './index.css';

// const DairyLandingPage = () => {
//   return (
//     <div className="landing-container">
//       {/* Background Image */}
//       <div 
//         className="background-image"
//         style={{
//           backgroundImage: `url(${cow})`
//         }}
//       />
      
//       {/* Content Container */}
//       <div className="content-container">
//         {/* Purple Card */}
//         <div className="card">
//           <div className='card-2'>
//           {/* Header */}
//           <div className="header">
//             <p className="subtitle">EMPOWERING DAIRY FARMERS</p>
//             <h1 className="title">
//               Your Partner in Dairy<br />and Real Estate
//             </h1>
//           </div>

//           {/* Main Content */}
//           <div className="main-content">
//             <p>
//               Strummels is dedicated to supporting dairy farmers with tailored services 
//               designed to enhance their livelihoods. From seamless registration for our 
//               comprehensive offerings to reliable loans, we ensure you have the resources 
//               to thrive. Additionally, our effecient delivery services guarantee fresh 
//               dairy products reach your customers, while our expertise in real estate 
//               manages your properties, maximizing rental income. Explore a world of 
//               opportunities with Strummels today.
//             </p>
//           </div>

//           {/* CTA Button */}
//           <button className="cta-button">
//             JOIN US TODAY
//           </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DairyLandingPage;


// DairyLandingPage.js
import React, { useState } from 'react';
import cow from '../../assests/cow.jpeg';
import './index.css';

const JoinModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    farmName: '',
    email: '',
    phone: '',
    location: '',
    herdSize: '',
    farmType: '',
    experience: '',
    interests: [],
    comments: ''
  });

  const interestOptions = [
    'Dairy Production',
    'Real Estate Management',
    'Loan Services',
    'Delivery Services',
    'Property Investment'
  ];
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedInterests = checked 
        ? [...formData.interests, value]
        : formData.interests.filter(interest => interest !== value);
      
      setFormData(prev => ({
        ...prev,
        interests: updatedInterests
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Join form submitted:', formData);
    // Show success message
    alert('Thank you for joining! We will contact you soon.');
    // Reset form
    setFormData({
      fullName: '',
      farmName: '',
      email: '',
      phone: '',
      location: '',
      herdSize: '',
      farmType: '',
      experience: '',
      interests: [],
      comments: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Join Strummels Today</h2>
        <p className="modal-subtitle">Begin your journey to enhanced dairy farming</p>
        
        <form onSubmit={handleSubmit} className="join-form">
          <div className="form-section">
            <h3>Personal Information</h3>
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="e.g., +254 712 345 678"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Farm Details</h3>
            <div className="form-group">
              <label htmlFor="farmName">Farm Name *</label>
              <input
                type="text"
                id="farmName"
                name="farmName"
                value={formData.farmName}
                onChange={handleChange}
                required
                placeholder="Enter your farm's name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Farm Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="County, Sub-county"
              />
            </div>

            <div className="form-group">
              <label htmlFor="farmType">Type of Farm</label>
              <select
                id="farmType"
                name="farmType"
                value={formData.farmType}
                onChange={handleChange}
              >
                <option value="">Select farm type</option>
                <option value="dairy">Dairy Farm</option>
                <option value="mixed">Mixed Farming</option>
                <option value="commercial">Commercial Dairy</option>
                <option value="smallholder">Smallholder Farm</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="herdSize">Herd Size</label>
              <input
                type="number"
                id="herdSize"
                name="herdSize"
                value={formData.herdSize}
                onChange={handleChange}
                placeholder="Number of cattle"
                min="0"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Additional Information</h3>
            <div className="form-group">
              <label>Services of Interest</label>
              <div className="checkbox-group">
                {interestOptions.map(option => (
                  <label key={option} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="interests"
                      value={option}
                      checked={formData.interests.includes(option)}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="comments">Additional Comments</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Tell us more about your farm and specific needs..."
                rows="3"
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

const DairyLandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="landing-container">
      <div 
        className="background-image"
        style={{
          backgroundImage: `url(${cow})`
        }}
      />
      
      <div className="content-container">
        <div className="card">
          <div className='card-2'>
            <div className="header">
              <p className="subtitle">EMPOWERING DAIRY FARMERS</p>
              <h1 className="title">
                Your Partner in Dairy<br />and Real Estate
              </h1>
            </div>

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

            <button 
              className="cta-button"
              onClick={() => setIsModalOpen(true)}
            >
              JOIN US TODAY
            </button>
          </div>
        </div>
      </div>

      <JoinModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default DairyLandingPage;
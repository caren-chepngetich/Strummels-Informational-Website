// import React from 'react';
// // import cow from '../../assests/cow.jpeg';
// import './index.css';

// const DairyServices = () => {
//   const services = [
//     {
//       title: "Flexible Loan Solutions",
//       description: "Advanced customized financial support tailored to the needs of dairy farmers, helping you grow your business sustainably.",
//       isPurple: false,
//     },
//     {
//       title: "Reliable Delivery Services",
//       description: "Count on us for timely deliveries of your dairy products, ensuring freshness and customer satisfaction.",
//       isPurple: true,
//     },
//     {
//       title: "Expert Real Estate Management",
//       description: "Let us manage your properties to maximize rental income while you concentrate on your dairy farming.",
//       isPurple: false,
//     },
//     {
//       title: "Community Support and SACCOs",
//       description: "Join our SACCO initiatives that empower dairy farmers through collective growth and support.",
//       isPurple: false,
//     },
//     {
//       title: "Sustainable Practices",
//       description: "We promote eco-friendly farming practices that not only boost revenues but also contribute to a healthier planet.",
//       isPurple: true,
//     },
//     {
//       title: "Growth Opportunities",
//       description: "Explore growth avenues with Strummels, from financial aid to market access, tailored to your dairy farming needs.",
//       isPurple: false,
//     }
//   ];

//   return (
//     <div className="dairy-container">
//       <div className="hero-section">
//         <h1 className="hero-title">Your Partner in Dairy Farming and Real Estate Management</h1>
//         <p className="hero-text">
//           Strummels goes beyond just being a good link between groups of dairy farmers to bringing new value to them every day! We provide dairy business development solutions that can focus on what you do best - farm management - while we take care of your other business timely delivery services encompassing of fresh milk and other dairy farm reach sustainably efficiently alongside the estate management. Nobody help farmers more than we do!
//         </p>
//       </div>
      
//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`service-card ${service.isPurple ? 'purple-card' : 'gray-card'}`}
//           >
//             <h3 className="card-title">{service.title}</h3>
//             <p className="card-description">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DairyServices;



import React from 'react';
import './index.css';

const DairyServices = () => {
  const services = [
    {
      title: "Flexible Loan Solutions",
      description: "Advanced customized financial support tailored to the needs of dairy farmers, helping you grow your business sustainably.",
      isPurple: false,
    },
    {
      title: "Reliable Delivery Services",
      description: "Count on us for timely deliveries of your dairy products, ensuring freshness and customer satisfaction.",
      isPurple: true,
    },
    {
      title: "Expert Real Estate Management",
      description: "Let us manage your properties to maximize rental income while you concentrate on your dairy farming.",
      isPurple: false,
    },
    {
      title: "Community Support and SACCOs",
      description: "Join our SACCO initiatives that empower dairy farmers through collective growth and support.",
      isPurple: false,
    },
    {
      title: "Sustainable Practices",
      description: "We promote eco-friendly farming practices that not only boost revenues but also contribute to a healthier planet.",
      isPurple: true,
    },
    {
      title: "Growth Opportunities",
      description: "Explore growth avenues with Strummels, from financial aid to market access, tailored to your dairy farming needs.",
      isPurple: false,
    }
  ];

  return (
    <div className="dairy-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Your Partner in Dairy Farming and Real Estate Management</h1>
          <p className="hero-text">
            Strummels goes beyond just being a good link between groups of dairy farmers to bringing new value to them every day! We provide dairy business development solutions that can focus on what you do best - farm management - while we take care of your other business timely delivery services encompassing of fresh milk and other dairy farm reach sustainably efficiently alongside the estate management. Nobody help farmers more than we do!
          </p>
        </div>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${service.isPurple ? 'purple-card' : 'gray-card'}`}
          >
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DairyServices;
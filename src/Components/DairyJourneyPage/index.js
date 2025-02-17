
import React from 'react';

const DairyJourneyPage = () => {
  const services = [
    {
      title: "Flexible Loan Solutions",
      description: "Access customized financial support tailored to the needs of dairy farmers, helping you grow your business sustainably."
    },
    {
      title: "Reliable Delivery Services",
      description: "Count on us for timely deliveries of your dairy products, ensuring freshness and customer satisfaction."
    },
    {
      title: "Expert Real Estate Management",
      description: "Let us manage your properties to maximize rental income while you concentrate on your dairy farming."
    },
    {
      title: "Community Support and SACCOs",
      description: "Join our SACCO initiatives that empower dairy farmers through collective growth and support."
    },
    {
      title: "Sustainable Practices",
      description: "We promote eco-friendly farming practices that not only benefit farmers but also contribute to a healthier planet."
    },
    {
      title: "Growth Opportunities",
      description: "Explore various growth avenues with Strummels, from financial aid to market access, tailored to your dairy farming needs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Dairy farm background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/4 left-1/4 bg-white p-8 max-w-xl border-4 border-purple-800 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">SUPPORTING YOUR DAIRY JOURNEY</h1>
          <h2 className="text-2xl mb-4">Empowering Farmers in Dairy and Real Estate</h2>
          <p className="text-gray-700 mb-6">
            Strummels is your dedicated partner in enhancing the success of dairy farmers. 
            Our streamlined registration process opens the door to a range of essential services, 
            including tailored loans designed to meet your unique financial needs.
          </p>
          <button className="bg-purple-800 text-white px-6 py-2 rounded hover:bg-purple-900">
            JOIN US TODAY
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Dairy facility" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-purple-800 text-white p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Empowering Your Dairy Journey</h2>
              <button className="bg-white text-purple-800 px-6 py-2 rounded mt-4 self-start">
                JOIN US TODAY
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded">
              <h3 className="text-lg font-bold mb-2">Our Commitment</h3>
              <p>Providing farmers with essential tools for success in dairy.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded">
              <h3 className="text-lg font-bold mb-2">Our Vision</h3>
              <p>To make dairy farming sustainable and profitable for all.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Your Partner in Dairy Farming and Real Estate Management</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Strummels is committed to enhancing the livelihoods of dairy farmers through an array of tailored services.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`p-6 rounded ${
                  index % 2 === 1 ? 'bg-purple-800 text-white' : 'bg-gray-100'
                }`}
              >
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className={index % 2 === 1 ? 'text-gray-100' : 'text-gray-600'}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DairyJourneyPage;

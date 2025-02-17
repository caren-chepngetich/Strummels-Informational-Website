import React from 'react';
import cow from '../../assests/cow.jpeg';

const HeroSection = () => {
  return (
    <div 
      className="relative h-[600px] w-full"
      style={{
        backgroundImage: `url(${cow})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Nunito, sans-serif'
      }}
    >
      {/* Content container */}
      <div className="absolute left-20 top-1/2 -translate-y-1/2 w-[500px] z-10">
        <div className="bg-[#521462] p-8 rounded-lg">
          <div className="space-y-6">
            <div>
              <p className="text-white text-sm uppercase tracking-wider mb-2">
                EMPOWERING DAIRY FARMERS
              </p>
              <h1 className="text-white text-3xl font-bold">
                Your Partner in Dairy
                <br />
                and Real Estate
              </h1>
              <div className="w-32 h-0.5 bg-white mt-3"/>
            </div>
            
            <p className="text-white text-sm leading-relaxed">
              Strummels is dedicated to supporting dairy farmers with tailored services 
              designed to enhance their livelihoods. From seamless registration for our 
              comprehensive offerings to reliable loans, we ensure you have the resources 
              to thrive. Additionally, our efficient delivery services guarantee fresh 
              dairy products reach your customers, while our expertise in real estate 
              manages your properties, maximizing rental income. Explore a world of 
              opportunities with Strummels today.
            </p>
            
            <button className="bg-white text-[#521462] px-6 py-2 text-sm font-semibold 
              rounded hover:bg-opacity-90 transition-colors duration-200">
              JOIN US TODAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;




// import React from 'react';
// import cow from '../../assests/cow.jpeg';


// const HeroSection = () => {
//   return (
//     <div className="relative min-h-screen">
//       {/* Background image container */}
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: {cow}, // Replace with actual cow image
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       />
      
//       {/* Content container */}
//       <div className="relative z-10 container mx-auto px-4 py-20">
//         <div className="max-w-2xl bg-[#521462] p-8 rounded-lg">
//           <div className="space-y-6">
//             <div>
//               <p className="text-white text-sm uppercase tracking-wider">
//                 EMPOWERING DAIRY FARMERS
//               </p>
//               <h1 className="text-white text-4xl font-bold mt-2">
//                 Your Partner in Dairy<br />and Real Estate
//               </h1>
//               <div className="w-32 h-1 bg-white mt-4"/>
//             </div>
            
//             <p className="text-white leading-relaxed">
//               Strummels is dedicated to supporting dairy farmers with tailored services 
//               designed to enhance their livelihoods. From seamless registration for our 
//               comprehensive offerings to reliable loans, we ensure you have the resources 
//               to thrive. Additionally, our efficient delivery services guarantee fresh 
//               dairy products reach your customers, while our expertise in real estate 
//               manages your properties, maximizing rental income. Explore a world of 
//               opportunities with Strummels today.
//             </p>
            
//             <button className="bg-white text-[#521462] px-6 py-3 font-semibold 
//               rounded hover:bg-opacity-90 transition-colors duration-200">
//               JOIN US TODAY
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;








// // import React from 'react';
// // import cow from '../../assests/cow.jpeg';

// // const LandingPage = () => {
// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       {/* Navigation Bar */}
// //       {/* <nav className="bg-white border-b shadow-sm">
// //         <div className="max-w-7xl mx-auto px-4">
// //           <div className="flex justify-between items-center h-16">
// //             <div className="text-xl font-bold text-purple-800">strummels</div>
// //             <div className="flex space-x-8">
// //               <a href="#" className="text-gray-600 hover:text-gray-900">ABOUT US</a>
// //               <a href="#" className="text-gray-600 hover:text-gray-900">SERVICES</a>
// //               <a href="#" className="text-gray-600 hover:text-gray-900">CONTACT</a>
// //               <a href="#" className="text-gray-600 hover:text-gray-900">NEWS AND UPDATES</a>
// //               <button className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800">
// //                 Register
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </nav> */}

// //       {/* Hero Section */}
// //       <div className="relative flex-grow">
// //         <div className="absolute inset-0">
// //           <img 
// //             src={cow} 
// //             alt="Dairy cows in green field" 
// //             // className="w-full h-full object-cover"
// //             className='check'
// //           />
// //         </div>
        
// //         {/* Purple Box Overlay */}
// //         <div className="relative max-w-7xl mx-auto px-4 py-16">
// //           <div className="bg-white border-4 border-purple-700 p-8 max-w-xl rounded-lg shadow-xl">
// //             <h1 className="text-3xl font-bold mb-4">Your Partner in Dairy and Real Estate</h1>
// //             <p className="text-gray-600 mb-6">
// //               Strummels is dedicated to supporting our partners with expert services designed to enhance their livelihoods. 
// //               From dairy farm operations to comprehensive real estate solutions, we bring specialized expertise to your doorstep. 
// //               Our committed team works to guarantee that your investments, whether in cattle or property, are managed with the utmost care 
// //               and backed by years of experience.
// //             </p>
// //             <button className="bg-purple-700 text-white px-8 py-3 rounded-md hover:bg-purple-800">
// //               Join Us Today
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom Section */}
// //       <div className="bg-white py-16">
// //         <div className="max-w-7xl mx-auto px-4">
// //           <div className="grid grid-cols-2 gap-8">
// //             <div>
// //               <img 
// //                 src="/api/placeholder/885/589" 
// //                 alt="Dairy facility interior" 
// //                 className="w-full h-full object-cover rounded-lg"
// //               />
// //             </div>
// //             <div className="flex flex-col justify-center">
// //               <h2 className="text-2xl font-bold mb-4">Empowering Farmers in Dairy and Real Estate</h2>
// //               <p className="text-gray-600">
// //                 Our team is your dedicated support in providing the highest level of service 
// //                 in both dairy operations and real estate. We bring proven experience to help you 
// //                 achieve exceptional results. Whether you're looking to optimize your dairy operations 
// //                 or explore real estate opportunities, we're here to guide you through our integrated 
// //                 solutions and services.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LandingPage;

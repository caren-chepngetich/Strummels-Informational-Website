// // Navbar.js
// import React from 'react';
// import './index.css';

// const Navbar = () => {
//   return (
//     <div className="navbar-container">
//       {/* Top dual-colored bar */}
//       <div className="top-bar">
//         <div className="black-section"></div>
//         <div className="purple-section"></div>
//       </div>
      
//       {/* Navigation content */}
//       <nav className="nav-content">
//         {/* Logo */}
//         <div className="logo">
//           strummels
//         </div>
        
//         {/* Navigation links */}
//         <div className="nav-links">
//           <a href="#about">ABOUT US</a>
//           <a href="#services">SERVICES</a>
//           <a href="#contact">CONTACT</a>
//           <a href="#news">NEWS AND UPDATES</a>
//         </div>
        
//         {/* Register button */}
//         <button className="register-btn">
//           Register
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


// Components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Top dual-colored bar */}
      <div className="top-bar">
        <div className="black-section"></div>
        <div className="purple-section"></div>
      </div>
      
      {/* Navigation content */}
      <nav className="nav-content">
        {/* Logo */}
        <Link to="/" className="logo">
          strummels
        </Link>
        
        {/* Navigation links */}
        <div className="nav-links">
          <Link to="/about">ABOUT US</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/news">NEWS AND UPDATES</Link>
        </div>
        
        {/* Register button */}
        <button className="register-btn">
          Register
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavbarSection = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar-container">
        <nav className="nav-content">
          <button className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="nav-links">
            <Link to="#" onClick={() => handleSectionClick("loan")}>LOAN</Link>
            <Link to="#" onClick={() => handleSectionClick("save-invest")}>SAVE AND INVEST</Link>
            <Link to="#" onClick={() => handleSectionClick("farm-produce")}>FARM PRODUCE</Link>
            <Link to="#" onClick={() => handleSectionClick("dairy-products")}>DAIRY PRODUCTS</Link>
          </div>
        </nav>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {activeSection === "loan" && (
          <div className="content">
            <h2>Loan Services</h2>
            <p>Information about loan services...</p>
          </div>
        )}
        {activeSection === "save-invest" && (
          <div className="content">
            <h2>Save and Invest</h2>
            <p>Details on saving and investment opportunities...</p>
          </div>
        )}
        {activeSection === "farm-produce" && (
          <div className="content">
            <h2>Farm Produce</h2>
            <p>Explore different farm produce options...</p>
          </div>
        )}
        {activeSection === "dairy-products" && (
          <div className="content">
            <h2>Dairy Products</h2>
            <p>Learn more about our dairy products...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarSection;

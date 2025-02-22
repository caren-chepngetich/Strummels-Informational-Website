import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DairyLanding from "./Components/DairyJourneyPage";
import DairyServices from "./Components/DairyServices";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Landingpage";
import ContactSection from "./Components/offers";
import ServicesSection from "./Components/ServicesSection";
import Testimony from "./Components/testimonies";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import News from "./Components/News";
import LayoutNav from "./Components/Layout/NavbarSection";  // Ensure this path is correct
import Carousel from "./Components/Layout/Carousel"; // Ensure this path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <LayoutNav />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Carousel />
                <HeroSection />
                <DairyLanding />
                <DairyServices />
                <ServicesSection />
                <Testimony />
                <ContactSection />
              </div>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

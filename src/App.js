import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DairyLanding from './Components/DairyJourneyPage';
import DairyServices from './Components/DairyServices';
import Footer from './Components/Footer';
import HeroSection from './Components/Landingpage';
import Navbar from './Components/Navbar';
import NavbarSection from './Components/NavbarSection';
import ContactSection from './Components/offers';
import ServicesSection from './Components/ServicesSection';
import Testimony from './Components/testimonies';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Contact from './Components/Contact';
import News from './Components/News';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <NavbarSection />  {/* Positioned directly below the main Navbar */}
        
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <DairyLanding />
              <DairyServices />
              <ServicesSection />
              <Testimony />
              <ContactSection />
            </>
          } />
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

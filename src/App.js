import './App.css';
import DairyLanding from './Components/DairyJourneyPage';
// import DairyJourneyPage from './Components/DairyJourneyPage';
import DairyServices from './Components/DairyServices';
import Footer from './Components/Footer';
import HeroSection from './Components/Landingpage';
import Navbar from './Components/Navbar';
// import LandingPage from './Components/Landingpage';
import ContactSection from './Components/offers';
import ServicesSection from './Components/ServicesSection';
import Testimony from './Components/testimonies';

function App() {
  return (
    <div className="App">#
    <Navbar/>
      <HeroSection/>
{/* <LandingPage/> */}
{/* <DairyJourneyPage/> */}
<DairyLanding/>
<DairyServices/>
<ServicesSection/>
<Testimony/>
<ContactSection/>
<Footer/>
    </div>
  );
}

export default App;

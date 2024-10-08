import Header from './components/Header/Header';
import Equip from './components/Equip/Equip';
import HeroSection from './components/HeroSection/HeroSection';
import Guarantee from './components/Guarantee/Guarantee';
import Support from './components/Support/Support';
import Shipping from './components/Shipping/Shipping';
import Service from './components/Service/Sevice';
import Spares from './components/Spares/Spares';
import Community from './components/Community/Community';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Equipment from './components/Equipment/Equipment';

import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="scroll-container">
        <div className="scroll-section">
          <HeroSection />
        </div>
        <div className="scroll-section">
          <Equipment />
        </div>
        <div className="scroll-section">
          <Equip />
        </div>
        <div className="scroll-section">
          <Guarantee />
        </div>
        <div className="scroll-section">
          <Support />
        </div>
        <div className="scroll-section">
          <Shipping />
        </div>
        <div className="scroll-section">
          <Service />
        </div>
        <div className="scroll-section">
          <Spares />
        </div>
        <div className="scroll-section">
          <Community />
        </div>
        <div className="scroll-section">
          <Feedback />
          <Footer />
        </div>
        
      </div>
    </>
  );
};

export default App;
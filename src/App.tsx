import React from 'react';
import Header from './components/Header/Header';
import Equip from './components/Equip/Equip';
import HeroSection from './components/HeroSection/HeroSection';
import Guarantee from './components/Guarantee/Guarantee';
import SupportSection from './components/Support/Support';
import Shipping from './components/Shipping/Shipping';
import Service from './components/Service/Sevice';
import Spares from './components/Spares/Spares';
import Community from './components/Community/Community';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Equip />
      <Guarantee />
      <SupportSection />
      <Shipping />
      <Service />
      <Spares />
      <Community />
      <Feedback />
      <Footer />
    </>
  );
};

export default App;
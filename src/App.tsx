import React from 'react';
import Header from './components/Header/Header';
import Equip from './components/Equip/Equip';
import HeroSection from './components/HeroSection/HeroSection';
import Guarantee from './components/Guarantee/Guarantee';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Equip />
      <Guarantee />
    </>
  );
};

export default App;
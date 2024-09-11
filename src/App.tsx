import React from 'react';
import Header from './components/Header/Header';
import Equip from './components/Equip/Equip';
import HeroSection from './components/HeroSection/HeroSection';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Equip />
    </>
  );
};

export default App;
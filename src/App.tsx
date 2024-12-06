import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Equip from './components/Equip/Equip';
import Guarantee from './components/Guarantee/Guarantee';
import Support from './components/Support/Support';
import Shipping from './components/Shipping/Shipping';
import Spares from './components/Spares/Spares';
import Community from './components/Community/Community';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';

import './App.css';
import Equipment from './components/Equipment/Equipment';
import HeroSection from './components/HeroSection/HeroSection';
import OrderPage from './components/OrderPage/OrderPage';
import { useContext, useState } from 'react';
import { FeedbackProps } from './components/Feedback/Feedback';
import NewGuarantee from './components/NewGuarantee/NewGuarantee';
import { LoadingContext } from './contexts/LoadingContext';
import Preloader from './components/Preloader/Preloader';
import ServiceCity from './components/ServiceCity/ServiceCity';

const App: React.FC = () => {
  const [feedbackData, setFeedbackData] = useState<FeedbackProps | null>(null);
  const { isLoading } = useContext(LoadingContext);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/mixtrade"
          element={
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
              {/* <div className="scroll-section">
                <Guarantee />
              </div> */}
              <div className="scroll-section">
                <NewGuarantee/>
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
          }
        />
        <Route path="/guarantee-city" element={<ServiceCity />} />
        <Route path="/order-page" element={<OrderPage setFeedbackData={setFeedbackData} />} />
        <Route path="/feedback" element={<Feedback {...feedbackData} />} />
        <Route path="/guarantee" element={<NewGuarantee />} />

      </Routes>
    </Router>
  );
};

export default App;
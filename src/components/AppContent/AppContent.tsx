import { Routes, Route, useLocation } from 'react-router-dom';

import '../../App.css';
import { useContext, useLayoutEffect, useState } from 'react';
import Header from '../Header/Header';
import Community from '../Community/Community';
import Equip from '../Equip/Equip';
import Equipment from '../Equipment/Equipment';
import Feedback, { FeedbackProps } from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import NewGuarantee from '../NewGuarantee/NewGuarantee';
import OrderPage from '../OrderPage/OrderPage';
import Preloader from '../Preloader/Preloader';
import Service from '../Service/Service';
import ServiceCity from '../ServiceCity/ServiceCity';
import Shipping from '../Shipping/Shipping';
import Spares from '../Spares/Spares';
import Support from '../Support/Support';
import { LoadingContext } from '../../contexts/LoadingContext';
import FeedbackSpares from '../FeedbackSpares/FeedbackSpares';
import Hero from '../Hero/Hero';
import GuaranteeDetails from '../GuaranteeDetails/GuaranteeDetails';

const AppContent: React.FC = () => {
  const [feedbackData, setFeedbackData] = useState<FeedbackProps | null>(null);
  const { isLoading } = useContext(LoadingContext);
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/mixtrade"
          element={
            <div className="scroll-container">
              <div className="scroll-section">
                <Hero />
              </div>
              <div className="scroll-section">
                <Equipment />
              </div>
              <div className="scroll-section">
                <Equip />
              </div>
              <div className="scroll-section" id="guarantee">
                <NewGuarantee />
              </div>
              <div className="scroll-section">
                <Support />
              </div>
              <div className="scroll-section">
                <Shipping />
              </div>
              <div className="scroll-section" id="service">
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
        <Route path="/service-city" element={<ServiceCity />} />
        <Route path="/order-page" element={<OrderPage setFeedbackData={setFeedbackData} />} />
        <Route path="/feedback" element={<Feedback {...feedbackData} />} />
        <Route path="/feedback-spares" element={<FeedbackSpares />} />
        <Route path="/guarantee" element={<NewGuarantee />} />
        <Route path="/mixtrade/guarantee-details" element={<GuaranteeDetails />} />
      </Routes>
    </>
  );
};

export default AppContent;
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Equip from './components/Equip/Equip';
// import Support from './components/Support/Support';
// import Shipping from './components/Shipping/Shipping';
// import Spares from './components/Spares/Spares';
// import Community from './components/Community/Community';
// import Feedback from './components/Feedback/Feedback';
// import Footer from './components/Footer/Footer';
// import Service from './components/Service/Service';
// import './App.css';
// import Equipment from './components/Equipment/Equipment';
// import HeroSection from './components/HeroSection/HeroSection';
// import OrderPage from './components/OrderPage/OrderPage';
// import { useContext, useEffect, useState } from 'react';
// import { FeedbackProps } from './components/Feedback/Feedback';
// import NewGuarantee from './components/NewGuarantee/NewGuarantee';
// import { LoadingContext } from './contexts/LoadingContext';
// import Preloader from './components/Preloader/Preloader';
// import ServiceCity from './components/ServiceCity/ServiceCity';

// const AppContent: React.FC = () => {
//   const [feedbackData, setFeedbackData] = useState<FeedbackProps | null>(null);
//   const { isLoading } = useContext(LoadingContext);
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.querySelector(location.hash);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [location]);

//   if (isLoading) {
//     return <Preloader />;
//   }

//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route
//           path="/mixtrade"
//           element={
//             <div className="scroll-container">
//               <div className="scroll-section">
//                 <HeroSection />
//               </div>
//               <div className="scroll-section">
//                 <Equipment />
//               </div>
//               <div className="scroll-section">
//                 <Equip />
//               </div>
//               <div className="scroll-section">
//                 <NewGuarantee/>
//               </div>
//               <div className="scroll-section">
//                 <Support />
//               </div>
//               <div className="scroll-section">
//                 <Shipping />
//               </div>
//               <div className="scroll-section" id="service">
//                 <Service />
//               </div>
//               <div className="scroll-section">
//                 <Spares />
//               </div>
//               <div className="scroll-section">
//                 <Community />
//               </div>
//               <div className="scroll-section">
//                 <Feedback />
//                 <Footer />
//               </div>
//             </div>
//           }
//         />
//         <Route path="/service-city" element={<ServiceCity />} />
//         <Route path="/order-page" element={<OrderPage setFeedbackData={setFeedbackData} />} />
//         <Route path="/feedback" element={<Feedback {...feedbackData} />} />
//         <Route path="/guarantee" element={<NewGuarantee />} />
//       </Routes>
//     </>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// };

// export default App;

// src/App.tsx
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/LoadingContext';
import AppContent from './components/AppContent/AppContent';

const App: React.FC = () => {
  return (
    <Router>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </Router>
  );
};

export default App;
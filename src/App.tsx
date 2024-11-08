// import Header from './components/Header/Header';
// import Equip from './components/Equip/Equip';
// import Guarantee from './components/Guarantee/Guarantee';
// import Support from './components/Support/Support';
// import Shipping from './components/Shipping/Shipping';
// import Service from './components/Service/Sevice';
// import Spares from './components/Spares/Spares';
// import Community from './components/Community/Community';
// import Feedback from './components/Feedback/Feedback';
// import Footer from './components/Footer/Footer';
// // import Equipment from './components/Equipment/Equipment';
// import Hero from './components/Hero/Hero';

// import './App.css';

// const App: React.FC = () => {
//   return (
//     <>
//       <Header />
//       <div className="scroll-container">
//         <div className="scroll-section">
//           <Hero />
//         </div>
//         {/* <div className="scroll-section">
//           <Equipment />
//         </div> */}
//         <div className="scroll-section">
//           <Equip />
//         </div>
//         <div className="scroll-section">
//           <Guarantee />
//         </div>
//         <div className="scroll-section">
//           <Support />
//         </div>
//         <div className="scroll-section">
//           <Shipping />
//         </div>
//         <div className="scroll-section">
//           <Service />
//         </div>
//         <div className="scroll-section">
//           <Spares />
//         </div>
//         <div className="scroll-section">
//           <Community />
//         </div>
//         <div className="scroll-section">
//           <Feedback />
//           <Footer />
//         </div>
        
//       </div>
//     </>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Equip from './components/Equip/Equip';
import Guarantee from './components/Guarantee/Guarantee';
import Support from './components/Support/Support';
import Shipping from './components/Shipping/Shipping';
import Spares from './components/Spares/Spares';
import Community from './components/Community/Community';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Sevice';
import GuaranteeCity from './components/GuaranteeCity/GuaranteeCity';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/mixtrade" element={
          <div className="scroll-container">
            <div className="scroll-section">
              <Hero />
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
        } />
        
        <Route path="/guarantee-city" element={<GuaranteeCity />} />
      </Routes>
    </Router>
  );
};

export default App;
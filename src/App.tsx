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

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import FeaturePage from './pages/FeaturePage';
import PricingPage from './pages/PricingPage';
function App() {
  return (
   <Router>
    <Routes>
    <Route index path='/' element={<HomePage />} />
    <Route  path='/features' element={<FeaturePage />} />
    <Route  path='/pricing' element={<PricingPage />} />
   </Routes>
   </Router>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import FeaturePage from './pages/FeaturePage';
import PricingPage from './pages/PricingPage';
import BlogsPage from './pages/BlogsPage';
import ContactUsPage from './pages/ContactUsPage';
import OurTeamPage from './pages/OurTeamPage';
import ContentPage from './pages/ContentPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ImageGalleryPage from './pages/ImageGalleryPage';
function App() {
  return (
   <Router>
    <Routes>
    <Route index path='/' element={<HomePage />} />
    <Route  path='/features' element={<FeaturePage />} />
    <Route  path='/pricing' element={<PricingPage />} />
    <Route  path='/blogs' element={<BlogsPage />} />
    <Route  path='/contact-us' element={<ContactUsPage />} />
    <Route  path='/ourteam' element={<OurTeamPage />} />
    <Route  path='/content' element={<ContentPage />} />
    <Route  path='/blog-details' element={<BlogDetailPage />} />
    <Route  path='/about-us' element={<BlogDetailPage />} />
    <Route  path='/gallery' element={<ImageGalleryPage />} />
   </Routes>
   </Router>
  );
}

export default App;

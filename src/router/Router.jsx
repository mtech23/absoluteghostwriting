import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from '../screens/Home';
import Services from '../screens/Services';
import PublishingServices from '../screens/PublishingServices';
import PowerhouseServices from '../screens/PowerhouseServices';
import GhostwritingServices from '../screens/GhostwritingServices';
import OtherBookServices from '../screens/OtherBookServices';
// import NotFound from './pages/NotFound'; 

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/publishing-services" element={<PublishingServices />} />
        <Route path="/powerhouse-services" element={<PowerhouseServices />} />
        <Route path="/ghostwriting-services" element={<GhostwritingServices />} />
        <Route path="/book-printing" element={<Home />} />
        <Route path="/other-book-services" element={<OtherBookServices />} />
        <Route path="/press-release" element={<Home />} />
        <Route path="/childrens-illustrations" element={<Home />} />
        <Route path="/childrens-book" element={<Home />} />
        <Route path="/featured-authors" element={<Home />} />
        <Route path="/testimonials" element={<Home />} />
        <Route path="/about-us" element={<Home />} />
        <Route path="/featured-authors" element={<Home />} />
        <Route path="/blogs" element={<Home />} />
        <Route path="/faq" element={<Home />} />
        <Route path="/contact-us" element={<Home />} />
        <Route path="/privacy-policy" element={<Home />} />

        {/* Catch-all route for 404 pages */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;

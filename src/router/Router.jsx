import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from '../screens/Home';
import Services from '../screens/Services';
import PublishingServices from '../screens/PublishingServices';
import PowerhouseServices from '../screens/PowerhouseServices';
import GhostwritingServices from '../screens/GhostwritingServices';
import PressRelease from '../screens/PressRelease';
import OtherBookServices from '../screens/OtherBookServices';
import Testimonials from '../screens/Testimonials/Testimonials';
import AboutUs from '../screens/AboutUs/AboutUs';
import FeaturedAuthors from '../screens/FeaturedAuthors/FeaturedAuthors';
import ChildrensIllustrations from '../screens/ChildrensIllustrations';
import Faq from '../screens/Faq/Faq';
import ChildrensBook from '../screens/ChildrensBook';
import ContactUS from '../screens/ContactUS';
import PrivacyPolicy from '../screens/PrivacyPolicy';
// import NotFound from './pages/NotFound'; 

const AppRouter = () => {
  return (
    <Router basename="/absoluteghostwriting">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/publishing-services" element={<PublishingServices />} />
        <Route path="/powerhouse-services" element={<PowerhouseServices />} />
        <Route path="/ghostwriting-services" element={<GhostwritingServices />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/featured-authors" element={<FeaturedAuthors />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/other-book-services" element={<OtherBookServices />} />
        <Route path="/press-release" element={<PressRelease />} />
        <Route path="/childrens-illustrations" element={<ChildrensIllustrations />} />
        <Route path="/childrens-book" element={<ChildrensBook />} />

        
        <Route path="/book-printing" element={<Home />} />
        <Route path="/other-book-services" element={<OtherBookServices />} />
        <Route path="/press-release" element={<PressRelease />} />
        <Route path="/childrens-illustrations" element={<ChildrensIllustrations />} />
        <Route path="/childrens-book" element={<Home />} />
        <Route path="/featured-authors" element={<Home />} />
        <Route path="/testimonials" element={<Home />} />
        <Route path="/about-us" element={<Home />} />
        <Route path="/featured-authors" element={<Home />} />
        <Route path="/blogs" element={<Home />} />
        <Route path="/faq" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUS />} />

        <Route path="/book-printing" element={<Home />} />
        <Route path="/blogs" element={<Home />} />

        {/* Catch-all route for 404 pages */}
        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </Router>
  );
};

export default AppRouter;

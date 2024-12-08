import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CostCalculator from './components/CostCalculator';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/cost-calculator" element={<CostCalculator />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
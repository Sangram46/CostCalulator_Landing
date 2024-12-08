import React from 'react';
import Home from '../components/Home';
import Pricing from '../components/Pricing';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import CostCalculator from '../components/CostCalculator';

const LandingPage = () => {
  return (
    <div>
      <Home />
      <Pricing />
      <Benefits />
      <Testimonials />
      <CostCalculator />
    </div>
  );
};
export default LandingPage;
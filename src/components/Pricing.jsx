import React from 'react';
import './Pricing.scss';

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>
        <span className="highlight">Where Should You</span>{' '}
        <span className="highlight1">Setup Your Business?</span>
      </h2>
      <div className="pricing-cards">
        <div className="card">
          <div className="card-header">Dubai Mainland</div>
          <div className="card-subtext">Starting From</div>
          <div className="card-price">
            AED <span>15,000</span>
          </div>
          <ul className="card-features">
            <li>Choose up to 10 activities</li>
            <li>Trade License</li>
            <li>No Visa Limitations</li>
            <li>Free Wio business account opening assistance</li>
            <li>Memorandum of Association</li>
          </ul>
          <button className="card-button">Get Started</button>
        </div>
        <div className="card">
          <div className="card-header">UAE Freezone</div>
          <div className="card-subtext">Starting From</div>
          <div className="card-price">
            AED <span>5,500</span>
          </div>
          <ul className="card-features">
            <li>Choose up to 5 activities</li>
            <li>Up to 5 Shareholders</li>
            <li>Business License</li>
            <li>Lease Agreement</li>
            <li>Memorandum of Association(MOA)</li>
          </ul>
          <button className="card-button">Get Started</button>
        </div>
        <div className="card">
          <div className="card-header">Dubai Mainland</div>
          <div className="card-subtext">Starting From</div>
          <div className="card-price">
            AED <span>12,900</span>
          </div>
          <ul className="card-features">
            <li>Choose up to 5 activities</li>
            <li>Trade License</li>
            <li>Virtual office address</li>
            <li>Free Wio business account opening assistance</li>
            <li>Memorandum of Association</li>
          </ul>
          <button className="card-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

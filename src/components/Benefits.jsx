import React from 'react';
import './Benefits.scss';
import benefitsImage from '../assets/benefits.png'; 

const Benefits = () => {
  return (
    <section className="benefits">
      <h2>
        <span className="highlight">How Much Will It Cost To Start Your </span>{' '}
        <span className="highlight1">Business In Dubai?</span>
      </h2>

      <p className="description">
        Starting a business in the UAE involves multiple variables that influence your overall costs. Drawing from our
        extensive experience assisting thousands of entrepreneurs in Dubai, Vista has developed a user-friendly Business
        Setup Cost Calculator to provide you with cost estimates tailored to your unique business needs. Get accurate
        estimates and plan your business with confidence, backed by Vista Corporate Group—your trusted consultants in Dubai.
      </p>

      <div className="form-container">
        <div className="form-column">
          {/* <h3>Cost Calculator</h3> */}
          <form>
          <h3>Cost Calculator</h3>
            <input type="text" id="name" placeholder="Name" />
            <input type="tel" id="number" placeholder="Number" />
            <input type="email" id="email" placeholder="Email" />
            <select id="interest" placeholder="What is your area of interest?">
              <option value="What is your area of interest?">What is your area of interest?</option>
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
            </select>
            <select id="start" placeholder="When do you want to start?">
              <option value="When do you want to start?">When do you want to start?</option>
              <option value="within-month">Within a month</option>
              <option value="within-three-months">Within 3 months</option>
              <option value="no-specific-date">No specific date</option>
            </select>
            <button type="submit">Submit Now</button>
          </form>
        </div>

        <div className="image-column" style={{ backgroundImage: `url(${benefitsImage})` }}>
          <div className="image-content">
            <button className="consultation-button">Get a Free Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

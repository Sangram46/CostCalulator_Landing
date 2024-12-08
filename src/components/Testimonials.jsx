import React from 'react';
import test1Image from '../assets/test1.png';
import test2Image from '../assets/test2.png';
import test3Image from '../assets/test3.png';
import './Testimonials.scss';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="left-content">
        <h1>
          What Our<br />
          <span className="bold">Customer Says</span>
        </h1>
        <p>Streamline your business setup in</p>
        <p>UAE anytime, anywhere with our</p>
        <p>digital platform</p>
        <button className="card-button">View More</button>
      </div>

      <div className="right-content">
        <div className="card">
          <div className="image-container">
            <img src={test1Image} alt="Mehwish" />
          </div>
          <div className="text-content">
            <h2>Mehwish</h2>
            <p>Streamline your business setup in UAE</p>
            <p>anytime, anywhere with our digital platform</p>
          </div>
        </div>

        <div className="card1">
          <div className="image-container1">
            <img src={test2Image} alt="Mehwish" />
          </div>
          <div className="text-content1">
            <h2>John</h2>
            <p>Streamline your business setup in UAE</p>
            <p>anytime, anywhere with our digital platform</p>
          </div>
        </div>

        <div className="card">
          <div className="image-container">
            <img src={test3Image} alt="Mehwish" />
          </div>
          <div className="text-content">
            <h2>Micky</h2>
            <p>Streamline your business setup in UAE</p>
            <p>anytime, anywhere with our digital platform</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

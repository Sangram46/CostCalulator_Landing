import React from 'react';
import './Home.scss';
import homeImage from '../assets/home.png';
import avtarImage from '../assets/avtar.png'; 

const Home = () => {
    const homeStyle = {
        backgroundImage: `url(${homeImage})`,
        backgroundSize: 'cover',
      };
  return (
    <section className="home" style={homeStyle}>
      
      <div className="home-content">
        
        <div className="home-text">
          <h1>Calculate Your <br /> Business Setup Costs in <br /><span>Dubai Now</span></h1>
          <p>
            Find out how much it will cost to set up <br />
            your business in just a few clicks.
          </p>
          <button>Calculate Now</button>
        </div>

        
        <div className="home-image">
          <img src={avtarImage} alt="Avatar" />
        </div>
        
      </div>
     
    </section>
  );
};

export default Home;
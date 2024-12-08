import React from 'react';
import './Footer.scss';
import LogoImage from '../assets/logo.png';
import linkedinImage from '../assets/linkedin.png';
import instagramImage from '../assets/instagram.png';
import gmailImage from '../assets/gmail.png';
import fbImage from '../assets/fb.png';
import outlookImage from '../assets/outlook.png';
import youtubeImage from '../assets/youtube.png';

const Footer = () => {
  return (
    <footer>
      <div className="main-footer">
        <div className="footer-row">
          <div className="footer-column">
            <img src={LogoImage} alt="Logo" className="footer-logo" />
            <p className="bold-text">Subscribe to our developer newsletter</p>
            <p>Improve efficiency, provide a better customer experience</p>
            <p>with modern technology services</p>
            <button className="subscribe-button">Subscribe</button>
          </div>
         
          <div className="footer-column">
            <p className="bold-text">VERTICALS</p>
            <p>Vista Corporate Group</p>
            <p>Vista Corporate Global Business Setup</p>
            <p>Vista Corporate Business Center</p>
            <p>Vista Accounting & Taxation</p>
            <p>Vista Properties</p>
            <p>V Club</p>
            <p>Vista Tours</p>
            <p>Vista Cafeteria</p>
          </div>
         
          <div className="footer-column">
            <p className="bold-text">USEFUL LINKS</p>
            <p>Corporate Services</p>
            <p>PRO Services</p>
            <p>Coworking Spaces</p>
            <p>Dubai Mainland</p>
            <p>Accounting & Auditing</p>
            <p>Our Team</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          
          <div className="footer-column">
            <p className="bold-text">HEAD OFFICE</p>
            <p>2001 - 2007, 20th Floor, The Exchange Tower, Business</p>
            <p>Bay, Dubai. P.O.BOX - 71706</p>
            <p>info@thevistacorp.com</p>
            <p>+971 58 158 2786</p>
            <p>+971 4 770 0786</p>
          </div>
        </div>
      </div>
      
      <div className="sub-footer">
        <div className="sub-footer-left">
          <p>
            Copyright 2024. All Rights Reserved by Vista Corporate Group.
            <span> Terms </span>
            <span> Privacy </span>
            <span> Sitemap </span>
            <span> Manage Cookies </span>
          </p>
        </div>
        <div className="sub-footer-right">
          <img src={linkedinImage} alt="LinkedIn" />
          <img src={instagramImage} alt="Instagram" />
          <img src={gmailImage} alt="Gmail" />
          <img src={fbImage} alt="Facebook" />
          <img src={outlookImage} alt="Outlook" />
          <img src={youtubeImage} alt="YouTube" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

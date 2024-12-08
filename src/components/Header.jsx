import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Vista Pvt Ltd.</div>
      <nav className={menuOpen ? 'menu open' : 'menu'}>
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/benefits">Benefits</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/cost-calculator">Cost Calculator</Link>
      </nav>
      {/* <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button> */}
    </header>
  );
};

export default Header;
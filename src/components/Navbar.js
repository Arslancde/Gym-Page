import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenu(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="GYM Logo" className="logo-image" />
          <span className="logo-text">GYM</span>
        </div>
        
        <div className={`nav-menu ${mobileMenu ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="active">Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Pages</a></li>
            <li><a href="#blog" onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }}>Blog</a></li>
            <li><a href="#shop" onClick={(e) => { e.preventDefault(); scrollToSection('shop'); }}>Shop</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contacts</a></li>
          </ul>
        </div>

        <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
          <span className={`bar ${mobileMenu ? 'active' : ''}`}></span>
          <span className={`bar ${mobileMenu ? 'active' : ''}`}></span>
          <span className={`bar ${mobileMenu ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
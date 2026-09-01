import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-text">GYM</div>
          <p>Transform your body, transform your life. Join our community of fitness enthusiasts and achieve your goals with expert guidance.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-hours">
          <h4>Hours</h4>
          <p><span>Mon - Fri:</span> 5:00 AM - 11:00 PM</p>
          <p><span>Saturday:</span> 6:00 AM - 10:00 PM</p>
          <p><span>Sunday:</span> 7:00 AM - 8:00 PM</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 <span className="footer-heart">GYM</span>. All Rights Reserved.</p>
        <p className="footer-payment">Built with 💪 Passion</p>
      </div>
    </footer>
  );
};

export default Footer;
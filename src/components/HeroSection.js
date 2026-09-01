import React, { forwardRef } from 'react';
import heroBg from '../assets/images/training-session.jpg';

const HeroSection = forwardRef((props, ref) => {
  return (
    <section id="hero" ref={ref} className="section hero-section">
      <div
        className="hero-bg-image"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        {/* Bottom Center Hero Title */}
        <div className="hero-heading">
          <span className="hero-title">CROSSFIT</span>
          <span className="hero-subtitle">FACILITY</span>

          <div className="hero-indicator">
            <span>SCROLL</span>
            <div className="scroll-line"></div>
          </div>
        </div>

        {/* Right Side Stats */}
        <div className="hero-right">
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">01</span>
              <span className="stat-label">YEARS</span>
            </div>

            <div className="hero-stat">
              <span className="stat-number">02</span>
              <span className="stat-label">EXPERIENCE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
});

export default HeroSection;
import React, { forwardRef } from 'react';
import trainerImage from '../assets/images/trainer.jpg';

const AboutSection = forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref} className="section about-section">
      <div className="about-container">
        <div className="about-left">
          <span className="about-number">01</span>
          <h2>About <span>Us</span></h2>
          <div className="about-text">
            <p>
              Welcome to our state-of-the-art fitness facility where we transform 
              lives through dedicated training and expert guidance. Our mission is 
              to help you achieve your fitness goals with personalized programs 
              designed for maximum results.
            </p>
            <p>
              With years of experience in the fitness industry, we've helped 
              thousands of members build strength, improve endurance, and create 
              lasting lifestyle changes. Your journey to a better you starts here.
            </p>
            <p>
              Join our community of fitness enthusiasts and experience the 
              difference that professional training and support can make in 
              your fitness journey.
            </p>
          </div>
        </div>
        <div className="about-right">
          <img src={trainerImage} alt="Trainer" />
          <div className="about-image-overlay">
            <span>10+ Years of Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
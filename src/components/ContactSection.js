import React, { forwardRef } from 'react';

const ContactSection = forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref} className="section contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <span className="contact-number">04</span>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@gym.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>123 Fitness Street, NY</p>
              </div>
            </div>
          </div>
          <div className="contact-social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
          </div>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="4"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import BlogSection from './BlogSection';
import ShopSection from './ShopSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const App = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <HeroSection ref={(el) => (sectionsRef.current[0] = el)} />
      <AboutSection ref={(el) => (sectionsRef.current[1] = el)} />
      <BlogSection ref={(el) => (sectionsRef.current[2] = el)} />
      <ShopSection ref={(el) => (sectionsRef.current[3] = el)} />
      <ContactSection ref={(el) => (sectionsRef.current[4] = el)} />
      <Footer />
    </div>
  );
};

export default App;
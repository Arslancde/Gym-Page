import React, { forwardRef } from 'react';
import trainingImage from '../assets/images/training-session.jpg';
import nutritionImage from '../assets/images/nutrition.jpg';
import crossfitImage from '../assets/images/crossfit.jpg';

const BlogSection = forwardRef((props, ref) => {
  const blogPosts = [
    {
      title: 'How to Build Muscle Fast',
      category: 'Training',
      image: trainingImage,
      date: 'Dec 12, 2024'
    },
    {
      title: 'Nutrition Guide for Athletes',
      category: 'Nutrition',
      image: nutritionImage,
      date: 'Dec 10, 2024'
    },
    {
      title: 'CrossFit Competition Prep',
      category: 'CrossFit',
      image: crossfitImage,
      date: 'Dec 8, 2024'
    }
  ];

  return (
    <section id="blog" ref={ref} className="section blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <span className="blog-number">02</span>
          <h2 className="section-title">Our <span>Blog</span></h2>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <span className="blog-date">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default BlogSection;
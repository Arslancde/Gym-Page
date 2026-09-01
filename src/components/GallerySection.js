import React, { forwardRef } from 'react';
import gymBag from '../assets/images/gym-bag.jpg';
import gloves from '../assets/images/gloves.jpg';
import bands from '../assets/images/bands.jpg';
import shaker from '../assets/images/shaker.jpg';

const GallerySection = forwardRef((props, ref) => {
  const products = [
    {
      name: 'Premium Gym Bag',
      price: '$49.99',
      image: gymBag
    },
    {
      name: 'Training Gloves',
      price: '$24.99',
      image: gloves
    },
    {
      name: 'Resistance Bands',
      price: '$19.99',
      image: bands
    },
    {
      name: 'Protein Shaker',
      price: '$14.99',
      image: shaker
    }
  ];

  return (
    <section id="gallery" ref={ref} className="section gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="gallery-number">03</span>
          <h2 className="section-title">Shop</h2>
        </div>
        <div className="shop-grid">
          {products.map((product, index) => (
            <div key={index} className="shop-item">
              <div className="shop-image">
                <img src={product.image} alt={product.name} />
                <button className="shop-quick-view">Quick View</button>
              </div>
              <div className="shop-info">
                <h4>{product.name}</h4>
                <span className="shop-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default GallerySection;
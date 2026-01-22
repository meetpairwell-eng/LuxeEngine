import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <span className="hero-subtitle uppercase">Exclusive Listing</span>
        <h1 className="hero-title">1234 Lobello Drive</h1>
        <p className="hero-location">Dallas, TX 75225</p>
      </div>
      
      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          background-image: url('https://images.unsplash.com/photo-1600596542815-27b5c0c8aa3b?q=80&w=2940&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          color: white;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-bottom: var(--spacing-xl);
        }
        
        .hero-subtitle {
          font-size: 0.9rem;
          letter-spacing: 0.2rem;
          display: block;
          margin-bottom: var(--spacing-sm);
          color: var(--color-accent);
        }
        
        .hero-title {
          font-size: clamp(3rem, 6vw, 6rem);
          margin-bottom: var(--spacing-xs);
          font-family: var(--font-heading);
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero-location {
          font-size: 1.5rem;
          opacity: 0.9;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export default Hero;

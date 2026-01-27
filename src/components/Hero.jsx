import React, { useEffect, useState, useMemo } from 'react';
import { images, propertyInfo } from '../config/propertyConfig';

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Background Image */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url('${images.cover}')` }}
      ></div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">{propertyInfo.address}</h1>
      </div>

      {/* Scroll Hint Tab */}
      <div className="hero-scroll-tab">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-arrow"></div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          color: white;
          z-index: 10;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%);
          z-index: 1;
        }

        .hero-content {
          position: absolute;
          left: 50%;
          top: var(--hero-text-top, 48%);
          transform: translate(-50%, -50%);
          text-align: var(--hero-text-align, center);
          width: max-content;
          max-width: 90%;
          z-index: 2;
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 5rem);
          margin-bottom: var(--spacing-xs);
          font-family: var(--font-heading);
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          line-height: 1;
        }

        /* Scroll Tab Styling */
        .hero-scroll-tab {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: 20;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 2rem;
            animation: bounce 2s infinite;
        }
        
        .scroll-text {
            font-size: 0.8rem;
            letter-spacing: 0.2rem;
            margin-bottom: 0.5rem;
            font-weight: 300;
            text-transform: uppercase;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        
        .scroll-arrow {
            width: 20px;
            height: 20px;
            border-bottom: 2px solid white;
            border-right: 2px solid white;
            transform: rotate(45deg);
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(-10px); }
            60% { transform: translateX(-50%) translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;

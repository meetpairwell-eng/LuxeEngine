import React, { useEffect, useState, useMemo } from 'react';
import { galleryConfig } from '../galleryData';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // The "Cover" layer (First Image)
  const coverImage = galleryConfig.coverImage;

  // Track scroll for the fade effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate Progress (0 to 1)
  // We want the transition to take about 2 full screen heights (200vh) of scrolling
  const scrollRange = window.innerHeight * 2;
  const rawProgress = Math.min(1, Math.max(0, scrollY / scrollRange));

  // Ease the progress for smoother feel (optional, but nice)
  const progress = rawProgress;

  // Opacity: Initial image fades out as we scroll
  const fadeOpacity = 1 - progress;

  // Text Animation Calculations
  // Start (0): Center (50%, 50%), Scale 1.3
  // End (1): Bottom-Left (5%, 85%), Scale 1.0
  const leftPos = 50 - (45 * progress); // 50% -> 5%
  const topPos = 50 + (35 * progress);  // 50% -> 85%
  const translateVal = 50 - (50 * progress); // 50% -> 0% (Center pivot -> TopLeft pivot effectively)
  const scaleVal = 1.3 - (0.3 * progress);   // 1.3 -> 1.0

  return (
    <div className="hero-track">
      <div className="hero-sticky">

        {/* Layer 1: The "Reveal" Image (Main Hero) */}
        <div className="hero-bg-layer" style={{ backgroundImage: `url('${galleryConfig.heroImage}')`, zIndex: 1 }}></div>

        {/* Layer 2: The "Initial" Image (Random Cover) - Fades Out */}
        <div
          className="hero-bg-layer"
          style={{
            backgroundImage: `url('${coverImage}')`,
            zIndex: 2,
            opacity: fadeOpacity
          }}
        ></div>

        <div className="hero-overlay"></div>

        {/* Floating Content Layer */}
        <div
          className="hero-content-animator"
          style={{
            left: `${leftPos}%`,
            top: `${topPos}%`,
            transform: `translate(-${translateVal}%, -${translateVal}%) scale(${scaleVal})`,
            textAlign: progress > 0.8 ? 'left' : 'center',
            width: 'max-content'
          }}
        >
          <h1 className="hero-title">5610 Lobello Drive</h1>
        </div>
      </div>

      <style>{`
        .hero-track {
          /* Much taller to allow for longer scroll time */
          height: 350vh; 
          position: relative;
          z-index: 10;
        }

        .hero-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          /* We'll use absolute positioning for content now, so flex alignment is not needed */
          color: white;
        }

        /* ... existing layer styles ... */
        .hero-bg-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: opacity 0.1s linear;
          will-change: opacity;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%);
          z-index: 3;
        }

        /* Animated Content Container */
        .hero-content-animator {
          position: absolute;
          z-index: 5;
          width: max-content; /* Shrink warp to text */
          max-width: 90%;     /* Prevent overflow */
          will-change: transform, left, top;
          transition: text-align 0.3s; /* Smooth align switch */
        }
        
        .hero-subtitle {
          font-size: 0.9rem;
          letter-spacing: 0.2rem;
          display: block;
          margin-bottom: var(--spacing-sm);
          color: var(--color-accent);
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 5rem); /* Slightly smaller max */
          margin-bottom: var(--spacing-xs);
          font-family: var(--font-heading);
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          line-height: 1;
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

import React from 'react';

import { galleryConfig } from '../galleryData';

// Determine which images to show based on config
let images = [];

if (galleryConfig.useBulk) {
  const { baseUrl, filePrefix, extension, count } = galleryConfig.bulkSettings;
  // Handle trailing slash just in case user forgets/adds it
  const cleanBase = baseUrl.replace(/\/$/, '');

  images = Array.from({ length: count }, (_, i) =>
    `${cleanBase}/${filePrefix}${i + 1}${extension}`
  );
} else {
  images = galleryConfig.manualImages;
}

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title text-center">Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, index) => {
            // Create a varied pattern
            let className = 'gallery-item';
            if (index % 12 === 0) className += ' big';       // 1 major highlight every 12
            else if (index % 5 === 0) className += ' tall';  // Some vertical interest
            else if (index % 3 === 0) className += ' wide';  // Scattered wide shots

            return (
              <div key={index} className={className}>
                <img src={img} alt={`Property view ${index + 1}`} loading="lazy" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .gallery-section {
          background-color: white;
          position: relative;
          z-index: 10;
          padding: var(--spacing-xl) 0;
        }

        .text-center {
          text-align: center;
          margin-bottom: var(--spacing-lg);
        }
        .section-title {
          font-size: 2.5rem;
          color: var(--color-text);
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--spacing-xs); /* Tighter gap for mosaic feel */
          grid-auto-flow: dense;  /* Fill in gaps */
        }
        
        .gallery-item {
          overflow: hidden;
          position: relative;
          background: #f0f0f0;
          height: 300px; /* Base height */
        }

        /* Varied Sizes */
        .gallery-item.wide {
            grid-column: span 2;
        }
        .gallery-item.tall {
            grid-row: span 2;
            height: 600px; /* Double height + gap roughly */
        }
        .gallery-item.big {
            grid-column: span 2;
            grid-row: span 2;
            height: 600px;
        }
        
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .gallery-item:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .gallery-grid {
             grid-template-columns: 1fr;
          }
          /* Reset spans on mobile */
          .gallery-item.wide, 
          .gallery-item.tall, 
          .gallery-item.big { 
            grid-column: auto; 
            grid-row: auto;
            height: 300px; 
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;

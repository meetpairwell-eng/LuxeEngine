import React from 'react';

import { galleryConfig } from '../galleryData';

// Determine which images to show based on config
let images = [];

if (galleryConfig.useBulk) {
  const { baseUrl, filePrefix, extension, count, excludeIndices = [] } = galleryConfig.bulkSettings;
  // Handle trailing slash just in case user forgets/adds it
  const cleanBase = baseUrl.replace(/\/$/, '');

  images = Array.from({ length: count }, (_, i) => {
    const index = i + 1;
    if (excludeIndices.includes(index)) return null;
    return `${cleanBase}/${filePrefix}${index}${extension}`;
  }).filter(Boolean); // Remove nulls
} else {
  images = galleryConfig.manualImages;
}

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = React.useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="gallery-section">
      <div className="container">

        <div className="gallery-grid">
          {images.map((img, index) => {
            // Create a varied pattern
            let className = 'gallery-item';

            // Logic: Make big items, but ensure the very last item is NOT big/tall/wide
            // to avoid awkward gaps at the end of the grid.
            const isLast = index === images.length - 1;

            if (!isLast) {
              if (index % 12 === 0) className += ' big';       // 1 major highlight every 12
              else if (index % 5 === 0) className += ' tall';  // Some vertical interest
              else if (index % 3 === 0) className += ' wide';  // Scattered wide shots
            }

            return (
              <div
                key={index}
                className={className}
                onClick={() => openLightbox(index)}
              >
                <img src={img} alt={`Property view ${index + 1}`} loading="lazy" />
                <div className="hover-overlay"><span className="plus-icon">+</span></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox}>&times;</button>

          <button className="lb-nav lb-prev" onClick={prevImage}>&#10094;</button>

          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightboxIndex]}
              alt={`Full screen view ${lightboxIndex + 1}`}
            />
          </div>

          <button className="lb-nav lb-next" onClick={nextImage}>&#10095;</button>

          <div className="lb-counter">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}

      <style>{`
        .gallery-section {
          background-color: white;
          position: relative;
          z-index: 10;
          padding: var(--spacing-md) 0 var(--spacing-xl) 0;
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
          cursor: pointer;
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
        
        .hover-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.3);
            display: flex;
            align-items: center; justify-content: center;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .plus-icon {
            color: white; font-size: 2rem; font-weight: 300;
        }
        
        .gallery-item:hover .hover-overlay {
            opacity: 1;
        }
        
        .gallery-item:hover img {
          transform: scale(1.05);
        }

        /* LIGHTBOX STYLES */
        .lightbox-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.95);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            animation: fadeIn 0.3s forwards;
        }
        
        @keyframes fadeIn { to { opacity: 1; } }
        
        .lb-content {
            max-width: 90%;
            max-height: 90%;
            position: relative;
        }
        
        .lb-content img {
            max-width: 90vw;
            max-height: 85vh;
            object-fit: contain;
            box-shadow: 0 0 50px rgba(0,0,0,0.5);
        }
        
        .lb-close {
            position: absolute;
            top: 20px; right: 30px;
            background: none; border: none;
            color: white; font-size: 3rem;
            cursor: pointer; z-index: 10000;
            line-height: 1;
        }
        
        .lb-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0,0,0,0.5);
            border: none;
            color: white;
            font-size: 2rem;
            padding: 1rem 0.5rem;
            cursor: pointer;
            z-index: 10000;
            transition: background 0.3s;
        }
        .lb-nav:hover { background: rgba(255,255,255,0.2); }
        .lb-prev { left: 20px; }
        .lb-next { right: 20px; }
        
        .lb-counter {
            position: absolute;
            bottom: 20px; left: 50%;
            transform: translateX(-50%);
            color: rgba(255,255,255,0.6);
            font-size: 0.9rem;
            letter-spacing: 0.1rem;
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
          
          .lb-nav { padding: 0.5rem; font-size: 1.5rem; }
          .lb-prev { left: 10px; }
          .lb-next { right: 10px; }
        }
      `}</style>
    </section>
  );
};

export default Gallery;

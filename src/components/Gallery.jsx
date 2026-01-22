import React from 'react';

const images = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2700&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2800&auto=format&fit=crop'
];

const Gallery = () => {
    return (
        <section className="section bg-white">
            <div className="container">
                <h2 className="section-title text-center">Gallery</h2>
                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <div key={index} className="gallery-item">
                            <img src={img} alt={`Property view ${index + 1}`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .bg-white {
          background-color: #ffffff;
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
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: var(--spacing-sm);
        }
        
        .gallery-item {
          overflow: hidden;
          height: 300px;
        }
        
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-medium);
        }
        
        .gallery-item:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .gallery-grid {
             grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Gallery;

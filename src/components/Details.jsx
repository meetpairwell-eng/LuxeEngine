import React from 'react';

const Details = () => {
  return (
    <section className="details-section">
      <div className="container details-container">
        <div className="details-text">
          <span className="detail-tag uppercase text-accent">About the Property</span>
          <h2 className="detail-heading">A Masterpiece of Modern Design</h2>
          <p>
            Experience the pinnacle of luxury living in this architectural masterpiece.
            Featuring panoramic views, state-of-the-art amenities, and meticulous attention to detail throughout.
            Every corner of this residence has been thoughtfully designed to create a harmonious blend of indoor and outdoor living.
          </p>
          <p>
            The open-concept living area boasts soaring ceilings and floor-to-ceiling windows that flood the space with natural light.
            The gourmet kitchen is a chef's dream, equipped with top-of-the-line appliances and a massive center island.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">5</span>
            <span className="stat-label">Bedrooms</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">6.5</span>
            <span className="stat-label">Bathrooms</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">8,500</span>
            <span className="stat-label">Sq Ft</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">2024</span>
            <span className="stat-label">Year Built</span>
          </div>
        </div>
      </div>

      <style>{`
        .details-section {
          background-color: white;
          position: relative;
          z-index: 10;
          padding: var(--spacing-xl) 0;
        }

        .details-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: var(--spacing-xl);
          align-items: center;
        }
        
        .detail-tag {
          display: block;
          font-weight: 500;
          margin-bottom: var(--spacing-xs);
        }
        
        .detail-heading {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-md);
        }
        
        .details-text p {
          color: var(--color-text-light);
          margin-bottom: var(--spacing-sm);
          font-size: 1.1rem;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
          background: #fff;
          padding: var(--spacing-lg);
          border: 1px solid var(--color-border);
        }
        
        .stat-item {
          text-align: center;
          padding: var(--spacing-sm);
        }
        
        .stat-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 3rem;
          color: var(--color-text);
          line-height: 1;
        }
        
        .stat-label {
          display: block;
          font-size: 0.9rem;
          color: var(--color-text-light);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 0.5rem;
        }

        @media (max-width: 900px) {
          .details-container {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }
          
          .stats-grid {
             padding: var(--spacing-md);
          }
        }
      `}</style>
    </section>
  );
};

export default Details;

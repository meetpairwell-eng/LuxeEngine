import React from 'react';

const FullScreenImage = ({ image, children, sticky = false, stickyContent = null }) => {
  return (
    <section className={`fullscreen-image-section ${sticky ? 'sticky-mode' : ''}`}>
      {/* Sticky Background Image */}
      <div className="fullscreen-bg" style={{ backgroundImage: `url('${image}')` }}></div>
      <div className="fullscreen-overlay"></div>

      {/* Sticky Content Layer (e.g. Scroll Hints) */}
      {stickyContent && (
        <div className="fullscreen-sticky-layer">
          {stickyContent}
        </div>
      )}

      {/* Content anchored to the bottom of the section */}
      <div className="fullscreen-content">
        {children}
      </div>

      <style>{`
        .fullscreen-image-section {
          position: relative;
          width: 100%;
          z-index: 5;
          height: 100vh; /* Default */
        }

        .fullscreen-image-section.sticky-mode {
             height: 230vh; /* Calibrated for: Arrive (20vh) -> Rest (20vh) -> Sync Move */
        }

        .fullscreen-bg {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%; /* Default */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
        }

        /* In sticky mode, BG becomes sticky */
        .fullscreen-image-section.sticky-mode .fullscreen-bg {
            position: sticky;
            top: 0;
            height: 100vh; /* One viewport height */
        }
        
        .fullscreen-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 1;
            background: transparent;
            pointer-events: none;
        }
        
        /* In sticky mode, overlay must also be sticky to cover the image */
        .fullscreen-image-section.sticky-mode .fullscreen-overlay {
            position: sticky;
            top: 0;
            height: 100vh;
        }

        .fullscreen-sticky-layer {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 4; /* Above overlay (1) and BG (0), below main content (10) */
            pointer-events: none;
        }

        .fullscreen-image-section.sticky-mode .fullscreen-sticky-layer {
            position: sticky;
            top: 0;
            height: 100vh;
        }
        
        .fullscreen-content {
            position: absolute;
            bottom: 0; left: 0;
            width: 100%;
            z-index: 10;
        }

        /* The banner area arrives and sticks */
        .fullscreen-image-section.sticky-mode .fullscreen-content {
            position: sticky;
            bottom: 0;
            height: 120vh; /* Slightly taller than screen to allow 'slide-up' room */
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            margin-top: 90vh; /* Arrival timing */
            pointer-events: none; 
        }

        .fullscreen-image-section.sticky-mode .fullscreen-content > * {
            pointer-events: auto;
        }
        
        /* Default content positioning if NOT sticky (just 100vh) */
        .fullscreen-image-section:not(.sticky-mode) .fullscreen-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }
      `}</style>
    </section>
  );
};

export default FullScreenImage;

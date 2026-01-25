import React from 'react';

const FullScreenImage = ({ image, children }) => {
  return (
    <section className="fullscreen-image-section">
      <div className="fullscreen-bg" style={{ backgroundImage: `url('${image}')` }}></div>
      <div className="fullscreen-overlay"></div>

      <div className="fullscreen-content container">
        {children}
      </div>

      <style>{`
        .fullscreen-image-section {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fullscreen-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-attachment: fixed; /* Parallax effect */
        }
        
        .fullscreen-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.3); /* Darken for text readability */
            z-index: 1;
        }
        
        .fullscreen-content {
            position: relative;
            z-index: 2;
            text-align: center;
            color: white;
            width: 100%;
        }
      `}</style>
    </section>
  );
};

export default FullScreenImage;

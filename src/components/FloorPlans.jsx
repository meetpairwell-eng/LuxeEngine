import React, { useState } from 'react';
import { galleryConfig_LEGACY as galleryConfig } from '../config/propertyConfig';

const FloorPlans = () => {
    const [showPlans, setShowPlans] = useState(false);

    // Toggle scroll lock when plans are open (optional, but good for UX)
    // For now, simple state is enough.

    return (
        <section className="floor-plans-section">
            <div className="fp-sticky-wrapper">
                <div className="fp-background-container">
                    {/* The rotating bird's eye view background */}
                    <div className="fp-background">
                        <img src={galleryConfig.floorPlanConfig.background} alt="Property Layout" />
                    </div>

                    {/* Overlay - Click to close if open */}
                    <div
                        className={`fp-overlay ${showPlans ? 'clickable' : ''}`}
                        onClick={() => setShowPlans(false)}
                    ></div>

                    <div className={`fp-content container ${showPlans ? 'hidden' : ''}`}>
                        <button
                            className="fp-view-btn"
                            onClick={() => setShowPlans(true)}
                        >
                            View Floor Plans
                        </button>
                    </div>

                    {/* Floating Floor Plan Overlay */}
                    <div className={`fp-display ${showPlans ? 'visible' : ''}`}>
                        {/* Close button for explicit exit */}
                        <button className="fp-close-btn" onClick={() => setShowPlans(false)}>×</button>

                        {(() => {
                            const src1 = galleryConfig.floorPlanConfig.floor1;
                            const src2 = galleryConfig.floorPlanConfig.floor2;
                            const isPdf = src1?.toLowerCase().endsWith('.pdf');

                            if (isPdf) {
                                return <iframe src={`${src1}#toolbar=0&navpanes=0&scrollbar=0&zoom=65`} title="Floor Plan" className="fp-frame" />;
                            }

                            return (
                                <div className="fp-images-container">
                                    <img src={src1} alt="Floor Plan 1" className="fp-image" />
                                    {src2 && src1 !== src2 && (
                                        <img src={src2} alt="Floor Plan 2" className="fp-image" />
                                    )}
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </div>

            <style>{`
        .floor-plans-section {
            position: relative;
            height: 200vh; /* Track depth */
            z-index: 10;
        }

        .fp-sticky-wrapper {
            position: sticky;
            top: 0;
            height: 100vh;
            width: 100%;
            overflow: hidden;
            background: #111;
        }

        .fp-background-container {
            width: 100%;
            height: 100%;
            position: relative;
        }

        /* Rotated Background */
        .fp-background {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            transform: rotate(180deg); 
            z-index: 1;
            filter: none;
            transition: filter 0.5s ease;
        }
        
        .fp-background img {
            width: 100%; height: 100%; object-fit: cover;
        }

        /* Overlay Darkener */
        .fp-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.1);
            z-index: 2;
            transition: background 0.3s;
        }
        .fp-overlay.clickable {
             cursor: pointer;
             background: rgba(0,0,0,0.4); /* Darker when open to focus attention */
        }

        /* Main Content */
        .fp-content {
            position: relative;
            z-index: 10;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end; /* Bottom alignment */
            padding-bottom: 3rem;
            pointer-events: none;
            transition: opacity 0.3s;
        }
        .fp-content.hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        .fp-view-btn {
            pointer-events: auto;
            display: inline-block;
            text-decoration: none;
            color: #fff;
            border: 1px solid #fff;
            background: transparent;
            padding: 1rem 3rem;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .fp-view-btn:hover {
            background: #fff;
            color: #000;
            letter-spacing: 0.25em;
        }

        /* The Reveal Floor Plan Image */
        .fp-display {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%) scale(0.95);
            width: 90%;
            height: 90%;
            max-width: 1400px;
            z-index: 20; /* Higher z-index */
            opacity: 0;
            pointer-events: none;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            border-radius: 4px;
            overflow-y: auto; /* Allow scrolling for stacked images */
            overflow-x: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
            background: #fff;
        }

        .fp-display.visible {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
            pointer-events: auto;
        }
        
        /* Close Button inside Modal */
        .fp-close-btn {
            position: sticky; /* Sticky close button */
            top: 1rem;
            left: calc(100% - 3.5rem); /* Positioned right */
            z-index: 30;
            background: black;
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 1.5rem;
            line-height: 1;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.8;
            transition: opacity 0.2s;
            margin-top: 1rem; /* Spacing */
        }
        .fp-close-btn:hover { opacity: 1; }
        
        .fp-frame {
            width: 100%;
            height: 100%;
            border: none;
            display: block;
            object-fit: contain;
        }

        .fp-images-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
            gap: 2rem;
        }

        .fp-image {
            width: 100%;
            height: auto;
            max-width: 1000px;
            object-fit: contain;
        }
        
        /* Blur bg when open */
        .floor-plans-section:has(.fp-display.visible) .fp-background {
            filter: brightness(0.3) blur(5px);
        }
        
        @media (max-width: 768px) {
            .fp-display { width: 95%; height: 70%; }
            .fp-view-btn { padding: 0.8rem 2rem; font-size: 0.9rem; }
            .fp-content { padding-bottom: 6rem; }
            .fp-images-container { padding: 1rem; gap: 1rem; }
            .fp-close-btn { 
                top: 0.5rem; 
                left: calc(100% - 3rem); 
                margin-top: 0.5rem;
            }
        }
      `}</style>
        </section>
    );
};

export default FloorPlans;

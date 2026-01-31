import React from 'react';
import { images, propertyInfo, activeId } from '../config/propertyConfig';
import FadeIn from './FadeIn';

const Hero = () => {
    const isBrickellia = activeId === 'brickellia5168';

    const scrollToGallery = () => {
        const gallery = document.querySelector('.gallery-section');
        if (gallery) {
            gallery.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <section className="hero">
            {/* Video Background */}
            {images.video ? (
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={images.video} type="video/mp4" />
                </video>
            ) : (
                <div className="hero-video-fallback"></div>
            )}

            {/* Mobile Image Background */}
            <img
                src={images.cover}
                alt={propertyInfo.address}
                className="hero-mobile-bg"
            />

            {/* Clean, Modern Overlay (Subtle) */}
            <div className="hero-overlay"></div>

            <div className="hero-container">
                <div className="hero-main-stack">
                    <FadeIn direction="up" distance="40px" duration={3.5} delay={200}>
                        <h1 className="hero-name">
                            <span className="addr-num">{propertyInfo.address.split(' ')[0]}</span>
                            {/* Desktop: One line */}
                            <span className="addr-text-desktop">
                                {propertyInfo.address.split(' ').slice(1).join(' ')}
                            </span>
                            {/* Mobile: Stacked */}
                            <span className="addr-text-mobile">
                                {propertyInfo.address.split(' ').slice(1).map((word, i) => (
                                    <span key={i} className="addr-line">{word}</span>
                                ))}
                            </span>
                        </h1>
                    </FadeIn>
                </div>

                {/* Floating Modern HUD */}

            </div>

            <style>{`
                /* Hero Section Styles */
                .hero {
                    position: relative;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    background: #fff;
                }

                /* Video Background */
                .hero-video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                    opacity: 0.95;
                }

                /* Mobile Image Background */
                .hero-mobile-bg {
                    display: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                }

                /* Fallback gradient */
                .hero-video-fallback {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #f8f8f8;
                    background-image: url('${images.cover}');
                    background-size: cover;
                    background-position: center;
                    z-index: 0;
                }

                /* Refined Modern Overlay - Very Subtle */
                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        to bottom,
                        rgba(10, 35, 90, 0.5) 0%, /* Richer, deeper blue */
                        rgba(10, 35, 90, 0.15) 50%,
                        rgba(0,0,0,0.2) 100%
                    );
                    z-index: 1;
                }

                /* Container & Content Layout */
                .hero-container {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center; /* Center horizontally */
                    padding-top: 15vh;
                    padding-left: 0; /* Remove left padding */
                }

                .hero-main-stack {
                    text-align: center; /* Center text */
                    width: 100%;
                    padding: 0 2rem;
                    margin-bottom: 0;
                }

                /* Typography - DRAMATIC MARCELLUS */
                /* Typography - MODERN EDITORIAL (Montserrat) */
                .hero-name {
                    font-family: 'Montserrat', sans-serif; /* Geometric Modern */
                    font-size: clamp(2rem, 5vw, 4.5rem); 
                    font-weight: 300;
                    text-transform: uppercase;
                    letter-spacing: 0.25em; /* Extra wide for Montserrat */
                    margin: 0;
                    line-height: 1.1;
                    color: #ffffff;
                    text-shadow: 0 4px 30px rgba(0,0,0,0.3);
                    margin-right: -0.25em;
                }

                .addr-num, .addr-text-desktop { display: inline; }
                .addr-text-desktop { margin-left: 0.3em; }
                .addr-text-mobile { display: none; }

                .hero-name-divider {
                    width: 100px;
                    height: 1px;
                    background: #ffffff;
                    margin: 2rem auto 0;
                    opacity: 0.7;
                }
                
                /* ... existing ... */

                /* Mobile Adjustments */
                @media (max-width: 900px) {
                    /* ... existing ... */
                    
                    .hero-container {
                        align-items: flex-start; /* Left align everything */
                        padding-left: 8vw; /* Indent */
                    }

                    .hero-main-stack {
                        text-align: left;
                        padding: 0;
                        margin-top: 0; /* Changed from -15vh to 0 to lower text */
                    }

                    .addr-text-desktop { display: none; }
                    .addr-text-mobile { display: block; }

                    .hero-name {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    
                    /* Unified Mobile Typography */
                    .addr-num, .addr-line {
                        display: block;
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 300; /* Unified light weight */
                        font-size: clamp(2.5rem, 10vw, 4.5rem); /* Same size for all */
                        letter-spacing: 0.05em;
                        line-height: 1.1;
                        margin: 0;
                    }

                    .hero-name-divider {
                        display: none;
                    }
                    .hero-description {
                        display: none;
                    }
                    .hero-hud-wrapper {
                        display: none; /* Hide bottom text on mobile */
                    }
                    .hero-hud {
                        padding: 0.6rem 1.5rem;
                        flex-wrap: wrap;
                        justify-content: center;
                        border-radius: 20px;
                        gap: 0.8rem;
                        background: rgba(255, 255, 255, 0.2);
                    }
                    .hud-divider {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;

import Hero from '../components/Hero';
import Details from '../components/Details';
import Gallery from '../components/Gallery';
import FullScreenImage from '../components/FullScreenImage';
import StaticSection from '../components/StaticSection';
import FadeIn from '../components/FadeIn';
import { galleryConfig } from '../galleryData';

const Home = () => {
    return (
        <main>
            <Hero />
            <FullScreenImage image={galleryConfig.lifestyleImage}>
                <FadeIn direction="up" distance="30px">
                    <h2 className="fs-main-title">Elegant Georgian Inspired Estate Home</h2>
                </FadeIn>
                <div className="fs-content-layout">
                    <FadeIn direction="right" distance="40px">
                        <div className="fs-stats-container text-left">
                            <div className="fs-stats-list uppercase" style={{
                                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',  /* Increased from 0.9 min */
                                letterSpacing: '0.1rem',
                                lineHeight: '1.6',
                                marginBottom: '1.5rem',
                                fontWeight: '300',
                                textAlign: 'left'
                            }}>
                                <span className="stat-line">7,890 SQ FT | Half-Acre Lot</span>
                                <span className="stat-line">5 Bedrooms | 6 Bathrooms</span>
                                <span className="stat-line">2 Powder Rooms | Study</span>
                                <span className="stat-line">Game Room | Office | Den</span>
                                <span className="stat-line">Outdoor Terrace | Pool</span>
                                <span className="stat-line">4-Car Garage</span>
                            </div>
                            <div className="fs-price" style={{
                                fontSize: 'clamp(2.5rem, 4vw, 4rem)', /* Increased significantly */
                                fontFamily: 'var(--font-heading)',
                                letterSpacing: '0.05rem',
                                textAlign: 'left'
                            }}>
                                $6,650,000
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left" distance="40px" delay={300}>
                        <div className="fs-agent text-right">
                            <h4 className="fs-agent-title uppercase">Sales Agent</h4>
                            <p className="fs-agent-name">Cole Swearingen</p>
                            <p className="fs-agent-contact">972.971.9586</p>
                            <p className="fs-agent-email">cole.swearingen@compass.com</p>
                        </div>
                    </FadeIn>

                    <style>{`
                        .fs-main-title {
                            font-size: clamp(1.8rem, 3.5vw, 3rem);
                            font-family: var(--font-heading);
                            margin-bottom: 6rem; /* More breathing room */
                            letter-spacing: 0.1rem;
                            text-align: center;
                            text-transform: uppercase;
                            line-height: 1.2;
                            text-shadow: 0 4px 20px rgba(0,0,0,0.5);
                            width: 100%;
                        }
                        .fs-content-layout {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            align-items: center; /* Center vertically for better balance */
                            gap: 6rem; 
                            width: 100%;
                            max-width: 1200px;
                            margin: 0 auto;
                            color: white;
                            padding: 0 2rem;
                        }
                        .fs-stats-container {
                            /* Left side specific adjustments if needed */
                        }
                        .stat-line { display: block; }
                        
                        .fs-agent {
                            text-align: right;
                        }
                        .fs-agent-title {
                            font-size: 0.9rem;
                            letter-spacing: 0.2em;
                            margin-bottom: 1.5rem;
                            opacity: 0.8;
                        }
                        .fs-agent-name {
                            font-size: clamp(2rem, 3vw, 2.5rem); /* Much Bigger to balance Left Side */
                            font-family: var(--font-heading);
                            margin-bottom: 0.5rem;
                            line-height: 1.1;
                        }
                        .fs-agent-contact {
                            font-size: 1.3rem; /* Slightly bigger */
                            margin-bottom: 0.5rem;
                            font-weight: 300;
                            opacity: 0.9;
                        }
                        .fs-agent-email {
                            font-size: 1rem;
                            opacity: 0.8;
                            border-bottom: 1px solid rgba(255,255,255,0.4);
                            display: inline-block;
                            padding-bottom: 2px;
                        }

                        @media (max-width: 900px) {
                            .fs-content-layout {
                                grid-template-columns: 1fr;
                                gap: 4rem;
                                text-align: center;
                            }
                            .fs-main-title { margin-bottom: 3rem; }
                            .fs-agent { text-align: center; }
                            .fs-stats-container { text-align: center !important; }
                            .fs-stats-list, .fs-price { text-align: center !important; }
                        }
                    `}</style>
                </div>
            </FullScreenImage>
            <Details />
            <StaticSection
                image={galleryConfig.staticImage}
                title="Unparalleled Elegance"
                subtitle="Interior Gallery"
            />
            <Gallery />

            {/* Simple Footer for now */}
            <footer style={{
                padding: 'var(--spacing-lg) 0',
                textAlign: 'center',
                borderTop: '1px solid var(--color-border)',
                marginTop: 'var(--spacing-xl)',
                color: 'var(--color-text-light)'
            }}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Lobello Drive. All Rights Reserved.</p>
                </div>
            </footer>
        </main>
    );
};

export default Home;

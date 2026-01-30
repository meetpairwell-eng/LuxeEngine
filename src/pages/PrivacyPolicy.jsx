import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { propertyInfo, agentInfo } from '../config/propertyConfig';

const PrivacyPolicy = () => {
    // Ensure we scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page">
            <SEO />

            <div className="privacy-container">
                <header className="privacy-header">
                    <Link to="/" className="back-link">← Back to Property</Link>
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
                </header>

                <main className="privacy-content">
                    <section>
                        <h2>1. Introduction</h2>
                        <p>
                            We respect your privacy and are committed to protecting it. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit the website for <strong>{propertyInfo.address}</strong> (the "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                        </p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <p>
                            We do not require you to register, create an account, or provide personal information (such as your name or email address) to view this Website.
                        </p>
                        <p>
                            However, we may automatically collect certain aggregated, non-personal analysis data when you visit, including:
                        </p>
                        <ul>
                            <li><strong>Usage Details:</strong> Traffic data, location data, logs, and other communication data and the resources that you access and use on the Website.</li>
                            <li><strong>Device Information:</strong> Information about your computer/mobile device and internet connection, including your IP address, operating system, and browser type.</li>
                        </ul>
                        <p>
                            This data is collected via privacy-focused analytics tools (such as Umami) solely for the purpose of understanding website traffic trends and improving user experience.
                        </p>
                    </section>

                    <section>
                        <h2>3. Third-Party Links & Tools</h2>
                        <p>
                            This Website may contain links to third-party websites or services, such as:
                        </p>
                        <ul>
                            <li><strong>Social Media:</strong> Links to Instagram, Facebook, or other social platforms.</li>
                            <li><strong>Maps:</strong> Embedded Google Maps or Apple Maps services.</li>
                            <li><strong>Real Estate Brokerage Sites:</strong> Links to Compass or other brokerage listings.</li>
                        </ul>
                        <p>
                            These third parties have their own privacy policies and may collect data about you if you interact with their content. We do not control these third parties' tracking technologies or how they may be used.
                        </p>
                    </section>

                    <section>
                        <h2>4. Contact Information</h2>
                        <p>
                            To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                        </p>
                        <p>
                            <strong>{agentInfo.brokerage}</strong><br />
                            Attn: {agentInfo.name}<br />
                            <a href={`mailto:${agentInfo.email}`}>{agentInfo.email}</a>
                        </p>
                    </section>
                </main>
            </div>

            <Footer />

            <style>{`
        .privacy-page {
            background-color: var(--color-bg);
            color: var(--color-text);
            min-height: 100vh;
        }

        .privacy-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 4rem 1.5rem;
        }

        .privacy-header {
            margin-bottom: 4rem;
            text-align: center;
        }

        .back-link {
            display: inline-block;
            margin-bottom: 2rem;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            opacity: 0.7;
        }

        .privacy-header h1 {
            font-family: var(--font-heading);
            font-size: 3rem;
            margin-bottom: 0.5rem;
        }

        .last-updated {
            font-size: 0.9rem;
            opacity: 0.6;
            font-style: italic;
        }

        .privacy-content section {
            margin-bottom: 3rem;
        }

        .privacy-content h2 {
            font-family: var(--font-heading);
            font-size: 1.5rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 0.5rem;
        }

        .privacy-content p, .privacy-content li {
            font-family: var(--font-body);
            line-height: 1.8;
            margin-bottom: 1rem;
            opacity: 0.9;
        }

        .privacy-content ul {
            padding-left: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .privacy-content a {
            text-decoration: underline;
        }
      `}</style>
        </div>
    );
};

export default PrivacyPolicy;

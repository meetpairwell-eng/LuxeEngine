import React from 'react';
import { agentInfo } from '../config/propertyConfig';

const ContactCTA = () => {
    const handleContact = () => {
        window.location.href = `mailto:${agentInfo.email}?subject=Private Tour Request - 5610 Lobello`;
    };

    return (
        <section className="contact-cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">Experience the Residence</h2>
                    <p className="cta-text">
                        The digital tour is only a glimpse. To truly appreciate the scale, light, and detail of 5610 Lobello, a private viewing is essential.
                    </p>
                    <button className="cta-btn" onClick={handleContact}>
                        Visit Lobello
                    </button>
                </div>
            </div>

            <style>{`
                .contact-cta-section {
                    background-color: #fff;
                    padding: 6rem 0 4rem 0;
                    text-align: center;
                }

                .cta-content {
                    max-width: 600px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                }

                .cta-title {
                    font-family: var(--font-heading);
                    font-size: clamp(2rem, 4vw, 3rem);
                    color: var(--color-text);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin: 0;
                }

                .cta-text {
                    font-family: var(--font-body);
                    font-size: 1rem;
                    color: var(--color-text-light);
                    line-height: 1.8;
                    font-weight: 300;
                    margin: 0;
                }

                .cta-btn {
                    margin-top: 1rem;
                    background: transparent;
                    color: var(--color-text);
                    border: 1px solid var(--color-text);
                    padding: 1rem 3rem;
                    font-family: var(--font-body);
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.25em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .cta-btn:hover {
                    background: var(--color-text);
                    color: #fff;
                }

                @media (max-width: 768px) {
                    .contact-cta-section {
                        padding: 4rem 0 2rem 0;
                    }
                    .cta-text {
                        width: 90%;
                    }
                }
            `}</style>
        </section>
    );
};

export default ContactCTA;

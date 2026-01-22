import React from 'react';
import Hero from '../components/Hero';
import Details from '../components/Details';
import Gallery from '../components/Gallery';

const Home = () => {
    return (
        <main>
            <Hero />
            <Details />
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

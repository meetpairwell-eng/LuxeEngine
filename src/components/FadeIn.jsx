import React, { useState, useEffect, useRef } from 'react';

const FadeIn = ({ children, delay = 0, direction = 'up', distance = '30px' }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // Only set to true once (so it doesn't fade out when scrolling up)
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% visible

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    // Calculate transform based on direction
    const getInitialTransform = () => {
        switch (direction) {
            case 'up': return `translateY(${distance})`;
            case 'down': return `translateY(-${distance})`;
            case 'left': return `translateX(${distance})`;
            case 'right': return `translateX(-${distance})`;
            default: return 'none';
        }
    };

    return (
        <div
            className={`fade-in-wrapper ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
            style={{
                '--delay': `${delay}ms`,
                '--initial-transform': getInitialTransform()
            }}
        >
            {children}
            <style>{`
        .fade-in-wrapper {
            opacity: 0;
            transform: var(--initial-transform);
            transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
            transition-delay: var(--delay);
            will-change: opacity, transform;
        }
        .fade-in-wrapper.is-visible {
            opacity: 1;
            transform: translate(0, 0);
        }
      `}</style>
        </div>
    );
};

export default FadeIn;

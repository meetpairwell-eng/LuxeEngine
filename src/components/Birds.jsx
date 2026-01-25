import React from 'react';

const Birds = () => {
    return (
        <div className="birds-container">
            <div className="bird-group bird-group-1">
                <svg viewBox="0 0 50 20" width="30" height="12" className="bird">
                    <path d="M0,10 Q25,20 50,10 L25,0 Z" fill="black" opacity="0.6" />
                    <path d="M0,10 Q15,0 25,10 Q35,0 50,10" fill="none" stroke="black" strokeWidth="1.5" />
                </svg>
                <svg viewBox="0 0 50 20" width="20" height="8" className="bird" style={{ marginLeft: '20px', marginTop: '10px' }}>
                    <path d="M0,10 Q15,0 25,10 Q35,0 50,10" fill="none" stroke="black" strokeWidth="1.5" />
                </svg>
            </div>

            <div className="bird-group bird-group-2">
                <svg viewBox="0 0 50 20" width="25" height="10" className="bird">
                    <path d="M0,10 Q15,0 25,10 Q35,0 50,10" fill="none" stroke="black" strokeWidth="1.5" />
                </svg>
            </div>

            <style>{`
        .birds-container {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 3; /* Above layers, below text */
        }
        
        .bird-group {
            position: absolute;
            opacity: 0.7;
            will-change: transform;
        }
        
        /* Bird 1: High, crossing slowly */
        .bird-group-1 {
            top: 15%;
            left: -10%;
            animation: flyAcross 25s linear infinite;
            animation-delay: 2s;
        }
        
        /* Bird 2: Higher, different speed */
        .bird-group-2 {
            top: 25%;
            left: -10%;
            animation: flyAcross 20s linear infinite;
            animation-delay: 10s;
        }

        @keyframes flyAcross {
            0% { transform: translateX(-10vw) translateY(0) scale(0.8); }
            25% { transform: translateX(25vw) translateY(-2vh) scale(0.9); }
            50% { transform: translateX(50vw) translateY(0) scale(1); }
            75% { transform: translateX(75vw) translateY(2vh) scale(0.9); }
            100% { transform: translateX(110vw) translateY(0) scale(0.8); }
        }
        
        .bird path {
            vector-effect: non-scaling-stroke;
        }
      `}</style>
        </div>
    );
};

export default Birds;

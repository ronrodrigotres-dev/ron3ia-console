import React from 'react';

interface RadarProps {
  active: boolean;
}

export const Radar: React.FC<RadarProps> = ({ active }) => {
  return (
    <div className={`radar-container ${active ? 'scanning' : ''}`}>
      <div className="radar-grid"></div>
      <div className="radar-circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="radar-sweep"></div>
      <div className="radar-center"></div>
      
      <style>{`
        .radar-container {
          position: relative;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #001a1a 0%, #000 70%);
          border: 2px solid #00ffff;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
        }

        .radar-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .radar-circles .circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 50%;
        }

        .circle:nth-child(1) { width: 33%; height: 33%; }
        .circle:nth-child(2) { width: 66%; height: 66%; }
        .circle:nth-child(3) { width: 100%; height: 100%; }

        .radar-sweep {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          background: conic-gradient(from 0deg, rgba(0, 255, 255, 0.5) 0deg, transparent 90deg);
          transform-origin: top left;
          display: none;
        }

        .scanning .radar-sweep {
          display: block;
          animation: sweep 2s linear infinite;
        }

        .radar-center {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          background: #00ffff;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px #00ffff;
        }

        @keyframes sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .scanning::after {
          content: 'SCANNING...';
          position: absolute;
          top: 10px;
          width: 100%;
          text-align: center;
          font-size: 10px;
          letter-spacing: 2px;
          color: #00ffff;
        }
      `}</style>
    </div>
  );
};

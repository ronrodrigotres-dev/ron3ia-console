import { useEffect, useState } from 'react';

export function ScanLine() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="absolute left-0 w-full h-[2px] pointer-events-none z-20"
      style={{ 
        top: `${position}%`,
        background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.8) 50%, transparent 100%)',
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)',
        opacity: position > 95 || position < 5 ? 0 : 1,
        transition: 'opacity 0.1s ease-out',
      }}
    />
  );
}

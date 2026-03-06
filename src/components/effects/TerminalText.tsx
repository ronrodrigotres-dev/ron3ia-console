import { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export function TerminalText({ 
  text, 
  speed = 30, 
  className = '', 
  onComplete,
  showCursor = true 
}: TerminalTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        onComplete?.();
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {showCursor && !isComplete && (
        <span className="inline-block w-2 h-4 bg-neon-cyan ml-1 animate-pulse" />
      )}
    </span>
  );
}

import { useEffect, useState } from 'react';

interface DataStreamProps {
  columns?: number;
  className?: string;
}

export function DataStream({ columns = 8, className = '' }: DataStreamProps) {
  const [streams, setStreams] = useState<Array<{ id: number; chars: string[]; delay: number; speed: number }>>([]);

  useEffect(() => {
    const chars = '01ABCDEF';
    const newStreams = Array.from({ length: columns }, (_, i) => ({
      id: i,
      chars: Array.from({ length: 20 }, () => chars[Math.floor(Math.random() * chars.length)]),
      delay: Math.random() * 2,
      speed: 1 + Math.random() * 2,
    }));
    setStreams(newStreams);
  }, [columns]);

  return (
    <div className={`flex gap-1 overflow-hidden ${className}`}>
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="flex flex-col font-mono text-[10px] leading-tight"
          style={{
            animation: `data-flow ${stream.speed}s linear infinite`,
            animationDelay: `${stream.delay}s`,
          }}
        >
          {stream.chars.map((char, i) => (
            <span
              key={i}
              className="text-neon-cyan/30"
              style={{
                opacity: 1 - (i / stream.chars.length) * 0.7,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

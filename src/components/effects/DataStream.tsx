import { useMemo } from 'react';

interface DataStreamProps {
  columns?: number;
  className?: string;
}

interface StreamColumn {
  id: number;
  chars: string[];
  delay: number;
  speed: number;
}

const CHARS = '01ABCDEF';

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export function DataStream({ columns = 8, className = '' }: DataStreamProps) {
  const streams = useMemo<StreamColumn[]>(() => {
    return Array.from({ length: columns }, (_, i) => {
      const chars = Array.from({ length: 20 }, (_, charIndex) => {
        const normalized = pseudoRandom(i * 101 + charIndex * 17 + 13);
        const index = Math.floor(normalized * CHARS.length);
        return CHARS[index % CHARS.length];
      });

      const delay = pseudoRandom(i * 29 + 7) * 2;
      const speed = 1 + pseudoRandom(i * 43 + 11) * 2;

      return {
        id: i,
        chars,
        delay,
        speed,
      };
    });
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

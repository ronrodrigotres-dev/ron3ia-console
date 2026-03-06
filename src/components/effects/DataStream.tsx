interface DataStreamProps {
  columns?: number;
  className?: string;
}

export function DataStream({ columns = 8, className = '' }: DataStreamProps) {
  const chars = '01ABCDEF';
  const streams = Array.from({ length: columns }, (_, i) => ({
    id: i,
    chars: Array.from({ length: 20 }, (_, idx) => chars[(i * 7 + idx * 3) % chars.length]),
    delay: (i % 5) * 0.35,
    speed: 1 + (i % 4) * 0.45,
  }));

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

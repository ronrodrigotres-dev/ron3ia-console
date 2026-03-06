import { useState, useEffect } from 'react';

interface StatusIndicatorProps {
  label: string;
  value: string;
  status?: 'online' | 'processing' | 'standby' | 'alert';
  className?: string;
}

export function StatusIndicator({ label, value, status = 'online', className = '' }: StatusIndicatorProps) {
  const renderValue =
    status === 'processing' ? <ProcessingValue key={value} value={value} /> : value;

  const statusColors = {
    online: 'bg-neon-cyan',
    processing: 'bg-yellow-400',
    standby: 'bg-gray-500',
    alert: 'bg-red-500',
  };

  return (
    <div className={`flex items-center gap-3 px-3 py-2 glass-card rounded-lg ${className}`}>
      <div className={`w-2 h-2 rounded-full ${statusColors[status]} animate-pulse`} 
        style={{ boxShadow: `0 0 10px currentColor` }} 
      />
      <div className="flex flex-col">
        <span className="text-[10px] text-white/50 font-mono uppercase tracking-wider">{label}</span>
        <span className="text-xs text-white/80 font-mono">{renderValue}</span>
      </div>
    </div>
  );
}

function ProcessingValue({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(() => `${parseNumericValue(value)}%`);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayValue((prev) => {
        const current = parseNumericValue(prev);
        const next = Math.min(100, current + 2);
        return `${next}%`;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <>{displayValue}</>;
}

function parseNumericValue(input: string) {
  const parsed = Number.parseInt(input.replace(/\D/g, ''), 10);
  return Number.isFinite(parsed) ? parsed : 0;
}

import { useEffect, useMemo, useState } from 'react';

interface StatusIndicatorProps {
  label: string;
  value: string;
  status?: 'online' | 'processing' | 'standby' | 'alert';
  className?: string;
}

export function StatusIndicator({ label, value, status = 'online', className = '' }: StatusIndicatorProps) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (status !== 'processing') return;

    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 200);

    return () => clearInterval(interval);
  }, [status]);

  const displayValue = useMemo(() => {
    if (status !== 'processing') return value;

    const base = parseInt(value.replace(/\D/g, ''), 10) || 0;
    const boost = Math.min(58, tick * 3);
    return `${Math.min(100, base + boost)}%`;
  }, [status, tick, value]);

  const statusColors = {
    online: 'bg-neon-cyan',
    processing: 'bg-yellow-400',
    standby: 'bg-gray-500',
    alert: 'bg-red-500',
  };

  return (
    <div className={`flex items-center gap-3 px-3 py-2 glass-card rounded-lg ${className}`}>
      <div
        className={`w-2 h-2 rounded-full ${statusColors[status]} animate-pulse`}
        style={{ boxShadow: '0 0 10px currentColor' }}
      />
      <div className="flex flex-col">
        <span className="text-[10px] text-white/50 font-mono uppercase tracking-wider">{label}</span>
        <span className="text-xs text-white/80 font-mono">{displayValue}</span>
      </div>
    </div>
  );
}

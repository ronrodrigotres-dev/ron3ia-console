import { useEffect, useRef } from 'react';

interface RadarProps {
  size?: number;
  className?: string;
}

export function Radar({ size = 200, className = '' }: RadarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;

    let angle = 0;
    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      const centerX = size / 2;
      const centerY = size / 2;
      const radius = size / 2 - 10;

      // Draw concentric circles
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius / 4) * i, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + i * 0.05})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw cross lines
      ctx.beginPath();
      ctx.moveTo(centerX, 10);
      ctx.lineTo(centerX, size - 10);
      ctx.moveTo(10, centerY);
      ctx.lineTo(size - 10, centerY);
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw sweep
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);

      const gradient = ctx.createConicGradient(angle, 0, 0);
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
      gradient.addColorStop(0.7, 'rgba(0, 255, 255, 0)');
      gradient.addColorStop(0.85, 'rgba(0, 255, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 255, 255, 0.5)');

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.restore();

      // Draw center dot
      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
      ctx.fill();

      // Draw blips
      const blips = [
        { angle: 0.5, distance: 0.6, opacity: Math.sin(Date.now() / 500) * 0.5 + 0.5 },
        { angle: 2.3, distance: 0.8, opacity: Math.sin(Date.now() / 700 + 1) * 0.5 + 0.5 },
        { angle: 4.1, distance: 0.4, opacity: Math.sin(Date.now() / 600 + 2) * 0.5 + 0.5 },
      ];

      blips.forEach((blip) => {
        const x = centerX + Math.cos(blip.angle) * radius * blip.distance;
        const y = centerY + Math.sin(blip.angle) * radius * blip.distance;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${blip.opacity})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 255, ${blip.opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      angle += 0.02;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationId);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
      style={{ imageRendering: 'crisp-edges' }}
    />
  );
}

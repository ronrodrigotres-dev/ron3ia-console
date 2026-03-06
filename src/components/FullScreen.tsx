import type { ReactNode } from 'react';

interface FullScreenProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function FullScreen({ children, className = '', id }: FullScreenProps) {
  return (
    <section 
      id={id}
      className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}

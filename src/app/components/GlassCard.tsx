import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <div
      className={`
        bg-card/80 backdrop-blur-xl border border-border rounded-2xl
        shadow-lg
        ${hover ? 'hover:shadow-xl hover:scale-[1.02] transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

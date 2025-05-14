import React, { ReactNode } from 'react';

interface GlassPaneProps {
  children: ReactNode;
  className?: string;
}

export const GlassPane: React.FC<GlassPaneProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`backdrop-blur-md bg-white/10 border-b border-white/20 ${className}`}
    >
      {children}
    </div>
  );
};
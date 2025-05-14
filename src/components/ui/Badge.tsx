import React, { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/70 text-white ${className}`}
    >
      {children}
    </span>
  );
};
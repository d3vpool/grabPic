import React from 'react';

export const Loader: React.FC<{ size?: 'sm' | 'md' | 'lg', className?: string }> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-5 w-5 border-2',
    md: 'h-10 w-10 border-[3px]',
    lg: 'h-16 w-16 border-4',
  };

  return (
    <div className={`flex justify-center items-center ${className}`} role="status" aria-label="loading">
      <div
        className={`animate-spin rounded-full border-white/10 border-t-brand-yellow ${sizeClasses[size]} motion-reduce:animate-[spin_3s_linear_infinite]`}
      />
    </div>
  );
};

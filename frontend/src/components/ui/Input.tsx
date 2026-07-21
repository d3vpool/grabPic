import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && <label className="text-sm font-medium text-gray-300">{label}</label>}
        <input
          ref={ref}
          className={`px-4 py-2.5 min-h-[44px] bg-white/5 border rounded-xl text-white placeholder-white/30 transition-all duration-200 outline-none focus:ring-2 ${
            error 
              ? 'border-red-500/50 focus:ring-red-500/50' 
              : 'border-white/10 focus:border-brand-yellow/50 focus:ring-brand-yellow/50'
          } ${className}`}
          {...props}
        />
        {error && <span className="text-xs text-red-400 font-medium mt-0.5">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';

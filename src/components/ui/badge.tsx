import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
  children: ReactNode;
}

export function Badge({ variant = 'default', className, children }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    secondary: 'bg-gray-200 text-gray-600',
    outline: 'border border-gray-300 text-gray-600',
  };

  return (
    <span className={twMerge(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
}
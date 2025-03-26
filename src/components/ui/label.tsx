import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface LabelProps {
  htmlFor?: string;
  className?: string;
  children: ReactNode;
}

export function Label({ htmlFor, className, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={twMerge('block text-sm font-medium text-gray-700', className)}>
      {children}
    </label>
  );
}
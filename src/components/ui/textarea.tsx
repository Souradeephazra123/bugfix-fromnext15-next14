import { TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={twMerge(
        'block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold focus:ring-opacity-50',
        className
      )}
      {...props}
    />
  );
}
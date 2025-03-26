import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface AlertProps {
  variant?: 'default' | 'outline';
  className?: string;
  children: ReactNode;
}

export const Alert: FC<AlertProps> = ({ variant = 'default', className, children }) => {
  return (
    <div
      className={twMerge(
        'p-4 rounded-md flex items-start space-x-3',
        variant === 'default' ? 'bg-red-100 text-red-800' : '',
        variant === 'outline' ? 'border border-red-200 bg-white text-red-800' : '',
        className
      )}
    >
      {children}
    </div>
  );
};

interface AlertTitleProps {
  className?: string;
  children: ReactNode;
}

export const AlertTitle: FC<AlertTitleProps> = ({ className, children }) => {
  return <h3 className={twMerge('font-semibold', className)}>{children}</h3>;
};

interface AlertDescriptionProps {
  className?: string;
  children: ReactNode;
}

export const AlertDescription: FC<AlertDescriptionProps> = ({ className, children }) => {
  return <p className={twMerge('text-sm', className)}>{children}</p>;
};
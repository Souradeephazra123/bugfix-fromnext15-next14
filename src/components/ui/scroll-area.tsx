import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ScrollAreaProps {
  children: ReactNode;
  className?: string;
}

export const ScrollArea: FC<ScrollAreaProps> = ({ children, className }) => {
  return (
    <div className={twMerge('overflow-auto', className)}>
      {children}
    </div>
  );
};
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface ProgressProps {
  value: number;
  className?: string;
}

export const Progress: FC<ProgressProps> = ({ value, className }) => {
  return (
    <div className={twMerge('relative w-full h-2 bg-gray-200 rounded-full overflow-hidden', className)}>
      <div
        className="absolute top-0 left-0 h-full bg-green-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
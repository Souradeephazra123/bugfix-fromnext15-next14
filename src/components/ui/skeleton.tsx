import { FC } from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={`bg-gray-200 animate-pulse ${className}`}></div>
  );
};
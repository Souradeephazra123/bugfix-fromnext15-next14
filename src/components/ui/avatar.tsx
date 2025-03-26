import { FC, ReactNode } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { twMerge } from 'tailwind-merge';

interface AvatarProps {
  className?: string;
  children: ReactNode;
}

export const Avatar: FC<AvatarProps> = ({ className, children }) => {
  return (
    <AvatarPrimitive.Root className={twMerge('inline-flex items-center justify-center overflow-hidden rounded-full', className)}>
      {children}
    </AvatarPrimitive.Root>
  );
};

interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const AvatarImage: FC<AvatarImageProps> = ({ src, alt, className }) => {
  return (
    <AvatarPrimitive.Image src={src} alt={alt} className={twMerge('w-full h-full object-cover', className)} />
  );
};

interface AvatarFallbackProps {
  className?: string;
  children: ReactNode;
}

export const AvatarFallback: FC<AvatarFallbackProps> = ({ className, children }) => {
  return (
    <AvatarPrimitive.Fallback className={twMerge('flex items-center justify-center w-full h-full bg-gray-200 text-gray-700', className)}>
      {children}
    </AvatarPrimitive.Fallback>
  );
};
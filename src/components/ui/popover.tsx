import { FC, ReactNode } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { twMerge } from 'tailwind-merge';

interface PopoverProps {
  children: ReactNode;
}

export const Popover: FC<PopoverProps> = ({ children }) => {
  return <PopoverPrimitive.Root>{children}</PopoverPrimitive.Root>;
};

interface PopoverTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

export const PopoverTrigger: FC<PopoverTriggerProps> = ({ children, asChild }) => {
  return <PopoverPrimitive.Trigger asChild={asChild}>{children}</PopoverPrimitive.Trigger>;
};

interface PopoverContentProps {
  children: ReactNode;
  className?: string;
}

export const PopoverContent: FC<PopoverContentProps> = ({ children, className }) => {
  return (
    <PopoverPrimitive.Content
      side="bottom"
      align="center"
      sideOffset={4}
      className={twMerge(
        'z-50 p-4 bg-white rounded-md shadow-md border border-gray-200',
        className
      )}
    >
      {children}
      <PopoverPrimitive.Arrow className="fill-current text-white" />
    </PopoverPrimitive.Content>
  );
};
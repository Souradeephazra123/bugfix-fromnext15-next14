import { FC, ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { twMerge } from 'tailwind-merge';

interface TooltipProps {
  children: ReactNode;
}

export const TooltipProvider: FC<TooltipProps> = ({ children }) => {
  return <TooltipPrimitive.Provider>{children}</TooltipPrimitive.Provider>;
};

export const Tooltip: FC<TooltipProps> = ({ children }) => {
  return <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>;
};

interface TooltipTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

export const TooltipTrigger: FC<TooltipTriggerProps> = ({ children,asChild }) => {
  return <TooltipPrimitive.Trigger asChild={asChild}>{children}</TooltipPrimitive.Trigger>;
};

interface TooltipContentProps {
  children: ReactNode;
  className?: string;
}

export const TooltipContent: FC<TooltipContentProps> = ({ children, className }) => {
  return (
    <TooltipPrimitive.Content
      side="top"
      align="center"
      sideOffset={4}
      className={twMerge(
        'z-50 p-2 text-sm leading-none text-white bg-black rounded-md shadow-md',
        className
      )}
    >
      {children}
      <TooltipPrimitive.Arrow className="fill-current text-black" />
    </TooltipPrimitive.Content>
  );
};
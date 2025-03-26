import { FC, ReactNode } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

interface DropdownMenuProps {
  children: ReactNode;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ children }) => {
  return <DropdownMenuPrimitive.Root>{children}</DropdownMenuPrimitive.Root>;
};

interface DropdownMenuTriggerProps {
  asChild?: boolean;
  children: ReactNode;
}

export const DropdownMenuTrigger: FC<DropdownMenuTriggerProps> = ({ asChild, children }) => {
  return (
    <DropdownMenuPrimitive.Trigger asChild={asChild}>
      {children}
    </DropdownMenuPrimitive.Trigger>
  );
};

interface DropdownMenuContentProps {
  align?: 'start' | 'center' | 'end';
  className?: string;
  children: ReactNode;
}

export const DropdownMenuContent: FC<DropdownMenuContentProps> = ({ align = 'start', className, children }) => {
  return (
    <DropdownMenuPrimitive.Content
      align={align}
      className={twMerge(
        'bg-white border border-gray-200 rounded-md shadow-lg p-2',
        className
      )}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  );
};

interface DropdownMenuItemProps {
  className?: string;
  children: ReactNode;
}

export const DropdownMenuItem: FC<DropdownMenuItemProps> = ({ className, children }) => {
  return (
    <DropdownMenuPrimitive.Item
      className={twMerge(
        'flex items-center px-2 py-1.5 text-sm text-gray-700 rounded-md cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-100',
        className
      )}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
};
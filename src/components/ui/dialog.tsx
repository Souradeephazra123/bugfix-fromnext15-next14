import { FC, ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export const Dialog: FC<DialogProps> = ({ open, onOpenChange, children }) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DialogPrimitive.Root>
  );
};

interface DialogTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

export const DialogTrigger: FC<DialogTriggerProps> = ({ children, asChild }) => {
  return <DialogPrimitive.Trigger asChild={asChild}>{children}</DialogPrimitive.Trigger>;
};

interface DialogContentProps {
  children: ReactNode;
  className?: string;
}

export const DialogContent: FC<DialogContentProps> = ({ children, className }) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <DialogPrimitive.Content
        className={twMerge(
          'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg',
          className
        )}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

interface DialogHeaderProps {
  children: ReactNode;
  className?: string;
}

export const DialogHeader: FC<DialogHeaderProps> = ({ children, className }) => {
  return <div className={twMerge('mb-4', className)}>{children}</div>;
};

interface DialogTitleProps {
  children: ReactNode;
  className?: string;
}

export const DialogTitle: FC<DialogTitleProps> = ({ children, className }) => {
  return <DialogPrimitive.Title className={twMerge('text-lg font-semibold', className)}>{children}</DialogPrimitive.Title>;
};

interface DialogDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const DialogDescription: FC<DialogDescriptionProps> = ({ children, className }) => {
  return <DialogPrimitive.Description className={twMerge('text-sm text-gray-500', className)}>{children}</DialogPrimitive.Description>;
};


interface DialogFooterProps {
  children: ReactNode;
  className?: string;
}

export const DialogFooter: FC<DialogFooterProps> = ({ children, className }) => {
  return <div className={twMerge('mt-4', className)}>{children}</div>;
};
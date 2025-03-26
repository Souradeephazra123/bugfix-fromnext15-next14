import { FC, ReactNode } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { twMerge } from 'tailwind-merge';

interface AccordionProps {
  type: 'single' | 'multiple';
  collapsible?: boolean;
  className?: string;
  children: ReactNode;
}

export const Accordion: FC<AccordionProps> = ({ type, collapsible, className, children }) => {
  return (
    <AccordionPrimitive.Root
      type={type}
      collapsible={collapsible}
      className={twMerge('w-full', className)}
    >
      {children}
    </AccordionPrimitive.Root>
  );
};

interface AccordionItemProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export const AccordionItem: FC<AccordionItemProps> = ({ value, className, children }) => {
  return (
    <AccordionPrimitive.Item value={value} className={twMerge('border-b border-gray-200', className)}>
      {children}
    </AccordionPrimitive.Item>
  );
};

interface AccordionTriggerProps {
  className?: string;
  children: ReactNode;
}

export const AccordionTrigger: FC<AccordionTriggerProps> = ({ className, children }) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={twMerge(
          'flex-1 text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-brand-gold focus-visible:ring-opacity-75',
          className
        )}
      >
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

interface AccordionContentProps {
  className?: string;
  children: ReactNode;
}

export const AccordionContent: FC<AccordionContentProps> = ({ className, children }) => {
  return (
    <AccordionPrimitive.Content
      className={twMerge(
        'px-4 py-2 text-sm text-gray-700',
        className
      )}
    >
      {children}
    </AccordionPrimitive.Content>
  );
};
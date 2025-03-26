import { FC, ReactNode } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';

interface RadioGroupProps {
  defaultValue?: string;
  className?: string;
  children: ReactNode;
}

export const RadioGroup: FC<RadioGroupProps> = ({ defaultValue, className, children }) => {
  return (
    <RadioGroupPrimitive.Root defaultValue={defaultValue} className={twMerge('space-y-2', className)}>
      {children}
    </RadioGroupPrimitive.Root>
  );
};

interface RadioGroupItemProps {
  value: string;
  id: string;
  className?: string;
}

export const RadioGroupItem: FC<RadioGroupItemProps> = ({ value, id, className }) => {
  return (
    <RadioGroupPrimitive.Item
      value={value}
      id={id}
      className={twMerge(
        'w-4 h-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-opacity-50',
        className
      )}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-brand-gold" />
    </RadioGroupPrimitive.Item>
  );
};
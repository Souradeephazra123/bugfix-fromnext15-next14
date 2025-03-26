import { FC } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@heroicons/react/solid';
import { twMerge } from 'tailwind-merge';

interface CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onCheckedChange, className }) => {
  return (
    <CheckboxPrimitive.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={twMerge(
        'w-5 h-5 rounded border border-gray-300 bg-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold',
        className
      )}
    >
      <CheckboxPrimitive.Indicator>
        <CheckIcon className="w-4 h-4 text-brand-gold" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
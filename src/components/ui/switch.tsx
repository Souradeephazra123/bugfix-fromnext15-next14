import { FC } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export const Switch: FC<SwitchProps> = ({ checked, onCheckedChange, className }) => {
  return (
    <SwitchPrimitive.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={twMerge(
        'relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold',
        checked ? 'bg-brand-gold' : 'bg-gray-200',
        className
      )}
    >
      <SwitchPrimitive.Thumb
        className={twMerge(
          'inline-block w-4 h-4 transform bg-white rounded-full transition-transform',
          checked ? 'translate-x-6' : 'translate-x-1'
        )}
      />
    </SwitchPrimitive.Root>
  );
};
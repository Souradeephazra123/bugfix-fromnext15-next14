import { FC, ReactNode } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { twMerge } from "tailwind-merge";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

interface SelectProps {
  children: ReactNode;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  value?: string;
}

export const Select: FC<SelectProps> = ({
  children,
  onValueChange,
  defaultValue,
  value,
}) => {
  return (
    <SelectPrimitive.Root
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      value={value}
    >
      {children}
    </SelectPrimitive.Root>
  );
};

interface SelectTriggerProps {
  children: ReactNode;
  className?: string;
}

export const SelectTrigger: FC<SelectTriggerProps & React.ComponentPropsWithoutRef<'button'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <SelectPrimitive.Trigger
      {...props}
      className={twMerge(
        "inline-flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold",
        className
      )}
    >
      {children}
      <SelectPrimitive.Icon className="ml-2">
        <ChevronDownIcon className="w-5 h-5 text-gray-400" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

interface SelectContentProps {
  children: ReactNode;
  className?: string;
}

export const SelectContent: FC<SelectContentProps> = ({
  children,
  className,
}) => {
  return (
    <SelectPrimitive.Content
      className={twMerge(
        "z-10 bg-white border border-gray-200 rounded-md shadow-lg",
        className
      )}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  );
};

interface SelectItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export const SelectItem: FC<SelectItemProps> = ({
  value,
  children,
  className,
}) => {
  return (
    <SelectPrimitive.Item
      value={value}
      className={twMerge(
        "relative flex items-center px-3 py-2 text-sm text-gray-700 rounded-md cursor-pointer select-none focus:bg-gray-100 focus:text-gray-900",
        className
      )}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute left-0 inline-flex items-center justify-center w-6 h-full">
        <CheckIcon className="w-4 h-4 text-brand-gold" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

interface SelectValueProps {
  placeholder?: string;
  className?: string;
}

export const SelectValue: FC<SelectValueProps> = ({
  placeholder,
  className,
}) => {
  return (
    <SelectPrimitive.Value
      placeholder={placeholder}
      className={twMerge("text-gray-500", className)}
    />
  );
};

interface SelectGroupProps {
  children: ReactNode;
  className?: string;
}

export const SelectGroup: FC<SelectGroupProps> = ({ children, className }) => {
  return (
    <SelectPrimitive.Group className={twMerge("p-1", className)}>
      {children}
    </SelectPrimitive.Group>
  );
};

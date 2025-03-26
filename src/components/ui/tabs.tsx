import { FC, ReactNode } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";

interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: ReactNode;
}

export const Tabs: FC<TabsProps> = ({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
}) => {
  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={twMerge("w-full", className)}
    >
      {children}
    </TabsPrimitive.Root>
  );
};

interface TabsListProps {
  className?: string;
  children: ReactNode;
}

export const TabsList: FC<TabsListProps> = ({ className, children }) => {
  return (
    <TabsPrimitive.List
      className={twMerge("flex border-b border-gray-200", className)}
    >
      {children}
    </TabsPrimitive.List>
  );
};

interface TabsTriggerProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

export const TabsTrigger: FC<TabsTriggerProps> = ({
  value,
  className,
  children,
  disabled,
}) => {
  return (
    <TabsPrimitive.Trigger
      value={value}
      disabled={disabled}
      className={twMerge(
        "px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-brand-gold focus-visible:ring-opacity-75",
        className
      )}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
};

interface TabsContentProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export const TabsContent: FC<TabsContentProps> = ({
  value,
  className,
  children,
}) => {
  return (
    <TabsPrimitive.Content value={value} className={twMerge("p-4", className)}>
      {children}
    </TabsPrimitive.Content>
  );
};

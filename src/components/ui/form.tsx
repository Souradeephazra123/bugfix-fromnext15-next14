import { createContext, FC, ReactNode, useContext } from 'react';
import { useFormContext, Controller, FieldValues, UseFormReturn } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface FormProps {
  children: ReactNode;
}

const FormContext = createContext<UseFormReturn<FieldValues> | undefined>(undefined);

export const Form: FC<FormProps> = ({ children }) => {
  const methods = useFormContext();
  return <FormContext.Provider value={methods}>{children}</FormContext.Provider>;
};

interface FormItemProps {
  className?: string;
  children: ReactNode;
}

export const FormItem: FC<FormItemProps> = ({ className, children }) => {
  return <div className={twMerge('space-y-2', className)}>{children}</div>;
};

interface FormLabelProps {
  className?: string;
  children: ReactNode;
}

export const FormLabel: FC<FormLabelProps> = ({ className, children }) => {
  return <label className={twMerge('block text-sm font-medium text-gray-700', className)}>{children}</label>;
};

interface FormControlProps {
  className?: string;
  children: ReactNode;
}

export const FormControl: FC<FormControlProps> = ({ className, children }) => {
  return <div className={twMerge('mt-1', className)}>{children}</div>;
};

interface FormMessageProps {
  className?: string;
}

export const FormMessage: FC<FormMessageProps> = ({ className }) => {
  const { errors } = useFormContext();
  const errorMessage = errors?.[Object.keys(errors)[0]]?.message;
  return errorMessage ? (
    <p className={twMerge('mt-2 text-sm text-red-600', className)}>{errorMessage}</p>
  ) : null;
};

interface FormFieldProps {
  name: string;
  control: any;
  render: ({ field }: { field: any }) => ReactNode;
}

export const FormField: FC<FormFieldProps> = ({ name, control, render }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => render({ field })}
    />
  );
};

interface FormDescriptionProps {
  className?: string;
  children: ReactNode;
}

export const FormDescription: FC<FormDescriptionProps> = ({ className, children }) => {
  return <p className={twMerge('text-sm text-gray-500', className)}>{children}</p>;
};
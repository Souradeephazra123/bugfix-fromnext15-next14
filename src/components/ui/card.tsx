import { ReactNode, MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function Card({ className, children,onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={twMerge("rounded-lg overflow-hidden", className)}
    >
      {children}
    </div>
  );
}

interface CardContentProps {
  className?: string;
  children: ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={twMerge("p-4", className)}>{children}</div>;
}

interface CardHeaderProps {
  className?: string;
  children: ReactNode;
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={twMerge("p-4 border-b", className)}>{children}</div>;
}

interface CardTitleProps {
  className?: string;
  children: ReactNode;
}

export function CardTitle({ className, children }: CardTitleProps) {
  return (
    <h2 className={twMerge("text-lg font-semibold", className)}>{children}</h2>
  );
}

interface CardDescriptionProps {
  className?: string;
  children: ReactNode;
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={twMerge("text-sm text-gray-600", className)}>{children}</p>
  );
}

interface CardFooterProps {
  className?: string;
  children: ReactNode;
}

export function CardFooter({ className, children }: CardFooterProps) {
  return <div className={twMerge("p-4 border-t", className)}>{children}</div>;
}

import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "solid" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild, variant = "solid", size = "md", className, children, ...props },
    ref
  ) => {
    const Component = asChild ? "span" : "button";

    const classes = twMerge(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
      `${
        variant === "solid" ? "bg-amber-600 text-white hover:bg-amber-700" : ""
      }`,
      `${
        variant === "outline"
          ? "border border-amber-600 text-amber-600 hover:bg-amber-50"
          : ""
      }`,
      `${
        variant === "ghost"
          ? "bg-transparent text-amber-600 hover:bg-amber-50"
          : ""
      }`,
      `${
        variant === "default"
          ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
          : ""
      }`,
      `${size === "sm" ? "px-4 py-2 text-sm" : ""}`,
      `${size === "md" ? "px-6 py-3 text-md" : ""}`,
      `${size === "lg" ? "px-8 py-4 text-lg" : ""}`,
      `${size === "icon" ? "p-2" : ""}`,
      className
    );

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button };

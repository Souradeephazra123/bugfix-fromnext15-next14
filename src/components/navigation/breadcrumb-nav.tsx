"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-yellow-600"
          >
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li className="inline-flex items-center" key={index}>
            <ChevronRight
              className="mx-1 h-4 w-4 text-gray-400"
              aria-hidden="true"
            />
            {item.isCurrent ? (
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="ml-1 text-sm font-medium text-gray-700 hover:text-yellow-600 md:ml-2"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Export both as default and named export to support both import styles
export { BreadcrumbNav };
export default BreadcrumbNav;

// Additional component exports
export const BreadcrumbList = ({ children }: { children: React.ReactNode }) => (
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    {children}
  </ol>
);
export const BreadcrumbItem = ({ children }: { children: React.ReactNode }) => (
  <li className="inline-flex items-center">{children}</li>
);
export const BreadcrumbLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-yellow-600"
  >
    {children}
  </Link>
);
export const BreadcrumbSeparator = () => (
  <ChevronRight className="mx-1 h-4 w-4 text-gray-400" aria-hidden="true" />
);
export const BreadcrumbPage = ({ children }: { children: React.ReactNode }) => (
  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
    {children}
  </span>
);

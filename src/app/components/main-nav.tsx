"use client";

import type React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        About
      </Link>
      <div
        className="relative"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <Link
          href="/services"
          className="text-sm font-medium transition-colors hover:text-primary flex items-center"
        >
          Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-4 w-4"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </Link>
        {isServicesOpen && (
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1" role="menu" aria-orientation="vertical">
              <Link
                href="/services/tax"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Tax Services
              </Link>
              <Link
                href="/services/accounting"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Accounting Services
              </Link>
              <Link
                href="/services/advisory"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Advisory Services
              </Link>
              <Link
                href="/services/financing"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Financing Services
              </Link>
            </div>
          </div>
        )}
      </div>
      <div
        className="relative"
        onMouseEnter={() => setIsIndustriesOpen(true)}
        onMouseLeave={() => setIsIndustriesOpen(false)}
      >
        <Link
          href="/industries"
          className="text-sm font-medium transition-colors hover:text-primary flex items-center"
        >
          Industries
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-4 w-4"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </Link>
        {isIndustriesOpen && (
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1" role="menu" aria-orientation="vertical">
              <Link
                href="/industries/manufacturing"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Manufacturing
              </Link>
              <Link
                href="/industries/retail"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Retail
              </Link>
              <Link
                href="/industries/professional-services"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Professional Services
              </Link>
            </div>
          </div>
        )}
      </div>
      <Link
        href="/success-stories"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Success Stories
      </Link>
      <Link
        href="/resources"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Resources
      </Link>
      <Link
        href="/contact"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Contact
      </Link>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb() {
  const pathname = usePathname();

  if (typeof pathname !== "string" || !pathname || pathname === "/") return null;

  const pathSegments = pathname?.split("/").filter((segment) => segment);

  // Ensure pathSegments is not empty before mapping
  if (pathSegments?.length === 0) return null;

  const breadcrumbItems = pathSegments?.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    // Format the segment for display (capitalize and replace hyphens with spaces)
    const formattedSegment = segment
      .split("-")
      ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      href,
      label: formattedSegment,
      isLast,
    };
  });

  return (
    <nav className="flex items-center text-sm text-gray-500 mb-4">
      <Link href="/" className="flex items-center hover:text-blue-600">
        <Home className="h-4 w-4 mr-1" />
        Home
      </Link>

      {breadcrumbItems?.map((item, index) => (
        <div key={item?.href} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-2" />
          {item?.isLast ? (
            <span className="font-medium text-gray-900">{item.label}</span>
          ) : (
            <Link href={item?.href} className="hover:text-blue-600">
              {item?.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

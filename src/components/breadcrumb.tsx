"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb() {
  const pathname = usePathname();

  if (typeof pathname !== "string" || !pathname || pathname === "/")
    return null;

  let pathSegments: string[] = [];
  try {
    pathSegments = pathname.split("/").filter((segment) => segment);
  } catch (e) {
    console.error("Error splitting pathname:", pathname, e);
    return null; // Don't render if pathname splitting fails
  }
  // Ensure pathSegments is not empty before mapping
  if (pathSegments?.length === 0) return null;

  // const breadcrumbItems = pathSegments?.map((segment, index) => {
  //   const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
  //   const isLast = index === pathSegments.length - 1;

  //   // Format the segment for display (capitalize and replace hyphens with spaces)
  //   const formattedSegment = segment
  //     .split("-")
  //     ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(" ");

  //   return {
  //     href,
  //     label: formattedSegment,
  //     isLast,
  //   };
  // });

  let breadcrumbItems: Array<{
    href: string;
    label: string;
    isLast: boolean;
  } | null> = [];
  try {
    breadcrumbItems = pathSegments.map((segment, index) => {
      // Basic check if segment is a string (filter should ensure this)
      if (typeof segment !== "string") return null;

      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const isLast = index === pathSegments.length - 1;

      // Format the segment: Capitalize words, replace hyphens.
      // Removed unnecessary ?.map after split() as it always returns an array.
      const formattedSegment = segment
        .split("-")
        .map((word) =>
          word ? word.charAt(0).toUpperCase() + word.slice(1) : ""
        ) // Handle potential empty strings from split
        .join(" ");

      return {
        href,
        label: formattedSegment || segment, // Use original segment as fallback
        isLast,
      };
    });
  } catch (error) {
    console.error(
      "Error creating breadcrumb items:",
      error,
      "Pathname:",
      pathname,
      "Segments:",
      pathSegments
    );
    return null; // Don't render breadcrumbs if item creation fails
  }

  // Filter out any null items that might have been created due to errors/checks
  const validBreadcrumbItems = breadcrumbItems.filter(
    (item) => item !== null
  ) as Array<{ href: string; label: string; isLast: boolean }>;

  // 3. Final check if we have valid items to render
  if (validBreadcrumbItems.length === 0) {
    return null;
  }

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
            <Link href={item!.href} className="hover:text-blue-600">
              {item?.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

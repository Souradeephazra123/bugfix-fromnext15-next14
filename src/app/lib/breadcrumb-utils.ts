export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

export function generateBreadcrumbs(path: string): BreadcrumbItem[] {
  // Remove leading and trailing slashes
  const cleanPath = path.replace(/^\/|\/$/g, "");

  // If path is empty (home page), return empty array
  if (!cleanPath) return [];

  // Split path into segments
  const segments = cleanPath.split("/");

  // Generate breadcrumb items
  const breadcrumbs: BreadcrumbItem[] = [];
  let currentPath = "";

  segments.forEach((segment, index) => {
    // Build current path
    currentPath += `/${segment}`;

    // Format label (capitalize and replace hyphens with spaces)
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Add breadcrumb item
    breadcrumbs.push({
      label,
      href: currentPath,
      isCurrent: index === segments.length - 1,
    });
  });

  return breadcrumbs;
}

import type { Route } from "@/types/routes";

/**
 * Generates breadcrumb items based on the current URL path
 * @param path - The current URL path
 * @param routes - Optional routes configuration to use for generating breadcrumb labels
 * @returns Array of breadcrumb items with href and label
 */
export function generateBreadcrumbs(
  path: string,
  routes?: Record<string, Route>,
) {
  // Remove trailing slash and split path into segments
  const segments = path.replace(/\/$/, "").split("/").filter(Boolean);

  // Always start with home
  const breadcrumbs = [{ href: "/", label: "Home" }];

  // Build up the breadcrumbs based on path segments
  let currentPath = "";

  segments.forEach((segment) => {
    currentPath += `/${segment}`;

    // Try to get a nice label from routes if available
    let label = "";
    if (routes && routes[currentPath]) {
      label = routes[currentPath].label;
    } else {
      // Otherwise, format the segment as a label (capitalize, replace hyphens with spaces)
      label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    breadcrumbs.push({
      href: currentPath,
      label,
    });
  });

  return breadcrumbs;
}

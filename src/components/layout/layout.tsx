import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { DynamicBreadcrumb } from "@/components/ui/breadcrumb";

interface LayoutProps {
  children: ReactNode;
  showBreadcrumb?: boolean;
  currentUrl?: string;
}

export function Layout({
  children,
  showBreadcrumb = true,
  currentUrl,
}: LayoutProps) {
  // Get the current URL from the pathname if not provided
  const url =
    currentUrl ||
    (typeof window !== "undefined" ? window.location.pathname : "/");

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {showBreadcrumb && currentUrl && (
          <div className="container mx-auto px-4 py-4">
            <DynamicBreadcrumb currentUrl={url} />
          </div>
        )}
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

"use client";

import { useScrollToTop } from "@/hooks/useScrollToTop";

export function ScrollToTop() {
  // This component doesn't render anything visible
  // It just uses the hook to trigger the scroll behavior
  useScrollToTop();
  return null;
}

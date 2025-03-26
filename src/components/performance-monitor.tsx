"use client";

import { useEffect, useState } from "react";

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  cls: number | null;
  fid: number | null;
  ttfb: number | null;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null,
  });

  useEffect(() => {
    // Only run in production and when the Performance API is available
    if (
      process.env.NODE_ENV !== "production" ||
      typeof window === "undefined" ||
      !("performance" in window)
    ) {
      return;
    }

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        const fcp = entries[0];
        setMetrics((prev) => ({ ...prev, fcp: fcp.startTime }));
      }
    });
    fcpObserver.observe({ type: "paint", buffered: true });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics((prev) => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((entryList) => {
      let clsValue = 0;
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      setMetrics((prev) => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ type: "layout-shift", buffered: true });

    // First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        const firstInput = entries[0];
        setMetrics((prev) => ({
          ...prev,
          fid: firstInput.processingStart - firstInput.startTime,
        }));
      }
    });
    fidObserver.observe({ type: "first-input", buffered: true });

    // Time to First Byte
    const navigationEntries = performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0) {
      const navigationEntry =
        navigationEntries[0] as PerformanceNavigationTiming;
      setMetrics((prev) => ({ ...prev, ttfb: navigationEntry.responseStart }));
    }

    // Send metrics to analytics
    const sendMetricsToAnalytics = () => {
      // This would normally send the metrics to your analytics service
      console.log("Core Web Vitals:", metrics);
    };

    // Send metrics when the page is being unloaded
    window.addEventListener("beforeunload", sendMetricsToAnalytics);

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
      window.removeEventListener("beforeunload", sendMetricsToAnalytics);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}

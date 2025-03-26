"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const router = useRouter();

  // Check if we've shown this popup before in this session
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenExitPopup");
    if (hasSeenPopup) {
      setHasTriggered(true);
    }
  }, []);

  // Set up exit intent detection
  useEffect(() => {
    if (hasTriggered) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through the top of the page
      if (e.clientY <= 0) {
        setIsVisible(true);
        setHasTriggered(true);
        sessionStorage.setItem("hasSeenExitPopup", "true");

        // Track exit intent trigger
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "exit_intent_triggered",
            page_url: window.location.pathname,
          });
        }
      }
    };

    // Add a delay before enabling the exit intent detection
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000); // 5 seconds delay

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggered]);

  // Handle A/B testing - randomly select variant A or B
  const [variant] = useState(() => {
    return Math.random() > 0.5 ? "A" : "B";
  });

  // Close the popup
  const handleClose = () => {
    setIsVisible(false);

    // Track popup closed
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "exit_intent_closed",
        variant: variant,
      });
    }
  };

  // Navigate to the landing page
  const handleCTAClick = () => {
    // Track CTA clicked
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "exit_intent_cta_clicked",
        variant: variant,
      });
    }

    router.push("/landing/tax-strategies-guide");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Popup content - Variant A or B */}
        {variant === "A" ? (
          <div className="p-6">
            <div className="mb-4 text-center">
              <Image
                src="/images/tax-guide-icon.svg"
                alt="Tax Guide"
                width={60}
                height={60}
                className="mx-auto"
              />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">
              Before You Go...
            </h2>
            <p className="text-gray-700 mb-4 text-center">
              Discover 5 tax strategies that have saved our manufacturing
              clients an average of $37,500 in taxes.
            </p>
            <button
              onClick={handleCTAClick}
              className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition duration-150 ease-in-out"
            >
              Get My Free Guide
            </button>
            <p className="text-xs text-gray-500 text-center mt-3">
              No credit card required. Instant download.
            </p>
          </div>
        ) : (
          <div>
            <div className="h-32 bg-primary relative">
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 border-4 border-primary">
                <Image
                  src="/images/tax-savings-icon.svg"
                  alt="Tax Savings"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className="pt-12 px-6 pb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Manufacturing Tax Secrets
              </h2>
              <p className="text-gray-600 mb-4">
                Most manufacturing businesses overpay on taxes by $20K-$50K
                annually. Our free guide reveals 5 strategies to fix that.
              </p>
              <button
                onClick={handleCTAClick}
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition duration-150 ease-in-out"
              >
                Download Free Guide
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Join 500+ manufacturing businesses who've saved with our
                strategies
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

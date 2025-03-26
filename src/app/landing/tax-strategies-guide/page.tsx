import Image from "next/image";
import type { Metadata } from "next";
import { DownloadGuideForm } from "./download-guide-form";

export const metadata: Metadata = {
  title:
    "Free Guide: 5 Tax Strategies for Manufacturing Businesses | Schapira CPA",
  description:
    "Download our free guide to discover 5 proven tax strategies that can save your manufacturing business thousands in taxes this year.",
  openGraph: {
    title: "Free Guide: 5 Tax Strategies for Manufacturing Businesses",
    description:
      "Discover industry-specific tax strategies that most manufacturing businesses miss out on.",
    images: [
      {
        url: "/images/manufacturing-tax-guide-cover.webp",
        width: 1200,
        height: 630,
        alt: "Manufacturing Tax Guide by Schapira CPA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Guide: 5 Tax Strategies for Manufacturing Businesses",
    description:
      "Discover industry-specific tax strategies that most manufacturing businesses miss out on.",
    images: ["/images/manufacturing-tax-guide-cover.webp"],
  },
};

export const viewport = {
  themeColor: "#D4AF37",
};

export default function TaxStrategiesLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Tracking Pixel - Hidden */}
      <Image
        src="/api/track-landing-view?source=exit-intent"
        alt=""
        width={1}
        height={1}
        className="hidden"
        priority={false}
      />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.png"
              alt="Schapira CPA"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Left Column - Image */}
              <div className="md:w-5/12 relative">
                <div className="h-80 md:h-full relative overflow-hidden">
                  <Image
                    src="/images/manufacturing-tax-guide-cover.webp"
                    alt="Manufacturing Tax Guide for Schapira CPA"
                    fill
                    className="object-contain md:object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="md:w-7/12 p-6 md:p-10">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  FREE GUIDE
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  5 Tax Strategies That Could Save Your Manufacturing Business
                  Thousands
                </h1>

                <p className="text-lg text-gray-700 mb-6">
                  Discover industry-specific tax strategies that most
                  manufacturing businesses miss out on. Our guide reveals
                  approaches that have saved our clients an average of $37,500
                  in annual tax liability.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Specialized manufacturing deductions",
                    "R&D tax credit opportunities",
                    "Cost segregation strategies",
                    "Supply chain tax planning",
                    "Entity structure optimization",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                <DownloadGuideForm />

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-3 text-center">
                    Trusted by manufacturing businesses across the country
                  </p>
                  <div className="flex justify-center space-x-8">
                    {[1, 2, 3].map((i) => (
                      <Image
                        key={i}
                        src={`/images/client-logo-${i}.svg`}
                        alt={`Client ${i}`}
                        width={80}
                        height={40}
                        className="h-8 w-auto grayscale opacity-70"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-10 bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative mr-4">
                <Image
                  src="/images/testimonial-avatar.jpg"
                  alt="Client"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Michael Rodriguez</h4>
                <p className="text-sm text-gray-600">
                  CEO, Precision Manufacturing Inc.
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "The tax strategies we learned from Schapira CPA saved our
              business over $42,000 last year alone. Their industry-specific
              knowledge is invaluable for any manufacturing operation."
            </p>
          </div>

          {/* Footer */}
          <div className="mt-10 text-center text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Schapira CPA. All rights reserved.
            </p>
            <div className="mt-2">
              <a
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </a>
              <span className="mx-2">•</span>
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

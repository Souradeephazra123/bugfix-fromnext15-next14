"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

// Define the sitemap structure
interface SitemapItem {
  title: string;
  url?: string;
  children?: SitemapItem[];
  isExternal?: boolean;
}

const sitemapData: SitemapItem[] = [
  {
    title: "Services",
    children: [
      {
        title: "All Services",
        url: "/services",
      },
      {
        title: "Free Consultation",
        url: "/consultation",
      },
      {
        title: "Manufacturing Tax Services",
        url: "/services/manufacturing-tax",
      },
      {
        title: "R&D Tax Credits",
        url: "/services/rd-tax-credits",
      },
      {
        title: "Cost Accounting",
        url: "/services/cost-accounting",
      },
      {
        title: "Growth Financing",
        url: "/services/growth-financing",
      },
      {
        title: "Financial Analysis",
        url: "/services/financial-analysis",
      },
      {
        title: "Strategic Tax Planning",
        url: "/services/tax-planning",
      },
      {
        title: "M&A Advisory",
        url: "/services/mergers-acquisitions",
      },
    ],
  },
  {
    title: "Portfolio",
    children: [
      {
        title: "Client Success Stories",
        url: "/portfolio",
      },
      {
        title: "Precision Metal Products",
        url: "/portfolio/precision-metal-products",
      },
      {
        title: "Advanced Composites",
        url: "/portfolio/advanced-composites",
      },
      {
        title: "Harvest Foods Processing",
        url: "/portfolio/harvest-foods",
      },
      {
        title: "MediTech Devices",
        url: "/portfolio/meditech-devices",
      },
      {
        title: "AutoParts Manufacturing",
        url: "/portfolio/autoparts-manufacturing",
      },
      {
        title: "Aerospace Precision",
        url: "/portfolio/aerospace-precision",
      },
    ],
  },
  {
    title: "Resources",
    children: [
      {
        title: "All Resources",
        url: "/resources",
      },
      {
        title: "Manufacturing Benchmarks",
        url: "/resources/manufacturing-benchmarks",
      },
      {
        title: "Savings Calculators",
        url: "/resources/savings-calculators",
      },
      {
        title: "R&D Calculators",
        url: "/resources/rd-calculators",
      },
      {
        title: "Industry Financial Benchmarks",
        url: "/resources/industry-benchmarks",
      },
      {
        title: "Manufacturing KPI Dashboard",
        url: "/resources/kpi-dashboard",
      },
      {
        title: "Financial Guides",
        url: "/resources/financial-guides",
      },
    ],
  },
  {
    title: "About",
    children: [
      {
        title: "About Us",
        url: "/about",
      },
      {
        title: "Our Team",
        url: "/about/team",
      },
      {
        title: "Manufacturing Industry Expertise",
        url: "/about/manufacturing-expertise",
      },
      {
        title: "Our Approach",
        url: "/about/approach",
      },
      {
        title: "Client Testimonials",
        url: "/about/testimonials",
      },
      {
        title: "Careers",
        url: "/about/careers",
      },
    ],
  },
  {
    title: "Blog",
    children: [
      {
        title: "All Articles",
        url: "/blog",
      },
      {
        title: "Manufacturing Finance",
        url: "/blog/manufacturing-finance",
      },
      {
        title: "Cost Optimization",
        url: "/blog/cost-optimization",
      },
      {
        title: "Tax Planning Strategies",
        url: "/blog/tax-planning",
      },
      {
        title: "Financing & Growth",
        url: "/blog/financing-growth",
      },
      {
        title: "Industry Insights",
        url: "/blog/industry-insights",
      },
      {
        title: "Financial Management Tips",
        url: "/blog/financial-management",
      },
    ],
  },
];

// Sitemap section component that can be expanded/collapsed for mobile
const SitemapSection: React.FC<{ section: SitemapItem }> = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6">
      <div
        className="flex justify-between items-center cursor-pointer md:cursor-default mb-3"
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsExpanded(!isExpanded);
          }
        }}
      >
        <h3 className="text-lg font-bold text-yellow-500">{section.title}</h3>
        <span className="md:hidden text-yellow-500">
          {isExpanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </span>
      </div>

      <ul className={`space-y-2 ${isExpanded ? "block" : "hidden md:block"}`}>
        {section.children?.map((item, index) => (
          <li key={index}>
            {item.isExternal ? (
              <a
                href={item.url}
                className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            ) : (
              <Link
                href={item.url || "#"}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main footer component
const EnhancedFooter: React.FC = () => {
  const [showFullSitemap, setShowFullSitemap] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    // Reset form
    setEmail("");
    // Show success message or toast notification
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">
              Schapira CPA
            </h3>
            <p className="text-gray-400">
              Manufacturing financial specialists helping you make every
              decision profitable.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/schapira-cpa"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/schapiracpa"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/schapiracpa"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>33 Bartlett St., Suite 204</li>
              <li>Brooklyn, NY 11206</li>
              <li>
                <a
                  href="tel:2123806309"
                  className="hover:text-white transition duration-300"
                >
                  212.380.6309
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@schapiracpa.com"
                  className="hover:text-white transition duration-300"
                >
                  info@schapiracpa.com
                </a>
              </li>
            </ul>
            <div className="mt-4 rounded-lg overflow-hidden h-[200px] w-full md:w-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-73.96209492346304!3d40.71035597139282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c1f6d0bfa75%3A0xb05940f5b1e1be2f!2s236%20Broadway%2C%20Brooklyn%2C%20NY%2011211!5e0!3m2!1sen!2sus!4v1710732000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Schapira CPA Office Location"
                aria-label="Map showing Schapira CPA office location"
              ></iframe>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/consultation"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for manufacturing financial insights.
            </p>
            <form className="flex" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-r-lg transition duration-300"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Sitemap Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Sitemap</h2>
            <button
              onClick={() => setShowFullSitemap(!showFullSitemap)}
              className="text-yellow-500 hover:text-yellow-400 transition duration-300 flex items-center"
              aria-expanded={showFullSitemap}
              aria-controls="full-sitemap"
            >
              {showFullSitemap ? "Show Less" : "Show Full Sitemap"}
              {showFullSitemap ? (
                <ChevronUp className="ml-1 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-1 h-4 w-4" />
              )}
            </button>
          </div>

          {/* Condensed Sitemap (Always Visible) */}
          {!showFullSitemap && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {sitemapData.map((section, index) => (
                <SitemapSection key={index} section={section} />
              ))}
            </div>
          )}

          {/* Full Sitemap (Expandable) */}
          {showFullSitemap && (
            <div
              id="full-sitemap"
              className="grid grid-cols-1 md:grid-cols-5 gap-8"
            >
              {sitemapData.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-bold text-yellow-500 mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.children?.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.isExternal ? (
                          <a
                            href={item.url}
                            className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.title}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        ) : (
                          <Link
                            href={item.url || "#"}
                            className="text-gray-400 hover:text-white transition duration-300"
                          >
                            {item.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 mb-4">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-white transition duration-300"
            >
              XML Sitemap
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-white transition duration-300"
            >
              Accessibility
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Schapira CPA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;

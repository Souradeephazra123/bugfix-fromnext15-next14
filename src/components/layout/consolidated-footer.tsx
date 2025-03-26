"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

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
    ],
  },
  {
    title: "Portfolio",
    children: [
      {
        title: "Precision Metal Products",
        url: "/portfolio/precision-metal-products",
      },
      {
        title: "Advanced Composites",
        url: "/portfolio/advanced-composites",
      },
      {
        title: "Harvest Foods",
        url: "/portfolio/harvest-foods",
      },
    ],
  },
  {
    title: "Resources",
    children: [
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
        title: "Financial Guides",
        url: "/resources/financial-guides",
      },
    ],
  },
];

// Quick links data
const quickLinks = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Portfolio", url: "/portfolio" },
  { title: "Blog", url: "/blog" },
  { title: "Contact", url: "/contact" },
  { title: "Free Consultation", url: "/consultation" },
];

// Legal links data
const legalLinks = [
  { title: "Privacy Policy", url: "/privacy-policy" },
  { title: "Terms of Service", url: "/terms-of-service" },
  { title: "Accessibility", url: "/accessibility" },
  { title: "Sitemap", url: "/sitemap.xml" },
];

// Social media links
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/schapira-cpa",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/schapiracpa",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/schapiracpa",
    icon: (
      <svg
        className="h-5 w-5"
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
    ),
  },
];

// Mobile dropdown component
const MobileDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex w-full justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-white">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-schapira-gold" />
        ) : (
          <ChevronDown className="h-5 w-5 text-schapira-gold" />
        )}
      </button>
      <div className={`mt-3 space-y-2 ${isOpen ? "block" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
};

const ConsolidatedFooter = () => {
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
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link
              href="/"
              className="text-white font-bold text-xl flex items-center mb-4"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Small%20Logo-XMWnV6WuNSec7RfDBBiK0iTV3oZdyu.png"
                alt="Schapira CPA"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mb-6">
              Manufacturing financial specialists helping you make every
              decision profitable since 2012.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-schapira-gold mr-3 mt-0.5" />
                <div>
                  <p>236 Broadway Ave</p>
                  <p>Suite #220</p>
                  <p>Brooklyn, NY 11211</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-schapira-gold mr-3" />
                <a
                  href="tel:2123806309"
                  className="hover:text-white transition-colors"
                >
                  212.380.6309
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-schapira-gold mr-3" />
                <a
                  href="mailto:mendel@schapiracpa.com"
                  className="hover:text-white transition-colors"
                >
                  mendel@schapiracpa.com
                </a>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Desktop */}
          <div className="hidden md:block">
            <h3 className="text-xl font-bold mb-6 text-white relative pb-3 inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-schapira-gold"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links - Desktop */}
          <div className="hidden md:block">
            <h3 className="text-xl font-bold mb-6 text-white relative pb-3 inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-schapira-gold"></span>
            </h3>
            <ul className="space-y-3">
              {sitemapData[0].children?.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url || "#"}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-schapira-gold hover:text-schapira-dark transition-colors"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative pb-3 inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-schapira-gold"></span>
            </h3>
            <p className="mb-4">
              Subscribe to our newsletter for manufacturing financial insights
              and updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-schapira-gold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-schapira-gold hover:bg-schapira-gold text-gray-900 font-medium px-4 py-2 rounded-r-md transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        {/* Mobile Accordion Menus */}
        <div className="md:hidden mb-8">
          <MobileDropdown title="Quick Links">
            <ul className="space-y-3 pl-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </MobileDropdown>

          {sitemapData.map((section, index) => (
            <MobileDropdown key={index} title={section.title}>
              <ul className="space-y-3 pl-2">
                {section.children?.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.isExternal ? (
                      <a
                        href={item.url}
                        className="flex items-center hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    ) : (
                      <Link
                        href={item.url || "#"}
                        className="hover:text-white transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    href={`/${section.title.toLowerCase()}`}
                    className="text-schapira-gold hover:text-schapira-dark transition-colors"
                  >
                    View All {section.title} →
                  </Link>
                </li>
              </ul>
            </MobileDropdown>
          ))}
        </div>

        {/* Bottom Section with Legal Links */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Schapira CPA. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ConsolidatedFooter;

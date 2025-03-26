"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Calculator,
  FileText,
  BarChart2,
  DollarSign,
  TrendingUp,
  ArrowRight,
  LineChart,
} from "lucide-react";
import { routes } from "@/lib/routes";
import { sitemap } from "@/lib/sitemap";

export function MegaMenu() {
  const pathname = usePathname();

  // Extract main sections from sitemap
  const mainSections = Object.entries(sitemap.home.children)
    .filter(
      ([key, section]) =>
        !section.restricted &&
        section.status !== "planned" &&
        ["services", "calculators", "portfolio", "resources"].includes(key),
    )
    .map(([key, section]) => ({
      key,
      title: section.title,
      url: section.url,
      children: section.children
        ? Object.values(section.children).filter(
            (child) => !child.restricted && child.status !== "planned",
          )
        : [],
    }));

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns when pressing escape
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-50" ref={menuRef}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-white font-bold text-xl flex items-center"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Small%20Logo-XMWnV6WuNSec7RfDBBiK0iTV3oZdyu.png"
              alt="Schapira CPA"
              className="h-8 w-auto"
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Manufacturing Solutions */}
            <div className="relative">
              <button
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  pathname?.startsWith("/manufacturing-solutions")
                    ? "text-white bg-gray-700"
                    : ""
                }`}
                onClick={() => toggleDropdown("manufacturing-solutions")}
                onMouseEnter={() =>
                  setActiveDropdown("manufacturing-solutions")
                }
                aria-expanded={activeDropdown === "manufacturing-solutions"}
                aria-haspopup="true"
              >
                Manufacturing Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === "manufacturing-solutions" && (
                <div
                  className="absolute left-0 mt-2 w-screen max-w-7xl bg-white rounded-md shadow-lg overflow-hidden transform -translate-x-1/4"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* Manufacturing Solutions dropdown content */}
                  <div className="grid grid-cols-4 gap-6 p-8">
                    {/* Column 1: Main Solutions */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        Financial Solutions
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/manufacturing-solutions/cash-flow-management"
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <TrendingUp className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Cash Flow Management
                              </span>
                              <p className="text-sm text-gray-500">
                                Optimize working capital and cash flow
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/manufacturing-solutions/cost-reduction"
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <BarChart2 className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Cost Reduction Strategies
                              </span>
                              <p className="text-sm text-gray-500">
                                Identify and eliminate hidden costs
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/manufacturing-solutions/tax-credits"
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <DollarSign className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Tax Credits & Incentives
                              </span>
                              <p className="text-sm text-gray-500">
                                Maximize available tax benefits
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: View All */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        All Solutions
                      </h3>
                      <Link
                        href="/industries/manufacturing"
                        className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Solutions
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Not sure what you need?
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Schedule a consultation to discuss your specific
                          manufacturing financial needs.
                        </p>
                        <Link
                          href="/consultation"
                          className="text-sm bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded inline-block transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Free Consultation
                        </Link>
                      </div>
                    </div>

                    {/* Column 3: Success Stories */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        Success Stories
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/success-stories/precision-metal-products"
                            className="group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                              Precision Metal Products
                            </span>
                            <p className="text-sm text-gray-500">
                              $175K tax savings, 22% working capital reduction
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/success-stories/advanced-composites"
                            className="group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                              Advanced Composites
                            </span>
                            <p className="text-sm text-gray-500">
                              $1.2M equipment financing secured
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/success-stories"
                            className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All Success Stories
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 4: Featured Solution */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="mb-4">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Featured Solution
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Cash Flow Management
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Optimize working capital, improve cash conversion
                        cycles, and ensure steady operational funding with our
                        specialized manufacturing cash flow solutions.
                      </p>
                      <Link
                        href="/manufacturing-solutions/cash-flow-management"
                        className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services */}
            <div className="relative">
              <button
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  pathname?.startsWith("/services")
                    ? "text-white bg-gray-700"
                    : ""
                }`}
                onClick={() => toggleDropdown("services")}
                onMouseEnter={() => setActiveDropdown("services")}
                aria-expanded={activeDropdown === "services"}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === "services" && (
                <div
                  className="absolute left-0 mt-2 w-screen max-w-7xl bg-white rounded-md shadow-lg overflow-hidden transform -translate-x-1/4"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-4 gap-6 p-8">
                    {/* Column 1: Main Services */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        Tax Services
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href={routes.services.manufacturingTax}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <DollarSign className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Manufacturing Tax Services
                              </span>
                              <p className="text-sm text-gray-500">
                                Specialized tax strategies for manufacturers
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={routes.services.rdTaxCredits}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <Calculator className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                R&D Tax Credits
                              </span>
                              <p className="text-sm text-gray-500">
                                Maximize credits for process improvements
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: Financial Services */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        Financial Services
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href={routes.services.costAccounting}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <BarChart2 className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Cost Accounting
                              </span>
                              <p className="text-sm text-gray-500">
                                Optimize your manufacturing costs
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={routes.services.growthFinancing}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <TrendingUp className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Growth Financing
                              </span>
                              <p className="text-sm text-gray-500">
                                Capital solutions for expansion
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/financial-analysis"
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <TrendingUp className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Financial Analysis
                              </span>
                              <p className="text-sm text-gray-500">
                                Data-driven insights to optimize operations and
                                drive growth.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/ma-advisory"
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <TrendingUp className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                M&A Advisory
                              </span>
                              <p className="text-sm text-gray-500">
                                Expert guidance for mergers, acquisitions, and
                                business sales.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={routes.services.financialForecasting}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <LineChart className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Financial Analysis & Forecasting
                              </span>
                              <p className="text-sm text-gray-500">
                                Data-driven insights for informed decisions
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={routes.services.cashFlowOptimization}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <TrendingUp className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Cash Flow Optimization
                              </span>
                              <p className="text-sm text-gray-500">
                                Manage seasonal fluctuations and ensure capital
                                for growth
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={routes.services.strategicTaxPlanning}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <DollarSign className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Strategic Tax Planning
                              </span>
                              <p className="text-sm text-gray-500">
                                Minimize tax liability and maximize
                                manufacturing credits
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3: All Services */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        More Services
                      </h3>
                      <Link
                        href={routes.services.index}
                        className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Services
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Not sure what you need?
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Schedule a consultation to discuss your specific
                          manufacturing financial needs.
                        </p>
                        <Link
                          href={routes.consultation}
                          className="text-sm bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded inline-block transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Free Consultation
                        </Link>
                      </div>
                    </div>

                    {/* Column 4: Featured Service */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="mb-4">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Featured Service
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        R&D Tax Credits for Manufacturers
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Many manufacturing process improvements qualify for
                        valuable R&D tax credits. Our specialized approach has
                        saved clients an average of $135K annually.
                      </p>
                      <Link
                        href={routes.services.rdTaxCredits}
                        className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ProFit Method */}
            <div className="relative">
              <button
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  pathname?.startsWith("/profit-method")
                    ? "text-white bg-gray-700"
                    : ""
                }`}
                onClick={() => toggleDropdown("profit-method")}
                onMouseEnter={() => setActiveDropdown("profit-method")}
                aria-expanded={activeDropdown === "profit-method"}
                aria-haspopup="true"
              >
                ProFit™ Method
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === "profit-method" && (
                <div
                  className="absolute left-0 mt-2 w-screen max-w-7xl bg-white rounded-md shadow-lg overflow-hidden transform -translate-x-1/3"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-3 gap-6 p-8">
                    {/* Column 1: Method Components */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        Method Components
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/profit-method/roi-driven-strategy"
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <Calculator className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                ROI-Driven Strategy
                              </span>
                              <p className="text-sm text-gray-500">
                                Maximize return on investment
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/profit-method/growth-planning-framework"
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <TrendingUp className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Growth Planning Framework
                              </span>
                              <p className="text-sm text-gray-500">
                                Structured approach to financial planning
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/profit-method/quarterly-business-reviews"
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <LineChart className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Quarterly Business Reviews
                              </span>
                              <p className="text-sm text-gray-500">
                                Regular financial health assessments
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: Overview */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        Method Overview
                      </h3>
                      <Link
                        href="/profit-method"
                        className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View Full Methodology
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Ready to implement?
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Schedule a consultation to learn how the ProFit™
                          Method can transform your manufacturing finances.
                        </p>
                        <Link
                          href="/consultation"
                          className="text-sm bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded inline-block transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Free Consultation
                        </Link>
                      </div>
                    </div>

                    {/* Column 3: Featured Case Study */}
                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                      <div className="h-32 bg-gray-200 relative">
                        <img
                          src="/placeholder.svg?height=128&width=384"
                          alt="Featured case study"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Featured Case Study
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">
                          ProFit™ Method in Action
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          See how Precision Metal Products achieved 15% profit
                          margins with our methodology.
                        </p>
                        <Link
                          href="/success-stories/precision-metal-products"
                          className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center text-sm"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Read Case Study
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Success Stories */}
            <div className="relative">
              <Link
                href="/success-stories"
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  isActive("/success-stories") ? "text-white bg-gray-700" : ""
                }`}
              >
                Success Stories
              </Link>
            </div>

            {/* Portfolio */}
            {/* Portfolio - Commented out for now
<div className="relative">
  <button
    className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ${
      pathname?.startsWith("/portfolio") ? "text-white bg-gray-700" : ""
    }`}
    onClick={() => toggleDropdown("portfolio")}
    onMouseEnter={() => setActiveDropdown("portfolio")}
    aria-expanded={activeDropdown === "portfolio"}
    aria-haspopup="true"
  >
    Portfolio
    <ChevronDown className="ml-1 h-4 w-4" />
  </button>

  {activeDropdown === "portfolio" && (
    <div
      className="absolute left-0 mt-2 w-screen max-w-7xl bg-white rounded-md shadow-lg overflow-hidden transform -translate-x-1/3"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="grid grid-cols-4 gap-6 p-8">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Industries</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href={routes.portfolio.precisionMetal}
                className="flex items-start group"
                onClick={() => setActiveDropdown(null)}
              >
                <Building className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                    Metal Fabrication
                  </span>
                  <p className="text-sm text-gray-500">Precision Metal Products</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href={routes.portfolio.advancedComposites}
                className="flex items-start group"
                onClick={() => setActiveDropdown(null)}
              >
                <Building className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                    Plastics & Composites
                  </span>
                  <p className="text-sm text-gray-500">Advanced Composites</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href={routes.portfolio.harvestFoods}
                className="flex items-start group"
                onClick={() => setActiveDropdown(null)}
              >
                <Building className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                    Food Processing
                  </span>
                  <p className="text-sm text-gray-500">Harvest Foods Processing</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Success Stories
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href={routes.portfolio.precisionMetal}
                className="group"
                onClick={() => setActiveDropdown(null)}
              >
                <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                  $175K Tax Savings
                </span>
                <p className="text-sm text-gray-500">Precision Metal Products</p>
              </Link>
            </li>
            <li>
              <Link
                href={routes.portfolio.advancedComposites}
                className="group"
                onClick={() => setActiveDropdown(null)}
              >
                <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                  $1.2M Equipment Financing
                </span>
                <p className="text-sm text-gray-500">Advanced Composites</p>
              </Link>
            </li>
            <li>
              <Link
                href={routes.portfolio.harvestFoods}
                className="group"
                onClick={() => setActiveDropdown(null)}
              >
                <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                  $2.5M Facility Expansion
                </span>
                <p className="text-sm text-gray-500">Harvest Foods</p>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Client Portfolio
          </h3>
          <Link
            href={routes.portfolio.index}
            className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700"
            onClick={() => setActiveDropdown(null)}
          >
            View All Success Stories
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Want to be our next success story?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Learn how our specialized approach can help your manufacturing business thrive.
            </p>
            <Link
              href={routes.consultation}
              className="text-sm bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded inline-block transition-colors"
              onClick={() => setActiveDropdown(null)}
            >
              Free Consultation
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <div className="h-32 bg-gray-200 relative">
            <img
              src="/placeholder.svg?height=128&width=384"
              alt="Featured case study"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Featured Case Study
            </span>
            <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">Precision Metal Products</h3>
            <p className="text-sm text-gray-600 mb-3">
              $175K in tax savings and 22% reduction in working capital requirements.
            </p>
            <Link
              href={routes.portfolio.precisionMetal}
              className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center text-sm"
              onClick={() => setActiveDropdown(null)}
            >
              Read Case Study
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
*/}

            {/* Resources */}
            <div className="relative">
              <button
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  pathname?.startsWith("/resources")
                    ? "text-white bg-gray-700"
                    : ""
                }`}
                onClick={() => toggleDropdown("resources")}
                onMouseEnter={() => setActiveDropdown("resources")}
                aria-expanded={activeDropdown === "resources"}
                aria-haspopup="true"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === "resources" && (
                <div
                  className="absolute left-0 mt-2 w-screen max-w-7xl bg-white rounded-md shadow-lg overflow-hidden transform -translate-x-1/2"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-4 gap-6 p-8">
                    {/* Column 1: Calculators */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        Financial Calculators
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/resources/manufacturing-valuation"
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <Calculator className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Business Valuation Calculator
                              </span>
                              <p className="text-sm text-gray-500">
                                Estimate your manufacturing business value
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={routes.resources.rdCalculators}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <Calculator className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                R&D Tax Credit Calculator
                              </span>
                              <p className="text-sm text-gray-500">
                                Estimate potential R&D tax credits
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={routes.resources.savingsCalculators}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <Calculator className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Savings Calculators
                              </span>
                              <p className="text-sm text-gray-500">
                                Calculate potential tax savings
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: Guides & Resources */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        Guides & Resources
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href={routes.resources.manufacturingBenchmarks}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <BarChart2 className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Manufacturing Benchmarks
                              </span>
                              <p className="text-sm text-gray-500">
                                Industry performance metrics
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={routes.resources.financialGuides}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <FileText className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Financial Guides
                              </span>
                              <p className="text-sm text-gray-500">
                                Comprehensive financial resources
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={routes.blog.index}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <FileText className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                Blog
                              </span>
                              <p className="text-sm text-gray-500">
                                Manufacturing industry insights
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={routes.about.index}
                            className="flex items-start group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <FileText className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium group-hover:text-yellow-600 transition-colors">
                                About Us
                              </span>
                              <p className="text-sm text-gray-500">
                                Meet our team of experts
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3: View All */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        All Resources
                      </h3>
                      <Link
                        href={routes.resources.index}
                        className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Resources
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Need personalized guidance?
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Our experts can help you apply these resources to your
                          specific business situation.
                        </p>
                        <Link
                          href={routes.contact}
                          className="text-sm bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded inline-block transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>

                    {/* Column 4: Featured Resource */}
                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                      <div className="h-32 bg-gray-200 relative">
                        <img
                          src="/placeholder.svg?height=128&width=384"
                          alt="Featured resource"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Featured Resource
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">
                          Manufacturing Business Valuation
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Calculate your manufacturing business's value using
                          our specialized calculator.
                        </p>
                        <Link
                          href="/resources/manufacturing-valuation"
                          className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center text-sm"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Try Calculator
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Blog - Simple Dropdown */}

            {/* About - Simple Dropdown */}

            {/* Contact - Direct Link */}

            {/* Client Login Button */}
            <Link
              href="/client-portal/login"
              className="text-gray-800 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition duration-300 ml-2 font-medium"
            >
              Client Login
            </Link>

            {/* Free Consultation - CTA Button */}
            <Link
              href={routes.consultation}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition duration-300 ml-2"
            >
              Free Consultation
            </Link>
          </div>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-700 py-4 px-4">
          <div className="flex flex-col space-y-3">
            {/* Manufacturing Solutions Mobile Dropdown */}
            <div>
              <button
                className="text-gray-300 hover:text-white font-medium flex items-center justify-between w-full"
                onClick={() => toggleDropdown("manufacturing-solutions-mobile")}
                aria-expanded={
                  activeDropdown === "manufacturing-solutions-mobile"
                }
                aria-controls="mobile-manufacturing-solutions-dropdown"
              >
                Manufacturing Solutions
                <ChevronDown
                  className={`h-5 w-5 transform ${activeDropdown === "manufacturing-solutions-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "manufacturing-solutions-mobile" && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/manufacturing-solutions"
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Solutions
                  </Link>
                  <Link
                    href="/manufacturing-solutions/cash-flow-management"
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cash Flow Management
                  </Link>
                  <Link
                    href="/manufacturing-solutions/cost-reduction"
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cost Reduction Strategies
                  </Link>
                  <Link
                    href="/manufacturing-solutions/tax-credits"
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tax Credits & Incentives
                  </Link>
                </div>
              )}
            </div>

            {/* ProFit Method Mobile Dropdown */}
            <div>
              <button
                className="text-gray-300 hover:text-white font-medium flex items-center justify-between w-full"
                onClick={() => toggleDropdown("profit-method-mobile")}
                aria-expanded={activeDropdown === "profit-method-mobile"}
                aria-controls="mobile-profit-method-dropdown"
              >
                ProFit™ Method
                <ChevronDown
                  className={`h-5 w-5 transform ${activeDropdown === "profit-method-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "profit-method-mobile" && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/profit-method"
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Method Overview
                  </Link>
                  <Link
                    href="/profit-method/roi-driven-strategy"
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ROI-Driven Strategy
                  </Link>
                  <Link
                    href="/profit-method/growth-planning-framework"
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Growth Planning Framework
                  </Link>
                  <Link
                    href="/profit-method/quarterly-business-reviews"
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Quarterly Business Reviews
                  </Link>
                </div>
              )}
            </div>

            {/* Success Stories Mobile Link */}
            <Link
              href="/success-stories"
              className="text-gray-300 hover:text-white py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Success Stories
            </Link>

            {/* Services Mobile Dropdown */}
            <div>
              <button
                className="text-gray-300 hover:text-white font-medium flex items-center justify-between w-full"
                onClick={() => toggleDropdown("services-mobile")}
                aria-expanded={activeDropdown === "services-mobile"}
                aria-controls="mobile-services-dropdown"
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 transform ${activeDropdown === "services-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "services-mobile" && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href={routes.services.index}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    href={routes.services.manufacturingTax}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Manufacturing Tax Services
                  </Link>
                  <Link
                    href={routes.services.rdTaxCredits}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    R&D Tax Credits
                  </Link>
                  <Link
                    href={routes.services.costAccounting}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cost Accounting
                  </Link>
                  <Link
                    href={routes.services.growthFinancing}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Growth Financing
                  </Link>
                  <Link
                    href="/services/financial-analysis"
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Financial Analysis
                  </Link>
                  <Link
                    href="/services/ma-advisory"
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    M&A Advisory
                  </Link>
                  <Link
                    href={routes.services.financialForecasting}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Financial Analysis & Forecasting
                  </Link>
                  <Link
                    href={routes.services.cashFlowOptimization}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cash Flow Optimization
                  </Link>
                  <Link
                    href={routes.services.strategicTaxPlanning}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Strategic Tax Planning
                  </Link>
                </div>
              )}
            </div>

            {/* Portfolio Mobile Dropdown */}
            <div>
              <button
                className="text-gray-300 hover:text-white font-medium flex items-center justify-between w-full"
                onClick={() => toggleDropdown("portfolio-mobile")}
                aria-expanded={activeDropdown === "portfolio-mobile"}
                aria-controls="mobile-portfolio-dropdown"
              >
                Portfolio
                <ChevronDown
                  className={`h-5 w-5 transform ${activeDropdown === "portfolio-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "portfolio-mobile" && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href={routes.portfolio.index}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Client Success Stories
                  </Link>
                  <Link
                    href={routes.portfolio.precisionMetal}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Precision Metal Products
                  </Link>
                  <Link
                    href={routes.portfolio.advancedComposites}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Advanced Composites
                  </Link>
                  <Link
                    href={routes.portfolio.harvestFoods}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Harvest Foods Processing
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Mobile Dropdown */}
            <div>
              <button
                className="text-gray-300 hover:text-white font-medium flex items-center justify-between w-full"
                onClick={() => toggleDropdown("resources-mobile")}
                aria-expanded={activeDropdown === "resources-mobile"}
                aria-controls="mobile-resources-dropdown"
              >
                Resources
                <ChevronDown
                  className={`h-5 w-5 transform ${activeDropdown === "resources-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "resources-mobile" && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href={routes.resources.index}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Resources
                  </Link>
                  <Link
                    href="/resources/manufacturing-valuation"
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Business Valuation Calculator
                  </Link>
                  <Link
                    href={routes.resources.manufacturingBenchmarks}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Manufacturing Benchmarks
                  </Link>
                  <Link
                    href={routes.resources.savingsCalculators}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Savings Calculators
                  </Link>
                  <Link
                    href={routes.resources.rdCalculators}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    R&D Calculators
                  </Link>
                  <Link
                    href={routes.resources.financialGuides}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Financial Guides
                  </Link>
                  <Link
                    href={routes.blog.index}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href={routes.about.index}
                    className="block text-gray-400 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </div>
              )}
            </div>

            {/* Simple Links */}

            {/* Client Login Button */}
            <Link
              href="/client-portal/login"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded transition duration-300 text-center mt-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Client Login
            </Link>

            <Link
              href={routes.consultation}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition duration-300 text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MegaMenu;

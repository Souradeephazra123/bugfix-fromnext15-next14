"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { routes } from "@/lib/routes";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const pathname = usePathname();

  const servicesDropdownRef = useRef(null);
  const portfolioDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Services dropdown
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target) &&
        !event.target.closest('a[href="/services"]') &&
        !event.target.closest('button[aria-controls="services-dropdown"]')
      ) {
        setServicesDropdownOpen(false);
      }

      // Portfolio dropdown
      if (
        portfolioDropdownRef.current &&
        !portfolioDropdownRef.current.contains(event.target) &&
        !event.target.closest('a[href="/portfolio"]') &&
        !event.target.closest('button[aria-controls="portfolio-dropdown"]')
      ) {
        setPortfolioDropdownOpen(false);
      }

      // Resources dropdown
      if (
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target) &&
        !event.target.closest('a[href="/resources"]') &&
        !event.target.closest('button[aria-controls="resources-dropdown"]')
      ) {
        setResourcesDropdownOpen(false);
      }
    };

    // Add click event listener to detect clicks outside dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Add escape key handler to close dropdowns
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
        setPortfolioDropdownOpen(false);
        setResourcesDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const toggleMobileMenu = () => {
    // If we're closing the mobile menu, also close any open dropdowns
    if (mobileMenuOpen) {
      setServicesDropdownOpen(false);
      setPortfolioDropdownOpen(false);
      setResourcesDropdownOpen(false);
    }
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    if (!servicesDropdownOpen) {
      setResourcesDropdownOpen(false);
      setPortfolioDropdownOpen(false);
    }
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!resourcesDropdownOpen);
    if (!resourcesDropdownOpen) {
      setServicesDropdownOpen(false);
      setPortfolioDropdownOpen(false);
    }
  };

  const togglePortfolioDropdown = () => {
    setPortfolioDropdownOpen(!portfolioDropdownOpen);
    if (!portfolioDropdownOpen) {
      setServicesDropdownOpen(false);
      setResourcesDropdownOpen(false);
    }
  };

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  // Handle keyboard navigation within dropdown menus
  const handleKeyDown = (e, items, currentIndex, setDropdownOpen) => {
    // Arrow down/up to navigate menu items
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const direction = e.key === "ArrowDown" ? 1 : -1;
      const nextIndex =
        (currentIndex + direction + items.length) % items.length;
      items[nextIndex]?.focus();
    }
    // Escape key to close dropdown
    else if (e.key === "Escape") {
      e.preventDefault();
      setDropdownOpen(false);
    }
    // Tab key without shift should move through the menu items
    else if (e.key === "Tab" && !e.shiftKey) {
      if (currentIndex === items.length - 1) {
        setDropdownOpen(false);
      }
    }
    // Tab key with shift on the first item should close the dropdown
    else if (e.key === "Tab" && e.shiftKey && currentIndex === 0) {
      setDropdownOpen(false);
    }
  };

  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
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
        <div className="hidden md:flex space-x-1">
          <div
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                pathname?.startsWith("/services") ||
                pathname?.startsWith("/service")
                  ? "text-white bg-gray-700"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = routes.services.index;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.location.href = routes.services.index;
                }
              }}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              aria-controls="services-dropdown"
              id="services-menu-button"
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {servicesDropdownOpen && (
              <div
                ref={servicesDropdownRef}
                className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                id="services-dropdown"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="services-menu-button"
              >
                <div className="py-1">
                  <Link
                    href={routes.services.index}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setServicesDropdownOpen(false);
                    }}
                  >
                    All Services
                  </Link>
                  <Link
                    href={routes.services.manufacturingTax}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Manufacturing Tax Services
                  </Link>
                  <Link
                    href={routes.services.rdTaxCredits}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setServicesDropdownOpen(false);
                    }}
                  >
                    R&D Tax Credits
                  </Link>
                  <Link
                    href={routes.services.costAccounting}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Cost Accounting
                  </Link>
                  <Link
                    href={routes.services.growthFinancing}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Growth Financing
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setPortfolioDropdownOpen(true)}
            onMouseLeave={() => setPortfolioDropdownOpen(false)}
          >
            <button
              className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                pathname?.startsWith("/portfolio")
                  ? "text-white bg-gray-700"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = routes.portfolio.index;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.location.href = routes.portfolio.index;
                }
              }}
              aria-expanded={portfolioDropdownOpen}
              aria-haspopup="true"
              aria-controls="portfolio-dropdown"
              id="portfolio-menu-button"
            >
              Portfolio
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {portfolioDropdownOpen && (
              <div
                ref={portfolioDropdownRef}
                className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                id="portfolio-dropdown"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="portfolio-menu-button"
              >
                <div className="py-1">
                  <Link
                    href={routes.portfolio.index}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setPortfolioDropdownOpen(false);
                    }}
                  >
                    All Client Success Stories
                  </Link>
                  <Link
                    href={routes.portfolio.precisionMetal}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setPortfolioDropdownOpen(false);
                    }}
                  >
                    Precision Metal Products
                  </Link>
                  <Link
                    href={routes.portfolio.advancedComposites}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setPortfolioDropdownOpen(false);
                    }}
                  >
                    Advanced Composites
                  </Link>
                  <Link
                    href={routes.portfolio.harvestFoods}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setPortfolioDropdownOpen(false);
                    }}
                  >
                    Harvest Foods Processing
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setResourcesDropdownOpen(true)}
            onMouseLeave={() => setResourcesDropdownOpen(false)}
          >
            <button
              className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                pathname?.startsWith("/resources")
                  ? "text-white bg-gray-700"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = routes.resources.index;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.location.href = routes.resources.index;
                }
              }}
              aria-expanded={resourcesDropdownOpen}
              aria-haspopup="true"
              aria-controls="resources-dropdown"
              id="resources-menu-button"
            >
              Resources
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {resourcesDropdownOpen && (
              <div
                ref={resourcesDropdownRef}
                className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                id="resources-dropdown"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="resources-menu-button"
              >
                <div className="py-1">
                  <Link
                    href={routes.resources.index}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                    }}
                  >
                    All Resources
                  </Link>
                  <Link
                    href={routes.resources.manufacturingBenchmarks}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                    }}
                  >
                    Manufacturing Benchmarks
                  </Link>
                  <Link
                    href={routes.resources.savingsCalculators}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                    }}
                  >
                    Savings Calculators
                  </Link>
                  <Link
                    href={routes.resources.rdCalculators}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                    }}
                  >
                    R&D Calculators
                  </Link>
                  <Link
                    href={routes.resources.financialGuides}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                    }}
                  >
                    Financial Guides
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href={routes.blog.index}
            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
              isActive(routes.blog.index) ? "text-white bg-gray-700" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href={routes.about.index}
            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
              isActive(routes.about.index) ? "text-white bg-gray-700" : ""
            }`}
          >
            About
          </Link>
          <Link
            href={routes.contact}
            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
              isActive(routes.contact) ? "text-white bg-gray-700" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            href={routes.consultation}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition duration-300 ml-2"
          >
            Free Consultation
          </Link>
          <Link
            href="/client-portal"
            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
              isActive("/client-portal") ? "text-white bg-gray-700" : ""
            }`}
          >
            Client Portal
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-700 py-4 px-4">
          <div className="flex flex-col space-y-3">
            <div>
              <button
                className="text-gray-300 hover:text-white font-medium flex items-center justify-between w-full"
                onClick={toggleServicesDropdown}
                aria-expanded={servicesDropdownOpen}
                aria-controls="mobile-services-dropdown"
                id="mobile-services-menu-button"
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 transform ${servicesDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesDropdownOpen && (
                <div
                  className="pl-4 mt-2 space-y-2"
                  id="mobile-services-dropdown"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="mobile-services-menu-button"
                >
                  <Link
                    href={routes.services.index}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    All Services
                  </Link>
                  <Link
                    href={routes.services.manufacturingTax}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    Manufacturing Tax Services
                  </Link>
                  <Link
                    href={routes.services.rdTaxCredits}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    R&D Tax Credits
                  </Link>
                  <Link
                    href={routes.services.costAccounting}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    Cost Accounting
                  </Link>
                  <Link
                    href={routes.services.growthFinancing}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    Growth Financing
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="text-gray-300 hover:text-white font-medium flex items-center justify-between w-full"
                onClick={togglePortfolioDropdown}
                aria-expanded={portfolioDropdownOpen}
                aria-controls="mobile-portfolio-dropdown"
                id="mobile-portfolio-menu-button"
              >
                Portfolio
                <ChevronDown
                  className={`h-5 w-5 transform ${portfolioDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {portfolioDropdownOpen && (
                <div
                  className="pl-4 mt-2 space-y-2"
                  id="mobile-portfolio-dropdown"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="mobile-portfolio-menu-button"
                >
                  <Link
                    href={routes.portfolio.index}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    All Client Success Stories
                  </Link>
                  <Link
                    href={routes.portfolio.precisionMetal}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    Precision Metal Products
                  </Link>
                  <Link
                    href={routes.portfolio.advancedComposites}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    Advanced Composites
                  </Link>
                  <Link
                    href={routes.portfolio.harvestFoods}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    Harvest Foods Processing
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="text-gray-300 hover:text-white font-medium flex items-center justify-between w-full"
                onClick={toggleResourcesDropdown}
                aria-expanded={resourcesDropdownOpen}
                aria-controls="mobile-resources-dropdown"
                id="mobile-resources-menu-button"
              >
                Resources
                <ChevronDown
                  className={`h-5 w-5 transform ${resourcesDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {resourcesDropdownOpen && (
                <div
                  className="pl-4 mt-2 space-y-2"
                  id="mobile-resources-dropdown"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="mobile-resources-menu-button"
                >
                  <Link
                    href={routes.resources.index}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    All Resources
                  </Link>
                  <Link
                    href={routes.resources.manufacturingBenchmarks}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    Manufacturing Benchmarks
                  </Link>
                  <Link
                    href={routes.resources.savingsCalculators}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    Savings Calculators
                  </Link>
                  <Link
                    href={routes.resources.rdCalculators}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    R&D Calculators
                  </Link>
                  <Link
                    href={routes.resources.financialGuides}
                    className="block text-gray-400 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    Financial Guides
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={routes.blog.index}
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href={routes.about.index}
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href={routes.contact}
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href={routes.consultation}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Consultation
            </Link>
            <Link
              href="/client-portal"
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Client Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

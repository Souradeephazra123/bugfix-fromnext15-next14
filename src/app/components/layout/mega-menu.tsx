"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  label: string;
  href: string;
  description?: string;
  image?: string;
  featured?: boolean;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const servicesMenu: MenuSection[] = [
  {
    title: "Industry Solutions",
    items: [
      {
        label: "Manufacturing Solutions",
        href: "/manufacturing-solutions",
        description: "Financial strategies for manufacturing businesses",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.15.14%20-%20A%20series%20of%20abstract%20images%20representing%20success%20and%20positive%20outcomes.%20Each%20image%20uses%20the%20brand%20colors%20of%20dark%20blue%20and%20yellow_gold%2C%20featuring%20upwar-gYouJFLKxFiA6lHwWtPWpxblZ8r5I1.webp",
        featured: true,
      },
      {
        label: "Cost Reduction",
        href: "/manufacturing-solutions/cost-reduction",
        description: "Strategies to improve profit margins",
      },
      {
        label: "Cash Flow Management",
        href: "/manufacturing-solutions/cash-flow-management",
        description: "Optimize working capital for manufacturers",
      },
      {
        label: "Tax Credits",
        href: "/manufacturing-solutions/tax-credits",
        description: "Industry-specific credits and incentives",
      },
    ],
  },
  {
    title: "Core Services",
    items: [
      {
        label: "R&D Tax Credits",
        href: "/services/rd-tax-credits",
        description: "Maximize R&D tax incentives",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.15.16%20-%20A%20new%20abstract%20image%20representing%20success%20and%20positive%20outcomes.%20This%20version%20features%20upward-moving%20dark%20blue%20lines%20forming%20interconnected%20patterns%2C%20-uJ6SW6jCPmxbx9sqTuGCIUsz54YLrJ.webp",
        featured: true,
      },
      {
        label: "Manufacturing Tax",
        href: "/services/manufacturing-tax",
        description: "Tax strategies for manufacturers",
      },
      {
        label: "Growth Financing",
        href: "/services/growth-financing",
        description: "Funding options for expansion",
      },
      {
        label: "Cost Accounting",
        href: "/services/cost-accounting",
        description: "Accurate product costing systems",
      },
      {
        label: "Financial Statements",
        href: "/services/financial-statements",
        description: "Reliable financial reporting",
      },
      {
        label: "Mergers & Acquisition",
        href: "/services/mergers-acquisition",
        description: "M&A advisory for manufacturers",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.17.00%20-%20Another%20variation%20of%20an%20abstract%20image%20representing%20success.%20This%20version%20uses%20a%20subtle%2C%20gradient-filled%20background%20with%20dark%20blue%20and%20yellow_gold%20geo-Xi2P2VJbUAo1lDcEOGUTAqn4woAIGk.webp",
        featured: true,
      },
    ],
  },
];

const portfolioMenu: MenuSection[] = [
  {
    title: "Case Studies",
    items: [
      {
        label: "Precision Metal Products",
        href: "/portfolio/precision-metal-products",
        description: "CNC machining & metal fabrication",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.20.35%20-%20A%20clean%2C%20professional%20image%20for%20Precision%20Metal%20Products.%20The%20composition%20includes%20an%20abstract%2C%20geometric%20pattern%20suggesting%20precision%20and%20craftsmansh-hqSw3APFYhS30tfDXJY4dOzHtc5ic0.webp",
        featured: true,
      },
      {
        label: "Advanced Composites",
        href: "/portfolio/advanced-composites",
        description: "Advanced materials manufacturer",
      },
      {
        label: "Harvest Foods",
        href: "/portfolio/harvest-foods",
        description: "Food production & packaging",
      },
    ],
  },
  {
    title: "By Outcome",
    items: [
      {
        label: "Cost Reduction",
        href: "/portfolio/outcome/cost-reduction",
        description: "Improved profit margins",
      },
      {
        label: "Tax Savings",
        href: "/portfolio/outcome/tax-savings",
        description: "Reduced tax burden",
      },
      {
        label: "Growth Financing",
        href: "/portfolio/outcome/growth-financing",
        description: "Capital for expansion",
      },
    ],
  },
];

const resourcesMenu: MenuSection[] = [
  {
    title: "Knowledge Hub",
    items: [
      {
        label: "Manufacturing Valuation",
        href: "/resources/manufacturing-valuation",
        description: "Business valuation resources",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.02.54%20-%20Abstract%20geometric%20representation%20of%20results-oriented%20approach.%20Features%20dynamic%20upward-moving%20dark%20blue%20lines%20or%20shapes%2C%20gradually%20increasing%20in%20size-j0X7Mt7nzOU6LyYCczCrs5WDuV0OJn.webp",
        featured: true,
      },
      {
        label: "Financial Guides",
        href: "/resources/financial-guides",
        description: "Comprehensive strategies",
      },
      {
        label: "Financial Ratios",
        href: "/resources/financial-ratios",
        description: "Key performance metrics",
      },
      {
        label: "Tax Planning",
        href: "/resources/tax-planning",
        description: "Manufacturing tax strategies",
      },
    ],
  },
  {
    title: "Tools & Calculators",
    items: [
      {
        label: "Savings Calculators",
        href: "/resources/savings-calculators",
        description: "Estimate potential savings",
      },
      {
        label: "R&D Credit Calculator",
        href: "/calculators/rd-credit-calculator",
        description: "Estimate available credits",
      },
    ],
  },
  {
    title: "Blog",
    items: [
      {
        label: "Latest Articles",
        href: "/blog",
        description: "Industry insights and updates",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.11.56%20-%20Abstract%20geometric%20composition%20symbolizing%20peace%20of%20mind.%20Features%20symmetrical%2C%20harmonious%20arrangements%20of%20abstract%20shapes%20in%20muted%20tones%20of%20dark%20blue-b48MED32XSy6B5FAp46rngIShwHpSC.webp",
        featured: true,
      },
      {
        label: "Manufacturing Trends",
        href: "/blog/category/manufacturing-trends",
        description: "Industry developments",
      },
      {
        label: "Tax Updates",
        href: "/blog/category/tax-updates",
        description: "Latest tax changes",
      },
      {
        label: "Financial Strategies",
        href: "/blog/category/financial-strategies",
        description: "Optimize performance",
      },
    ],
  },
];

const verticalVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuToggle = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const getMenuContent = (menu: string) => {
    switch (menu) {
      case "services":
        return servicesMenu;
      case "portfolio":
        return portfolioMenu;
      case "resources":
        return resourcesMenu;
      default:
        return [];
    }
  };

  return (
    <div className="relative">
      <div className="flex gap-1">
        <Button
          variant="ghost"
          className={`flex items-center gap-1 text-base font-medium ${activeMenu === "services" ? "bg-muted" : ""}`}
          onClick={() => handleMenuToggle("services")}
          aria-expanded={activeMenu === "services"}
        >
          Services
          <ChevronDown
            className={`h-4 w-4 transition-transform ${activeMenu === "services" ? "rotate-180" : ""}`}
          />
        </Button>

        <Button
          variant="ghost"
          className={`flex items-center gap-1 text-base font-medium ${activeMenu === "portfolio" ? "bg-muted" : ""}`}
          onClick={() => handleMenuToggle("portfolio")}
          aria-expanded={activeMenu === "portfolio"}
        >
          Portfolio
          <ChevronDown
            className={`h-4 w-4 transition-transform ${activeMenu === "portfolio" ? "rotate-180" : ""}`}
          />
        </Button>

        <Button
          variant="ghost"
          className={`flex items-center gap-1 text-base font-medium ${activeMenu === "resources" ? "bg-muted" : ""}`}
          onClick={() => handleMenuToggle("resources")}
          aria-expanded={activeMenu === "resources"}
        >
          Resources
          <ChevronDown
            className={`h-4 w-4 transition-transform ${activeMenu === "resources" ? "rotate-180" : ""}`}
          />
        </Button>

        <Button variant="ghost" className="text-base font-medium" asChild>
          <Link href="/about">About</Link>
        </Button>

        <Button variant="ghost" className="text-base font-medium" asChild>
          <Link href="/contact">Contact</Link>
        </Button>
      </div>

      <AnimatePresence>
        {activeMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={closeMenu}
            />

            {/* Mega menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full mt-1 z-50 bg-white rounded-lg shadow-lg border"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold capitalize">{activeMenu}</h2>
                  <Button variant="ghost" size="icon" onClick={closeMenu}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getMenuContent(activeMenu).map((section, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-2">
                        {section.title}
                      </h3>
                      <ul className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            {item.featured ? (
                              <Link
                                href={item.href}
                                className="block group"
                                onClick={closeMenu}
                              >
                                <div className="overflow-hidden rounded-lg mb-2">
                                  <Image
                                    src={
                                      item.image ||
                                      "/placeholder.svg?height=100&width=200"
                                    }
                                    alt={`${item.label} - ${item.description || "Financial services for manufacturers"}`}
                                    width={400}
                                    height={200}
                                    className="w-full h-32 object-cover transition duration-300 group-hover:scale-105"
                                  />
                                </div>
                                <h4 className="font-medium group-hover:text-brand-gold transition-colors">
                                  {item.label}
                                </h4>
                                {item.description && (
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {item.description}
                                  </p>
                                )}
                              </Link>
                            ) : (
                              <Link
                                href={item.href}
                                className="group"
                                onClick={closeMenu}
                              >
                                <h4 className="font-medium group-hover:text-brand-gold transition-colors">
                                  {item.label}
                                </h4>
                                {item.description && (
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {item.description}
                                  </p>
                                )}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

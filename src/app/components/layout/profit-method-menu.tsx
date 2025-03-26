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
};

const profitMethodItems: MenuItem[] = [
  {
    label: "ProFit™ Method Overview",
    href: "/profit-method",
    description:
      "Our proprietary approach to manufacturing financial excellence",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.17.00%20-%20Another%20variation%20of%20an%20abstract%20image%20representing%20success.%20This%20version%20uses%20a%20subtle%2C%20gradient-filled%20background%20with%20dark%20blue%20and%20yellow_gold%20geo-Xi2P2VJbUAo1lDcEOGUTAqn4woAIGk.webp",
  },
  {
    label: "Precision Analysis",
    href: "/profit-method/precision-analysis",
    description: "Comprehensive analysis of your manufacturing operations",
  },
  {
    label: "Optimization Strategy",
    href: "/profit-method/optimization-strategy",
    description: "Tailored strategy to optimize operations and reduce costs",
  },
  {
    label: "Implementation",
    href: "/profit-method/implementation",
    description: "Guidance and support throughout the implementation process",
  },
  {
    label: "Success Stories",
    href: "/success-stories",
    description: "Real results from manufacturing businesses",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.15.14%20-%20A%20series%20of%20abstract%20images%20representing%20success%20and%20positive%20outcomes.%20Each%20image%20uses%20the%20brand%20colors%20of%20dark%20blue%20and%20yellow_gold%2C%20featuring%20upwar-gYouJFLKxFiA6lHwWtPWpxblZ8r5I1.webp",
  },
];

export default function ProfitMethodMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className={`flex items-center gap-1 text-base font-medium ${isOpen ? "bg-muted" : ""}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
      >
        ProFit™ Method
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={closeMenu}
            />

            {/* Dropdown menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full mt-1 z-50 bg-white rounded-lg shadow-lg border w-80"
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">ProFit™ Method</h2>
                  <Button variant="ghost" size="icon" onClick={closeMenu}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                <ul className="space-y-4">
                  {profitMethodItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block group"
                        onClick={closeMenu}
                      >
                        {item.image && (
                          <div className="overflow-hidden rounded-lg mb-2">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={`${item.label} - ${item.description || "ProFit Method for manufacturers"}`}
                              width={300}
                              height={150}
                              className="w-full h-32 object-cover transition duration-300 group-hover:scale-105"
                            />
                          </div>
                        )}
                        <h4 className="font-medium group-hover:text-brand-gold transition-colors">
                          {item.label}
                        </h4>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sitemap } from "@/lib/sitemap";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

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

  // Additional pages
  const additionalPages = [
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Client Portal", url: "/client-portal" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col pr-0 sm:max-w-xs">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="font-bold text-xl">Schapira CPA</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 mt-8 h-full pb-8 overflow-y-auto">
          <Accordion type="multiple" className="w-full">
            {mainSections.map((section) => (
              <AccordionItem key={section.key} value={section.key}>
                <AccordionTrigger className="px-7 py-4 hover:no-underline">
                  <Link
                    href={section.url}
                    className={cn(
                      "text-base font-medium transition-colors",
                      pathname === section.url ? "text-primary" : "",
                    )}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {section.title.split(" ")[0]}
                  </Link>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-7 pr-1 py-2">
                    {section.children.map((item) => (
                      <Link
                        key={item.url}
                        href={item.url}
                        className={cn(
                          "text-sm transition-colors hover:text-primary py-2",
                          pathname === item.url
                            ? "text-primary font-medium"
                            : "text-muted-foreground",
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-col px-7 space-y-4 mt-2">
            {additionalPages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className={cn(
                  "text-base font-medium transition-colors",
                  pathname === page.url ? "text-primary" : "",
                )}
                onClick={() => setOpen(false)}
              >
                {page.title}
              </Link>
            ))}
          </div>

          <div className="mt-auto px-7">
            <Link href="/consultation" onClick={() => setOpen(false)}>
              <Button className="w-full">Schedule a Consultation</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

import Link from "next/link";
import { MainNavigation } from "@/components/main-navigation";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            Schapira CPA
          </Link>
        </div>
        <div className="hidden md:flex">
          <MainNavigation />
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button variant="outline" size="sm" className="gap-2">
              <PhoneCall className="h-4 w-4" />
              (555) 123-4567
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="sm">Contact Us</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

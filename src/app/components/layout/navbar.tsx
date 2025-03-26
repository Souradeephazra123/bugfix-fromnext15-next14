import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { MainNav } from "../main-nav";
import { MegaMenu } from "../mega-menu";

// Import the ProfitMethodMenu component
import ProfitMethodMenu from "./profit-method-menu";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <MainNav />
          </SheetContent>
        </Sheet>
        <Link href="/" className="ml-4 flex items-center font-bold">
          Acme
        </Link>
        <MainNav className="mx-6 hidden md:flex" />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          {/* Add the ProfitMethodMenu component to the navbar */}
          {/* Find the div with className="flex gap-1" and add ProfitMethodMenu between Services and Portfolio */}
          <div className="flex gap-1">
            <MegaMenu />
            <ProfitMethodMenu />
            <Button variant="ghost" className="text-base font-medium" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" className="text-base font-medium" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

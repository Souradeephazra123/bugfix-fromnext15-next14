import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Schapira CPA</h3>
            <p className="text-slate-400 mb-4">
              Professional accounting and business valuation services for
              businesses and individuals.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 mt-2">
              <Mail className="h-4 w-4" />
              <span>info@schapiracpa.com</span>
            </div>
            <div className="flex items-start gap-2 text-slate-400 mt-2">
              <MapPin className="h-4 w-4 mt-1" />
              <div>
                <p>123 Business Avenue</p>
                <p>Suite 200</p>
                <p>New York, NY 10001</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/tax-preparation"
                  className="text-slate-400 hover:text-white"
                >
                  Tax Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-valuation"
                  className="text-slate-400 hover:text-white"
                >
                  Business Valuation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bookkeeping"
                  className="text-slate-400 hover:text-white"
                >
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  href="/services/financial-planning"
                  className="text-slate-400 hover:text-white"
                >
                  Financial Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/audit-assurance"
                  className="text-slate-400 hover:text-white"
                >
                  Audit & Assurance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources/manufacturing-valuation"
                  className="text-slate-400 hover:text-white"
                >
                  Manufacturing Valuation Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/financial-ratios"
                  className="text-slate-400 hover:text-white"
                >
                  Financial Ratio Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/tax-planning"
                  className="text-slate-400 hover:text-white"
                >
                  Tax Planning Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-400 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-slate-400 hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>
            © {new Date().getFullYear()} Schapira CPA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

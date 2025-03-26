import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h2 className="text-xl font-bold text-amber-500">Schapira CPA</h2>
            </Link>
            <p className="text-sm text-slate-300">
              Specialized financial services for manufacturing businesses since
              2012.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-slate-300 hover:text-amber-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-slate-300 hover:text-amber-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/tax"
                  className="text-slate-300 hover:text-amber-500"
                >
                  Manufacturing Tax Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/rd-tax-credits"
                  className="text-slate-300 hover:text-amber-500"
                >
                  R&D Tax Credits
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cost-accounting"
                  className="text-slate-300 hover:text-amber-500"
                >
                  Cost Accounting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/growth-financing"
                  className="text-slate-300 hover:text-amber-500"
                >
                  Growth Financing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/financial-analysis"
                  className="text-slate-300 hover:text-amber-500"
                >
                  Financial Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ma-advisory"
                  className="text-slate-300 hover:text-amber-500"
                >
                  M&A Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/resources"
                  className="text-slate-300 hover:text-amber-500"
                >
                  Resource Center
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-300 hover:text-amber-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-slate-300 hover:text-amber-500"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/manufacturing-valuation"
                  className="text-slate-300 hover:text-amber-500"
                >
                  Manufacturing Valuation
                </Link>
              </li>
              <li>
                <Link
                  href="/profit-method"
                  className="text-slate-300 hover:text-amber-500"
                >
                  ProFit™ Method
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">
              Contact Us
            </h3>
            <address className="not-italic text-sm text-slate-300 space-y-2">
              <p>236 Broadway Ave</p>
              <p>Suite #220</p>
              <p>Brooklyn, NY 11211</p>
              <p className="mt-4">
                <a href="tel:+12123806309" className="hover:text-amber-500">
                  (212) 380-6309
                </a>
              </p>
              <p>
                <a
                  href="mailto:mendel@schapiracpa.com"
                  className="hover:text-amber-500"
                >
                  mendel@schapiracpa.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Schapira CPA. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-slate-400 hover:text-amber-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-slate-400 hover:text-amber-500"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-slate-400 hover:text-amber-500"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

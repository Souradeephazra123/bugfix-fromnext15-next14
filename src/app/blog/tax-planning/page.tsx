import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Tax Planning Insights for Manufacturers | Schapira CPA",
  description:
    "Expert tax planning strategies, tips, and advice for manufacturing businesses to minimize tax burden and maximize cash flow.",
};

export default function TaxPlanningBlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tax Planning", href: "/blog/tax-planning", active: true },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Tax Planning for Manufacturers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic insights and expert advice to help manufacturing
            businesses minimize tax burden and maximize available incentives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="R&D Tax Credits"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">March 14, 2025</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  Featured
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Manufacturing R&D Credits Playbook
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how to identify, document, and claim valuable R&D tax
                credits for your manufacturing business with our comprehensive
                guide.
              </p>
              <Link
                href="/blog/tax-planning/manufacturing-rd-credits-playbook"
                className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
              >
                Read Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Section 179 Deductions"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">March 5, 2025</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  Tax Strategy
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Maximizing Section 179 Deductions for Manufacturing Equipment
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to strategically time and structure equipment
                purchases to maximize available tax deductions under Section
                179.
              </p>
              <Link
                href="/blog/tax-planning/section-179-deductions"
                className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
              >
                Read Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tax Planning Calendar"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">February 28, 2025</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  Planning
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Year-Round Tax Planning Calendar for Manufacturers
              </h3>
              <p className="text-gray-600 mb-4">
                A month-by-month guide to tax planning activities that will help
                manufacturing businesses minimize tax burden and avoid
                last-minute scrambles.
              </p>
              <Link
                href="/blog/tax-planning/year-round-calendar"
                className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
              >
                Read Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/consultation"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold inline-block transition duration-300"
          >
            Schedule a Tax Planning Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

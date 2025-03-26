import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Harvest Foods Case Study | Schapira CPA",
  description:
    "How we helped Harvest Foods manage seasonal cash flow challenges and secure $2.5M for facility expansion.",
};

export default function HarvestFoodsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/portfolio"
        className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to All Case Studies
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-64 bg-gray-200 relative">
          <img
            src="/placeholder.svg?height=256&width=1024"
            alt="Harvest Foods Facility"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="text-yellow-600 font-bold mb-2">Food Processing</div>
          <h1 className="text-3xl font-bold mb-4">Harvest Foods</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">$2.5M</div>
              <div className="text-gray-600">Facility Expansion Financing</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">30%</div>
              <div className="text-gray-600">
                Reduction in Seasonal Cash Gap
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">$180K</div>
              <div className="text-gray-600">Annual Tax Savings</div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-600 mb-4">
              Harvest Foods, a food processing company specializing in seasonal
              produce, faced significant cash flow challenges due to the
              cyclical nature of their business. They needed to expand their
              processing facility to accommodate growth but struggled with
              inconsistent cash flow that made traditional financing difficult
              to secure.
            </p>
            <p className="text-gray-600">
              Additionally, their existing financial systems didn't provide
              adequate visibility into product line profitability, making it
              difficult to make informed business decisions.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-gray-600 mb-4">
              We implemented a comprehensive financial strategy that included:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>
                Seasonal cash flow management plan with targeted inventory
                controls
              </li>
              <li>
                Structured financing proposal for facility expansion that
                accounted for seasonal revenue patterns
              </li>
              <li>
                Implementation of activity-based costing to identify true
                product profitability
              </li>
              <li>
                Tax planning strategies specific to food processing operations
              </li>
              <li>
                Financial forecasting model that incorporated seasonal
                variations
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Results</h2>
            <p className="text-gray-600 mb-4">
              Through our partnership with Harvest Foods, we achieved:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                Secured $2.5M in facility expansion financing with terms that
                accommodated seasonal cash flow
              </li>
              <li>
                Reduced seasonal cash flow gap by 30% through improved inventory
                management and vendor terms
              </li>
              <li>
                Identified $180K in annual tax savings through strategic tax
                planning
              </li>
              <li>
                Improved product line profitability analysis that led to a 15%
                increase in overall margins
              </li>
              <li>
                Implemented financial dashboards that provided real-time
                visibility into key performance indicators
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Client Testimonial</h2>
            <p className="text-gray-600 italic mb-4">
              "The seasonal nature of our business created unique financial
              challenges that our previous accountants struggled to address.
              Schapira CPA developed strategies that not only helped us manage
              our cash flow more effectively but also secured the financing we
              needed for expansion. Their understanding of food processing
              operations was invaluable."
            </p>
            <div className="font-bold">Robert Chen</div>
            <div className="text-gray-500">CEO, Harvest Foods</div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Ready to improve your manufacturing business's cash flow and secure
          growth financing?
        </h2>
        <Link
          href="/consultation"
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold inline-block transition duration-300"
        >
          Schedule a Free Consultation
        </Link>
      </div>
    </div>
  );
}

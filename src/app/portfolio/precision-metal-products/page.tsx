import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Precision Metal Products Case Study | Schapira CPA",
  description:
    "How we helped Precision Metal Products save $175K in taxes and reduce working capital requirements by 22%.",
};

export default function PrecisionMetalProductsPage() {
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
            alt="Precision Metal Products Facility"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="text-yellow-600 font-bold mb-2">
            Metal Fabrication
          </div>
          <h1 className="text-3xl font-bold mb-4">Precision Metal Products</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">$175K</div>
              <div className="text-gray-600">Annual Tax Savings</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">22%</div>
              <div className="text-gray-600">Working Capital Reduction</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">15%</div>
              <div className="text-gray-600">Profit Margin Increase</div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-600 mb-4">
              Precision Metal Products, a mid-sized metal fabrication company
              with 85 employees, was experiencing rapid growth but facing cash
              flow challenges. Their previous accounting firm lacked
              manufacturing industry expertise, resulting in missed tax
              opportunities and inefficient financial processes.
            </p>
            <p className="text-gray-600">
              The company needed to reduce tax burden, improve cash flow, and
              develop a financial strategy to support their expansion plans
              while maintaining operational efficiency.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-gray-600 mb-4">
              We implemented a comprehensive financial strategy that included:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>
                Detailed R&D tax credit analysis for their process improvement
                initiatives
              </li>
              <li>
                Cost segregation study for their recently purchased
                manufacturing facility
              </li>
              <li>
                Implementation of a job costing system to identify profitability
                by product line
              </li>
              <li>
                Working capital optimization strategy to improve cash flow
              </li>
              <li>
                Equipment financing structure that preserved capital for
                operations
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Results</h2>
            <p className="text-gray-600 mb-4">
              Within the first year of working with Schapira CPA, Precision
              Metal Products achieved:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                $175,000 in tax savings through R&D credits and accelerated
                depreciation
              </li>
              <li>
                22% reduction in working capital requirements through improved
                inventory management
              </li>
              <li>
                15% increase in profit margins by identifying and addressing
                unprofitable product lines
              </li>
              <li>Secured $2.3M in equipment financing with favorable terms</li>
              <li>
                Implemented financial dashboards that provided real-time
                visibility into key metrics
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Client Testimonial</h2>
            <p className="text-gray-600 italic mb-4">
              "The team at Schapira CPA transformed our financial operations.
              Their manufacturing expertise made all the difference - they
              understood our processes and recognized opportunities our previous
              accountants had missed. The tax savings alone paid for their
              services many times over."
            </p>
            <div className="font-bold">Michael Johnson</div>
            <div className="text-gray-500">CFO, Precision Metal Products</div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Ready to achieve similar results for your manufacturing business?
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

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Advanced Composites Case Study | Schapira CPA",
  description:
    "How we helped Advanced Composites secure $1.2M in equipment financing and save $135K annually through R&D tax credits.",
};

export default function AdvancedCompositesPage() {
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
            alt="Advanced Composites Facility"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="text-yellow-600 font-bold mb-2">
            Plastics & Composites
          </div>
          <h1 className="text-3xl font-bold mb-4">Advanced Composites</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">$1.2M</div>
              <div className="text-gray-600">Equipment Financing</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">$135K</div>
              <div className="text-gray-600">Annual R&D Tax Credits</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">18%</div>
              <div className="text-gray-600">Production Capacity Increase</div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-600 mb-4">
              Advanced Composites, a manufacturer of high-performance composite
              materials for aerospace and automotive applications, needed to
              expand their production capacity to meet growing demand. However,
              they faced challenges in securing financing for new equipment and
              were unaware of potential R&D tax credits for their innovative
              manufacturing processes.
            </p>
            <p className="text-gray-600">
              The company had been turned down by several traditional banks for
              equipment loans and was considering delaying their expansion
              plans, which would have resulted in lost market opportunities.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-gray-600 mb-4">
              We developed a comprehensive financial strategy that included:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>
                Detailed analysis of their R&D activities to identify qualifying
                expenses for tax credits
              </li>
              <li>
                Structured equipment financing proposal that highlighted the
                company's strong cash flow
              </li>
              <li>
                Implementation of improved financial reporting to better
                demonstrate business stability
              </li>
              <li>
                Strategic tax planning to optimize their overall tax position
              </li>
              <li>
                Cost accounting system to accurately track project profitability
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Results</h2>
            <p className="text-gray-600 mb-4">
              Through our partnership with Advanced Composites, we achieved:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                Secured $1.2M in equipment financing with favorable terms
                through our network of manufacturing-focused lenders
              </li>
              <li>
                Identified and documented $135K in annual R&D tax credits for
                their process innovation activities
              </li>
              <li>
                Increased production capacity by 18% through the acquisition of
                new equipment
              </li>
              <li>
                Improved financial reporting that provided better visibility
                into business performance
              </li>
              <li>
                Enhanced cash flow management that supported their growth
                initiatives
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Client Testimonial</h2>
            <p className="text-gray-600 italic mb-4">
              "After being turned down by three banks, we were skeptical about
              our chances of securing the financing we needed. Schapira CPA not
              only helped us obtain the equipment financing but also identified
              substantial R&D tax credits we weren't aware of. Their
              manufacturing industry expertise made all the difference."
            </p>
            <div className="font-bold">Jennifer Martinez</div>
            <div className="text-gray-500">CFO, Advanced Composites</div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Ready to secure financing and tax credits for your manufacturing
          business?
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

import type { Metadata } from "next";
import { CashFlowPlanner } from "@/components/calculators/cash-flow-planner";

export const metadata: Metadata = {
  title:
    "Manufacturing Cash Flow Forecast & Working Capital Planner | Schapira CPA",
  description:
    "Project your manufacturing business cash flow with our interactive 12-month forecast tool. Optimize working capital, analyze multiple scenarios, and plan for growth.",
  keywords:
    "manufacturing cash flow forecast template, working capital optimization, manufacturing cash flow planner, production cycle planning, inventory cash flow management",
};

export default function CashFlowPlannerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Manufacturing Cash Flow Forecast & Working Capital Planner
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-blue-800">
            <strong>For manufacturing businesses:</strong> This tool is
            specifically designed to account for production cycles, inventory
            management, and supplier/customer payment terms unique to
            manufacturing operations.
          </p>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          Effective cash flow management is critical for manufacturing
          businesses. Our interactive planner helps you project your 12-month
          cash position, compare multiple scenarios, and identify opportunities
          to optimize working capital.
        </p>

        <CashFlowPlanner />

        <div className="mt-16 border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Cash Flow Planning Matters for Manufacturers
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Production Cycle Management
              </h3>
              <p className="text-gray-600">
                Manufacturing businesses face unique cash flow challenges due to
                the gap between purchasing raw materials and receiving payment
                for finished goods. Our planner helps you visualize and manage
                these timing differences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Inventory Optimization
              </h3>
              <p className="text-gray-600">
                Balance the need for sufficient inventory against the cash tied
                up in raw materials and finished goods. Our tool helps you find
                the sweet spot for your working capital allocation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Seasonal Demand Planning
              </h3>
              <p className="text-gray-600">
                Many manufacturers face seasonal fluctuations. Our scenario
                planning capabilities help you prepare for peak periods while
                managing cash during slower months.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Equipment Investment Timing
              </h3>
              <p className="text-gray-600">
                Plan for major capital expenditures by visualizing their impact
                on your cash position. Identify the optimal timing for equipment
                investments based on your projected cash flow.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              Need Personalized Cash Flow Guidance?
            </h3>
            <p className="mb-4">
              Our manufacturing financial specialists can help you develop
              comprehensive cash flow strategies tailored to your specific
              business needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-150 ease-in-out"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

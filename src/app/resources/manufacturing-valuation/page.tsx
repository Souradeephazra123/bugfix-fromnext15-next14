import type { Metadata } from "next";
import ValuationCalculator from "@/components/valuation-calculator";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Manufacturing Business Valuation Calculator | Schapira CPA",
  description:
    "Estimate your manufacturing company's value using multiple valuation methods including market multiples, DCF, and asset-based approaches.",
};

export default function ManufacturingValuationPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb />
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Manufacturing Business Valuation Calculator
          </h1>
          <p className="text-lg text-gray-700">
            Use this interactive tool to estimate the value of your
            manufacturing business based on industry standards, financial
            performance, and key value drivers.
          </p>
        </div>

        <ValuationCalculator />

        <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">About This Calculator</h2>
          <p className="mb-4">
            This calculator provides an estimation of your manufacturing
            business's value using three primary valuation methods:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <span className="font-medium">Market Multiple Analysis:</span>{" "}
              Compares your business to industry benchmarks
            </li>
            <li>
              <span className="font-medium">Discounted Cash Flow (DCF):</span>{" "}
              Projects future cash flows and discounts them to present value
            </li>
            <li>
              <span className="font-medium">Asset-Based Valuation:</span>{" "}
              Calculates the net value of business assets
            </li>
          </ul>
          <p className="text-sm text-gray-600 italic">
            Note: This calculator is for informational purposes only and should
            not be considered a formal valuation. For a detailed valuation,
            please{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

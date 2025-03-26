import type { Metadata } from "next";
import FinancialRatioCalculator from "@/components/financial-ratio-calculator";
import dynamic from "next/dynamic";
// Dynamically import Breadcrumb with SSR disabled
// const Breadcrumb = dynamic(() => import("@/components/breadcrumb"), { ssr: false });

import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Financial Ratio Calculator | Schapira CPA",
  description:
    "Calculate key financial ratios to assess your business's liquidity, profitability, efficiency, and leverage.",
};

export default function FinancialRatiosPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb />
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Financial Ratio Calculator
          </h1>
          <p className="text-lg text-gray-700">
            Use this interactive tool to calculate and analyze key financial
            ratios that provide insights into your business's performance.
          </p>
        </div>

        {/* <FinancialRatioCalculator /> */}

        <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">About This Calculator</h2>
          <p className="mb-4">
            This calculator helps you analyze your business's financial health
            through four key categories of ratios:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <span className="font-medium">Liquidity Ratios:</span> Measure
              your ability to meet short-term obligations
            </li>
            <li>
              <span className="font-medium">Profitability Ratios:</span>{" "}
              Evaluate your ability to generate earnings
            </li>
            <li>
              <span className="font-medium">Efficiency Ratios:</span> Assess how
              effectively you're using your assets
            </li>
            <li>
              <span className="font-medium">Leverage Ratios:</span> Analyze your
              debt levels and ability to meet obligations
            </li>
          </ul>
          <p className="text-sm text-gray-600 italic">
            Note: This calculator is for informational purposes only. For a
            detailed financial analysis, please{" "}
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

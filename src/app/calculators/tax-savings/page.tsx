import type { Metadata } from "next";
import TaxSavingsCalculator from "@/components/calculators/tax-savings-calculator";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Manufacturing Tax Savings Calculator | Schapira CPA",
  description:
    "Estimate your manufacturing business tax savings with our interactive calculator. Discover potential savings from R&D credits, Section 179, and more.",
  keywords:
    "manufacturing tax savings, tax reduction calculator, Section 179 calculator, R&D tax credit estimator, manufacturing tax incentives",
};

export default function TaxSavingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Manufacturing Tax Savings Calculator"
        description="Estimate your potential tax savings with our interactive calculator designed specifically for manufacturing businesses."
      />

      <div className="mt-8 mb-16">
        <TaxSavingsCalculator />
      </div>

      <div className="prose max-w-none mb-16">
        <h2 className="text-2xl font-bold mb-4">
          How Our Tax Savings Calculator Works
        </h2>
        <p>
          Our Manufacturing Tax Savings Calculator helps you identify and
          quantify potential tax saving opportunities specific to your
          manufacturing business. By entering basic information about your
          operations, investments, and expenses, you'll receive an estimate of
          potential tax savings across multiple categories.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">
          Tax Saving Categories
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>R&D Tax Credits</strong> - For developing or improving
            products, processes, or software
          </li>
          <li>
            <strong>Section 179 Deductions</strong> - For purchasing qualifying
            equipment and machinery
          </li>
          <li>
            <strong>Bonus Depreciation</strong> - For immediate expensing of
            eligible property
          </li>
          <li>
            <strong>Cost Segregation</strong> - For accelerating depreciation on
            building components
          </li>
          <li>
            <strong>Energy Efficiency Incentives</strong> - For implementing
            energy-saving improvements
          </li>
          <li>
            <strong>State-Specific Incentives</strong> - Based on your
            manufacturing location
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-4">
          Why Manufacturing Businesses Need Tax Planning
        </h3>
        <p>
          Manufacturing businesses face unique tax challenges and opportunities.
          With complex supply chains, significant capital investments, and
          ongoing R&D activities, manufacturers can benefit from specialized tax
          strategies. Our calculator helps you identify these opportunities and
          estimate their potential impact on your bottom line.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-4">
            Ready for a Personalized Tax Strategy?
          </h3>
          <p>
            While our calculator provides valuable estimates, every
            manufacturing business has unique circumstances. Contact our team
            for a comprehensive tax analysis and customized strategy to maximize
            your savings.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}

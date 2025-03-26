import type { Metadata } from "next";
import { RDCreditCalculator } from "@/components/calculators/rd-credit-calculator";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "R&D Tax Credit Calculator for Manufacturers | Schapira CPA",
  description:
    "Estimate your potential manufacturing R&D tax credits with our specialized calculator. Discover tax savings from your innovation and process improvement activities.",
  keywords:
    "R&D tax credit calculator, manufacturing tax credits, research and development tax savings, process improvement tax credits",
};

export default function RDCreditCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="R&D Tax Credit Calculator"
        description="Estimate potential tax savings from your manufacturing research and development activities."
      />

      <div className="mt-8">
        <SectionHeading
          title="Manufacturing R&D Credit Estimator"
          description="Many manufacturing companies qualify for R&D tax credits but don't claim them. Use this calculator to estimate how much your company could save."
        />

        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <RDCreditCalculator />

          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">
              What Qualifies as R&D in Manufacturing?
            </h3>
            <p className="mb-4">Manufacturing R&D activities often include:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Developing new manufacturing processes</li>
              <li>Improving existing production methods</li>
              <li>Creating prototypes or models</li>
              <li>Testing new materials</li>
              <li>Designing and developing tooling and fixtures</li>
              <li>Automating or improving manufacturing systems</li>
              <li>Engineering for improved quality or reduced costs</li>
            </ul>
            <p>
              This calculator provides an estimate only. For a detailed analysis
              of your specific R&D credit potential,
              <a
                href="/contact"
                className="text-amber-700 hover:text-amber-900 font-medium"
              >
                {" "}
                schedule a consultation
              </a>{" "}
              with our manufacturing tax specialists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

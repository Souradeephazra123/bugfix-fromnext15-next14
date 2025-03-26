import { Calculator } from "@/components/calculator";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Manufacturing Tax Savings Calculator | Schapira CPA",
  description:
    "Estimate potential tax savings for your manufacturing business with our specialized calculator.",
  canonical: "/resources/financial-guides/manufacturing-tax-calculator",
});

export default function ManufacturingTaxCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Calculator />
      </div>
    </main>
  );
}

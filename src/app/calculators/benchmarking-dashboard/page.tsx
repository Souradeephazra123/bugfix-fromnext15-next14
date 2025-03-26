import type { Metadata } from "next";
import Link from "next/link";
import { BenchmarkingDashboard } from "@/components/calculators/benchmarking/benchmarking-dashboard";
import { AuthGate } from "@/components/auth/auth-gate";
import { DynamicBreadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Financial Benchmarking Dashboard | Schapira CPA",
  description:
    "Compare your manufacturing business financial metrics against industry standards. Identify performance gaps and improvement opportunities with our interactive benchmarking tool.",
  keywords:
    "manufacturing financial benchmarks, industry KPI comparison tool, manufacturing performance metrics, financial ratio benchmarking, manufacturing industry standards",
};

export default function BenchmarkingDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-8">
        <DynamicBreadcrumb
          currentUrl="/calculators/benchmarking-dashboard"
          className="mb-6"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Manufacturing Financial Benchmarking Dashboard
        </h1>
        <p className="text-gray-600 mb-8">
          Compare your financial performance against industry standards and
          identify improvement opportunities
        </p>

        <AuthGate>
          <BenchmarkingDashboard />

          {/* Related Content Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Learn More About Benchmarking
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover how financial benchmarking can transform your
                    manufacturing business by identifying performance gaps and
                    setting realistic goals.
                  </p>
                  <Link
                    href="/resources/blog/unlocking-manufacturing-success-financial-benchmarking"
                    className="flex items-center text-primary font-medium hover:underline"
                  >
                    Read the full article
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Financial Ratio Calculator
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Calculate and analyze key financial ratios for your
                    manufacturing business to complement your benchmarking
                    analysis.
                  </p>
                  <Link
                    href="/calculators/financial-ratio"
                    className="flex items-center text-primary font-medium hover:underline"
                  >
                    Try the calculator
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </AuthGate>
      </div>
    </div>
  );
}

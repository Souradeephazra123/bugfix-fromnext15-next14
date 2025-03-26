import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalculatorCard } from "@/components/calculators/calculator-card";
import { AuthGate } from "@/components/auth/auth-gate";
import {
  ChevronRight,
  Calculator,
  BarChart4,
  PieChart,
  TrendingUp,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Financial Calculators | Schapira CPA",
  description:
    "Access specialized financial calculators for manufacturing businesses. Plan cash flow, estimate tax savings, and optimize working capital with our interactive tools.",
  keywords:
    "manufacturing financial calculators, manufacturing cash flow planner, tax savings calculator, working capital optimization, manufacturing business tools",
};

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Manufacturing financial planning"
            width={1600}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Manufacturing Financial Calculators
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Specialized tools to optimize your manufacturing business
              finances, from cash flow forecasting to tax savings estimation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#calculator-section"
                className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-150 ease-in-out flex items-center"
              >
                Explore Calculators
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <AuthGate>
                <Link
                  href="/calculators/cash-flow-planner"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition duration-150 ease-in-out"
                >
                  Start Planning Now
                </Link>
              </AuthGate>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Calculator Preview */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                Featured Tool
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Cash Flow Forecast & Working Capital Planner
              </h2>
              <p className="text-gray-600 mb-6">
                Our most comprehensive tool for manufacturing businesses.
                Project your cash flow across 12 months with
                manufacturing-specific variables like production cycles,
                inventory management, and supplier payment terms.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Multi-scenario planning for different business conditions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Working capital optimization recommendations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Production cycle timing and inventory management
                  </span>
                </li>
              </ul>
              <AuthGate>
                <Link
                  href="/calculators/cash-flow-planner"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-150 ease-in-out"
                >
                  Try Cash Flow Planner
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </AuthGate>
            </div>
            <div className="md:w-1/2 bg-gray-100 relative min-h-[300px] md:min-h-0">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Cash Flow Planner Preview"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-900/60 flex items-center justify-center">
                <Link
                  href="/calculators/cash-flow-planner"
                  className="bg-white/90 hover:bg-white text-blue-900 px-6 py-3 rounded-lg font-medium transition duration-150 ease-in-out flex items-center"
                >
                  <BarChart4 className="mr-2 h-5 w-5" />
                  Preview Tool
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div id="calculator-section" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Financial Tools for Manufacturing Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our specialized calculators are designed to address the unique
            financial challenges of manufacturing businesses. Access requires a
            free account.
          </p>
        </div>

        <AuthGate>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CalculatorCard
              title="Cash Flow Forecast & Working Capital Planner"
              description="Project your manufacturing cash flow with production cycles, inventory management, and supplier payment terms."
              icon={<BarChart4 className="h-8 w-8" />}
              benefits={[
                "12-month cash flow projection",
                "Working capital optimization",
                "Multi-scenario planning",
              ]}
              href="/calculators/cash-flow-planner"
              imageSrc="/placeholder.svg?height=300&width=400"
              featured={true}
            />

            <CalculatorCard
              title="Tax Savings Calculator"
              description="Estimate potential tax savings for your manufacturing business with specialized deductions and credits."
              icon={<DollarSign className="h-8 w-8" />}
              benefits={[
                "R&D credit estimation",
                "Section 179 deduction calculator",
                "Tax strategy recommendations",
              ]}
              href="/calculators/tax-savings"
              imageSrc="/placeholder.svg?height=300&width=400"
            />

            <CalculatorCard
              title="Manufacturing Valuation Calculator"
              description="Determine the estimated value of your manufacturing business based on industry-specific metrics."
              icon={<Calculator className="h-8 w-8" />}
              benefits={[
                "Multiple valuation methods",
                "Industry benchmark comparisons",
                "Sensitivity analysis",
              ]}
              href="/resources/manufacturing-valuation"
              imageSrc="/placeholder.svg?height=300&width=400"
            />

            <CalculatorCard
              title="Financial Ratio Analysis"
              description="Calculate and interpret key financial ratios specific to manufacturing operations."
              icon={<PieChart className="h-8 w-8" />}
              benefits={[
                "Manufacturing-specific ratios",
                "Industry benchmarking",
                "Performance trend analysis",
              ]}
              href="/resources/financial-ratios"
              imageSrc="/placeholder.svg?height=300&width=400"
              comingSoon={true}
            />

            <CalculatorCard
              title="Equipment ROI Calculator"
              description="Analyze the return on investment for new manufacturing equipment purchases."
              icon={<TrendingUp className="h-8 w-8" />}
              benefits={[
                "Payback period calculation",
                "Production efficiency impact",
                "Financing option comparison",
              ]}
              href="#"
              imageSrc="/placeholder.svg?height=300&width=400"
              comingSoon={true}
            />
          </div>
        </AuthGate>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            What Manufacturing Clients Say About Our Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold">JP</span>
                </div>
                <div>
                  <h3 className="font-medium">John Peterson</h3>
                  <p className="text-sm text-gray-500">
                    Precision Metal Products
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                "The Cash Flow Planner helped us identify a critical cash crunch
                three months before it would have happened. We adjusted our
                inventory and saved thousands in potential emergency financing
                costs."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold">SM</span>
                </div>
                <div>
                  <h3 className="font-medium">Sarah Miller</h3>
                  <p className="text-sm text-gray-500">Advanced Composites</p>
                </div>
              </div>
              <p className="text-gray-600">
                "We used the Tax Savings Calculator and discovered R&D credits
                we didn't know we qualified for. The tool guided us through the
                documentation process and saved us over $45,000."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold">RJ</span>
                </div>
                <div>
                  <h3 className="font-medium">Robert Johnson</h3>
                  <p className="text-sm text-gray-500">
                    Harvest Foods Processing
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                "The Working Capital Planner helped us optimize our inventory
                levels and negotiate better terms with suppliers. We've reduced
                our cash conversion cycle by 15 days in just three months."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-800 text-white rounded-xl overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to optimize your manufacturing finances?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Create a free account to access all our specialized
                manufacturing financial calculators.
              </p>
              <AuthGate>
                <Link
                  href="/calculators/cash-flow-planner"
                  className="inline-flex items-center bg-white text-blue-800 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-150 ease-in-out"
                >
                  Get Started Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </AuthGate>
            </div>
            <div className="md:w-1/3 bg-blue-900 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block p-3 bg-blue-800 rounded-full mb-4">
                  <Calculator className="h-10 w-10 text-white" />
                </div>
                <p className="text-blue-100 text-lg font-medium">
                  All calculators included with your free account
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

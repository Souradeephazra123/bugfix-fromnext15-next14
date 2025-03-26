import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  PieChart,
  TrendingUp,
  DollarSign,
  BarChart3,
  Percent,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Calculators for Manufacturing | Schapira CPA",
  description:
    "Access our suite of specialized financial calculators for manufacturing businesses. Estimate business value, analyze financial ratios, calculate R&D tax credits, and more.",
  keywords:
    "manufacturing financial calculators, business valuation calculator, financial ratio calculator, R&D tax credit calculator, manufacturing finance tools",
};

export default function FinancialCalculatorsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb />
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Financial Calculators for Manufacturing Businesses
          </h1>
          <p className="text-lg text-gray-700">
            Our specialized calculators help manufacturing business owners and
            financial leaders make informed decisions with accurate financial
            projections and analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Business Valuation Calculator */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-slate-50">
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-blue-600" />
                Business Valuation Calculator
              </CardTitle>
              <CardDescription>
                Estimate your manufacturing business's market value
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Determine your manufacturing company's value using multiple
                valuation methods including market multiples, discounted cash
                flow, and asset-based approaches.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>Compare multiple valuation methodologies</li>
                <li>Adjust for industry-specific value drivers</li>
                <li>Perform sensitivity analysis</li>
                <li>Generate detailed valuation reports</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/manufacturing-valuation">
                  Open Valuation Calculator
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Financial Ratio Calculator */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-slate-50">
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Financial Ratio Calculator
              </CardTitle>
              <CardDescription>
                Analyze your manufacturing business's financial health
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Calculate and interpret key financial ratios specific to
                manufacturing businesses. Compare your results to industry
                benchmarks.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>Liquidity and solvency ratios</li>
                <li>Profitability and efficiency metrics</li>
                <li>Manufacturing-specific KPIs</li>
                <li>Industry benchmark comparisons</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/financial-ratios">
                  Open Ratio Calculator
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* R&D Tax Credit Calculator */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-slate-50">
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-blue-600" />
                R&D Tax Credit Calculator
              </CardTitle>
              <CardDescription>
                Estimate potential R&D tax credits for your manufacturing
                activities
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Calculate potential R&D tax credits based on your qualifying
                research and development activities in manufacturing.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>Identify qualifying R&D activities</li>
                <li>Calculate federal and state credit estimates</li>
                <li>Project multi-year tax savings</li>
                <li>Determine documentation requirements</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/calculators/rd-credit-calculator">
                  Open R&D Credit Calculator
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Break-Even Analysis Calculator */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-slate-50">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Break-Even Analysis Calculator
              </CardTitle>
              <CardDescription>
                Determine your manufacturing break-even point
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Calculate the production volume or revenue needed to cover all
                costs and begin generating profit for your manufacturing
                operation.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>Fixed and variable cost analysis</li>
                <li>Unit and revenue-based break-even points</li>
                <li>Margin of safety calculations</li>
                <li>Multi-product break-even analysis</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/break-even-calculator">Coming Soon</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Equipment ROI Calculator */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-slate-50">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-blue-600" />
                Equipment ROI Calculator
              </CardTitle>
              <CardDescription>
                Evaluate manufacturing equipment investments
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Analyze the return on investment for new manufacturing equipment
                purchases, considering productivity gains, tax benefits, and
                financing costs.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>Net Present Value (NPV) analysis</li>
                <li>Payback period calculation</li>
                <li>Section 179 and bonus depreciation benefits</li>
                <li>Financing vs. cash purchase comparison</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/equipment-roi-calculator">
                  Coming Soon
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Cash Flow Forecasting Tool */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-slate-50">
              <CardTitle className="flex items-center gap-2">
                <Percent className="h-5 w-5 text-blue-600" />
                Cash Flow Forecasting Tool
              </CardTitle>
              <CardDescription>
                Project your manufacturing business's future cash position
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Create detailed cash flow projections to anticipate future cash
                needs and plan for seasonal fluctuations in your manufacturing
                business.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>13-week cash flow projections</li>
                <li>Seasonal adjustment modeling</li>
                <li>Working capital requirement analysis</li>
                <li>Cash conversion cycle optimization</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/cash-flow-forecasting">Coming Soon</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mb-10">
          <h2 className="text-xl font-bold mb-3">
            Need a Custom Financial Analysis?
          </h2>
          <p className="mb-4">
            Our team can create customized financial models and analysis tools
            specific to your manufacturing business's unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/contact">Contact Our Financial Team</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/consultation">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-xl font-bold mb-4">
            How Our Calculators Help Manufacturing Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Data-Driven Decision Making
              </h3>
              <p className="text-gray-700">
                Our calculators provide the quantitative analysis needed to make
                informed financial and operational decisions for your
                manufacturing business.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Industry-Specific Metrics
              </h3>
              <p className="text-gray-700">
                Unlike generic calculators, ours are tailored to manufacturing
                businesses with industry-specific benchmarks and considerations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Strategic Planning Support
              </h3>
              <p className="text-gray-700">
                Use our calculators to model different scenarios and understand
                the financial implications of strategic decisions before
                implementing them.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Tax Optimization</h3>
              <p className="text-gray-700">
                Identify tax-saving opportunities specific to manufacturing
                businesses, including R&D credits, equipment depreciation, and
                more.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">
            Have Questions About Our Financial Calculators?
          </h2>
          <p className="text-gray-700 mb-6">
            Our team of manufacturing financial specialists is ready to help you
            get the most out of these tools.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

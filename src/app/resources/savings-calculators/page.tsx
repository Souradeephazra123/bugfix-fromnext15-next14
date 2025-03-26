import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Manufacturing Savings Calculators | Schapira CPA",
  description:
    "Interactive calculators to estimate potential tax savings, financing costs, and ROI for manufacturing investments.",
};

export default function SavingsCalculatorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Manufacturing Savings Calculators
      </h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Use these interactive calculators to estimate potential savings and make
        informed financial decisions for your manufacturing business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              Equipment Financing Calculator
            </h2>
            <p className="text-gray-600 mb-6">
              Calculate monthly payments, total interest costs, and compare
              different financing options for your manufacturing equipment
              purchases.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-4">
                This calculator is coming soon. Check back for updates or
                contact us for personalized equipment financing analysis.
              </p>
              <a
                href="/consultation"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded text-sm"
              >
                Request Custom Analysis
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Tax Savings Estimator</h2>
            <p className="text-gray-600 mb-6">
              Estimate potential tax savings from various manufacturing-specific
              deductions, credits, and strategies.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-4">
                This calculator is coming soon. Check back for updates or
                contact us for a personalized tax savings analysis.
              </p>
              <a
                href="/consultation"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded text-sm"
              >
                Request Custom Analysis
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              Cost Accounting ROI Calculator
            </h2>
            <p className="text-gray-600 mb-6">
              Calculate the potential return on investment from implementing
              improved cost accounting systems in your manufacturing business.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-4">
                This calculator is coming soon. Check back for updates or
                contact us for a personalized ROI analysis.
              </p>
              <a
                href="/consultation"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded text-sm"
              >
                Request Custom Analysis
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              Working Capital Optimizer
            </h2>
            <p className="text-gray-600 mb-6">
              Analyze your current working capital efficiency and identify
              opportunities to improve cash flow in your manufacturing
              operations.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-4">
                This calculator is coming soon. Check back for updates or
                contact us for a personalized working capital analysis.
              </p>
              <a
                href="/consultation"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded text-sm"
              >
                Request Custom Analysis
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

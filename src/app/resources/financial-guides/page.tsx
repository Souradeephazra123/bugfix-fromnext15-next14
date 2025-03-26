import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { Calculator } from "@/components/calculator";

export const metadata = {
  title: "Manufacturing Financial Guides | Schapira CPA",
  description:
    "Comprehensive guides on tax strategies, financing options, and financial management for manufacturing businesses.",
};

export default function FinancialGuidesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Calculator />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Manufacturing Financial Guides
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Access comprehensive guides on tax strategies, financing options,
            and financial management specifically for manufacturing businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 text-center">
                  Manufacturing Tax Guide
                </h2>
                <p className="text-gray-600 mb-6">
                  Comprehensive guide to tax strategies, credits, and deductions
                  specifically for manufacturing businesses.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                  <li>R&D tax credit opportunities</li>
                  <li>Section 179 and bonus depreciation</li>
                  <li>State tax incentives for manufacturers</li>
                  <li>International tax considerations</li>
                  <li>Tax planning strategies</li>
                </ul>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Guide
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 text-center">
                  Manufacturing Financing Guide
                </h2>
                <p className="text-gray-600 mb-6">
                  Explore financing options and strategies to fund growth,
                  equipment purchases, and working capital needs.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                  <li>Equipment financing options</li>
                  <li>Working capital solutions</li>
                  <li>SBA loan programs for manufacturers</li>
                  <li>Alternative financing sources</li>
                  <li>Financing application preparation</li>
                </ul>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Guide
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 text-center">
                  Cost Accounting Guide
                </h2>
                <p className="text-gray-600 mb-6">
                  Learn how to implement effective cost accounting systems to
                  improve profitability in your manufacturing business.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                  <li>Job costing vs. process costing</li>
                  <li>Activity-based costing implementation</li>
                  <li>Standard costing and variance analysis</li>
                  <li>Inventory valuation methods</li>
                  <li>Cost reduction strategies</li>
                </ul>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Guide
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 text-center">
                  Cash Flow Management Guide
                </h2>
                <p className="text-gray-600 mb-6">
                  Strategies to optimize cash flow in manufacturing operations
                  and manage seasonal fluctuations.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                  <li>Inventory management techniques</li>
                  <li>Accounts receivable optimization</li>
                  <li>Vendor management strategies</li>
                  <li>Cash flow forecasting methods</li>
                  <li>Seasonal planning approaches</li>
                </ul>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Guide
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 text-center">
                  KPI Tracking Guide
                </h2>
                <p className="text-gray-600 mb-6">
                  Learn how to track and analyze key performance indicators to
                  improve manufacturing financial performance.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                  <li>Essential manufacturing KPIs</li>
                  <li>Data collection methods</li>
                  <li>Dashboard development</li>
                  <li>Performance analysis techniques</li>
                  <li>Continuous improvement strategies</li>
                </ul>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Guide
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

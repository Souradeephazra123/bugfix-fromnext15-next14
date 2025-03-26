import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Manufacturing Benchmarks | Schapira CPA",
  description:
    "Compare your manufacturing business against industry averages and top performers to identify improvement opportunities.",
};

export default function ManufacturingBenchmarksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Manufacturing Industry Benchmarks
      </h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Compare your manufacturing business against industry averages and top
        performers to identify specific opportunities for improvement.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-1">
          <Card className="shadow-md h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Why Benchmarking Matters
              </h2>
              <p className="text-gray-600 mb-4">Benchmarking allows you to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Identify performance gaps</li>
                <li>Set realistic improvement targets</li>
                <li>Prioritize improvement initiatives</li>
                <li>Track progress over time</li>
                <li>Make data-driven decisions</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="shadow-md h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Key Manufacturing Financial Metrics
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Metric
                      </th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Industry Average
                      </th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Top Performers
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Gross Profit Margin
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">25.3%</td>
                      <td className="px-4 py-3 text-sm text-gray-500">32.7%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Operating Profit Margin
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">8.1%</td>
                      <td className="px-4 py-3 text-sm text-gray-500">14.5%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Inventory Turnover
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">5.2x</td>
                      <td className="px-4 py-3 text-sm text-gray-500">8.7x</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Days Sales Outstanding
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        45 days
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        32 days
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Return on Assets
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">6.8%</td>
                      <td className="px-4 py-3 text-sm text-gray-500">11.2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Note: Data based on industry averages across manufacturing
                sectors. Specific benchmarks vary by sub-industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Operational Benchmarks</h2>
            <ul className="space-y-4">
              <li className="pb-4 border-b border-gray-100">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Machine Utilization</span>
                  <span className="text-gray-700">Industry Avg: 67%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-600 h-2.5 rounded-full"
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </li>
              <li className="pb-4 border-b border-gray-100">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">On-Time Delivery</span>
                  <span className="text-gray-700">Industry Avg: 88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-600 h-2.5 rounded-full"
                    style={{ width: "88%" }}
                  ></div>
                </div>
              </li>
              <li className="pb-4 border-b border-gray-100">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">First Pass Yield</span>
                  <span className="text-gray-700">Industry Avg: 92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-600 h-2.5 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Labor Productivity</span>
                  <span className="text-gray-700">Industry Avg: 73%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-600 h-2.5 rounded-full"
                    style={{ width: "73%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Financial Benchmarks</h2>
            <ul className="space-y-4">
              <li className="pb-4 border-b border-gray-100">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Current Ratio</span>
                  <span className="text-gray-700">Industry Avg: 1.8</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-600 h-2.5 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </li>
              <li className="pb-4 border-b border-gray-100">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Debt-to-Equity</span>
                  <span className="text-gray-700">Industry Avg: 0.8</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-600 h-2.5 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </li>
              <li className="pb-4 border-b border-gray-100">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">EBITDA Margin</span>
                  <span className="text-gray-700">Industry Avg: 12.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-600 h-2.5 rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">SG&A as % of Revenue</span>
                  <span className="text-gray-700">Industry Avg: 15.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-600 h-2.5 rounded-full"
                    style={{ width: "61%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Request Your Custom Benchmark Report
        </h2>
        <p className="text-gray-600 mb-6">
          Want to see how your manufacturing business compares to industry
          benchmarks specific to your sector, size, and region? Request a custom
          benchmark report tailored to your business.
        </p>
        <div className="text-center">
          <a
            href="/consultation"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Request Custom Benchmark Report
          </a>
        </div>
      </div>
    </div>
  );
}

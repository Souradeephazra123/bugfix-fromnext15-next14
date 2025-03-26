import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { generateMetadata } from "@/lib/metadata";
import { ManufacturingKPIDashboard } from "@/components/manufacturing-kpi-dashboard";

export const metadata = generateMetadata({
  title: "Manufacturing KPI Dashboard | Schapira CPA",
  description:
    "Track and analyze your manufacturing performance metrics with our interactive KPI dashboard.",
  canonical: "/resources/kpi-dashboard",
});

export default function KPIDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/resources"
          className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Manufacturing KPI Dashboard
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Track, analyze, and improve your manufacturing performance with our
          interactive KPI dashboard.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold mb-2">
              Full Dashboard Access
            </h2>
            <p className="text-gray-700">
              For full access to our interactive Manufacturing KPI Dashboard
              with your company's data, please contact our team.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/consultation">
              <Button className="bg-yellow-600 hover:bg-yellow-700">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Dashboard Preview</h2>
        <p className="text-gray-600 mb-8">
          Below is a preview of our Manufacturing KPI Dashboard. The full
          version includes interactive charts, customizable metrics, and the
          ability to import your company's data.
        </p>

        <div className="border rounded-lg shadow-lg">
          <ManufacturingKPIDashboard />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Real-Time Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Track your manufacturing KPIs in real-time with automatic data
              updates and alerts for metrics that fall outside target ranges.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>OEE (Overall Equipment Effectiveness)</li>
              <li>First Pass Yield</li>
              <li>Throughput</li>
              <li>Cycle Time</li>
              <li>Downtime Analysis</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Connect operational metrics with financial outcomes to understand
              the true cost impact of manufacturing performance.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Cost Per Unit Analysis</li>
              <li>Labor Efficiency</li>
              <li>Material Usage & Waste</li>
              <li>Energy Consumption</li>
              <li>Maintenance Costs</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customizable Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Generate custom reports for different stakeholders with the
              metrics that matter most to each department.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Executive Summaries</li>
              <li>Production Team Metrics</li>
              <li>Quality Department Reports</li>
              <li>Financial Performance</li>
              <li>Trend Analysis</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-yellow-100 text-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
              1
            </div>
            <h3 className="font-semibold mb-2">Data Integration</h3>
            <p className="text-gray-600">
              Connect your manufacturing systems or import data manually
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 text-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
              2
            </div>
            <h3 className="font-semibold mb-2">KPI Setup</h3>
            <p className="text-gray-600">
              Select the metrics that matter most to your operation
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 text-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
              3
            </div>
            <h3 className="font-semibold mb-2">Dashboard Access</h3>
            <p className="text-gray-600">
              Access your custom dashboard from any device
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 text-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
              4
            </div>
            <h3 className="font-semibold mb-2">Ongoing Support</h3>
            <p className="text-gray-600">
              Regular updates and expert support from our team
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Optimize Your Manufacturing Performance?
        </h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Schedule a demo of our Manufacturing KPI Dashboard and learn how it
          can help you identify opportunities for improvement in your operation.
        </p>
        <Link href="/consultation">
          <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
            Schedule a Dashboard Demo
          </Button>
        </Link>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type {
  CompanyData,
  BenchmarkData,
  IndustryData,
} from "@/lib/benchmarking/types";
import { Download, Printer, Save, FileText, Clock } from "lucide-react";

interface BenchmarkReportProps {
  companyData: CompanyData;
  benchmarkData: BenchmarkData;
  industryData: IndustryData;
  savedReports: string[];
}

export function BenchmarkReport({
  companyData,
  benchmarkData,
  industryData,
  savedReports,
}: BenchmarkReportProps) {
  const [activeTab, setActiveTab] = useState("current");

  // Calculate performance score
  const calculatePerformanceScore = () => {
    let totalScore = 0;
    let maxPossibleScore = 0;

    // Profitability (40% weight)
    const profitabilityScore =
      (companyData.grossProfitMargin / benchmarkData.grossProfitMargin) * 10 +
      (companyData.operatingProfitMargin /
        benchmarkData.operatingProfitMargin) *
        10 +
      (companyData.netProfitMargin / benchmarkData.netProfitMargin) * 10 +
      (companyData.ebitdaMargin / benchmarkData.ebitdaMargin) * 10;
    totalScore += Math.min(profitabilityScore, 40);
    maxPossibleScore += 40;

    // Liquidity (25% weight)
    const liquidityScore =
      (companyData.currentRatio / benchmarkData.currentRatio) * 10 +
      (benchmarkData.daysOfInventory /
        Math.max(companyData.daysOfInventory, 1)) *
        7.5 +
      (benchmarkData.daysOfReceivables /
        Math.max(companyData.daysOfReceivables, 1)) *
        7.5;
    totalScore += Math.min(liquidityScore, 25);
    maxPossibleScore += 25;

    // Efficiency (25% weight)
    const efficiencyScore =
      (companyData.assetTurnover / benchmarkData.assetTurnover) * 10 +
      (companyData.inventoryTurnover / benchmarkData.inventoryTurnover) * 7.5 +
      (companyData.receivablesTurnover / benchmarkData.receivablesTurnover) *
        7.5;
    totalScore += Math.min(efficiencyScore, 25);
    maxPossibleScore += 25;

    // Leverage (10% weight)
    const leverageScore =
      (benchmarkData.debtToEquity / Math.max(companyData.debtToEquity, 0.1)) *
      10;
    totalScore += Math.min(leverageScore, 10);
    maxPossibleScore += 10;

    // Calculate final percentage
    return Math.min(Math.round((totalScore / maxPossibleScore) * 100), 100);
  };

  const performanceScore = calculatePerformanceScore();

  // Generate PDF report
  const generatePDF = () => {
    // In a real implementation, this would use a library like jsPDF or a server-side PDF generation service
    alert(
      "PDF generation would be implemented here in a production environment.",
    );
  };

  // Print report
  const printReport = () => {
    window.print();
  };

  // Save report
  const saveReport = () => {
    // In a real implementation, this would save to a database or localStorage
    alert("Report saved successfully!");
  };

  // Export CSV
  const exportCSV = () => {
    // Create CSV content
    let csvContent =
      "Category,Metric,Your Value,Industry Benchmark,Unit,Difference\n";

    // Profitability metrics
    csvContent += `Profitability,Gross Profit Margin,${companyData.grossProfitMargin},${benchmarkData.grossProfitMargin},%,${(companyData.grossProfitMargin - benchmarkData.grossProfitMargin).toFixed(2)}\n`;
    csvContent += `Profitability,Operating Profit Margin,${companyData.operatingProfitMargin},${benchmarkData.operatingProfitMargin},%,${(companyData.operatingProfitMargin - benchmarkData.operatingProfitMargin).toFixed(2)}\n`;
    csvContent += `Profitability,Net Profit Margin,${companyData.netProfitMargin},${benchmarkData.netProfitMargin},%,${(companyData.netProfitMargin - benchmarkData.netProfitMargin).toFixed(2)}\n`;

    // Liquidity metrics
    csvContent += `Liquidity,Current Ratio,${companyData.currentRatio},${benchmarkData.currentRatio},x,${(companyData.currentRatio - benchmarkData.currentRatio).toFixed(2)}\n`;
    csvContent += `Liquidity,Days of Inventory,${companyData.daysOfInventory},${benchmarkData.daysOfInventory},days,${(companyData.daysOfInventory - benchmarkData.daysOfInventory).toFixed(2)}\n`;
    csvContent += `Liquidity,Days of Receivables,${companyData.daysOfReceivables},${benchmarkData.daysOfReceivables},days,${(companyData.daysOfReceivables - benchmarkData.daysOfReceivables).toFixed(2)}\n`;

    // Efficiency metrics
    csvContent += `Efficiency,Asset Turnover,${companyData.assetTurnover},${benchmarkData.assetTurnover},x,${(companyData.assetTurnover - benchmarkData.assetTurnover).toFixed(2)}\n`;
    csvContent += `Efficiency,Inventory Turnover,${companyData.inventoryTurnover},${benchmarkData.inventoryTurnover},x,${(companyData.inventoryTurnover - benchmarkData.inventoryTurnover).toFixed(2)}\n`;

    // Leverage metrics
    csvContent += `Leverage,Debt to Equity,${companyData.debtToEquity},${benchmarkData.debtToEquity},x,${(companyData.debtToEquity - benchmarkData.debtToEquity).toFixed(2)}\n`;

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `${companyData.companyName}_Benchmarking_${new Date().toISOString().split("T")[0]}.csv`,
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <Card className="print:shadow-none">
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 print:py-4">
          <div>
            <CardTitle>Benchmark Report</CardTitle>
            <CardDescription>
              Summary of your financial performance compared to industry
              benchmarks
            </CardDescription>
          </div>
          <div className="flex flex-wrap gap-2 print:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={generatePDF}
              className="flex items-center gap-1"
            >
              <Download className="h-4 w-4" />
              PDF
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={exportCSV}
              className="flex items-center gap-1"
            >
              <FileText className="h-4 w-4" />
              CSV
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={printReport}
              className="flex items-center gap-1"
            >
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={saveReport}
              className="flex items-center gap-1"
            >
              <Save className="h-4 w-4" />
              Save
            </Button>
          </div>
        </CardHeader>

        <CardContent className="print:px-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="print:hidden"
          >
            <TabsList className="grid grid-cols-2 gap-2 mb-4">
              <TabsTrigger value="current">Current Report</TabsTrigger>
              <TabsTrigger value="saved">Saved Reports</TabsTrigger>
            </TabsList>
          </Tabs>

          <TabsContent value="current" className="space-y-6">
            <div className="border-b pb-4 mb-4 print:border-none">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold">
                    {companyData.companyName}
                  </h2>
                  <p className="text-gray-500">Financial Benchmarking Report</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    Generated on {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Fiscal Year: {companyData.fiscalYear}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium mb-2">
                    Overall Performance
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="10"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={
                            performanceScore >= 80
                              ? "#22c55e"
                              : performanceScore >= 60
                                ? "#eab308"
                                : "#ef4444"
                          }
                          strokeWidth="10"
                          strokeDasharray={`${performanceScore * 2.83} 283`}
                          strokeDashoffset="0"
                          transform="rotate(-90 50 50)"
                        />
                        <text
                          x="50"
                          y="55"
                          fontSize="24"
                          textAnchor="middle"
                          fill="#1e293b"
                          fontWeight="bold"
                        >
                          {performanceScore}
                        </text>
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-medium">
                        {performanceScore >= 80
                          ? "Strong Performance"
                          : performanceScore >= 60
                            ? "Average Performance"
                            : "Needs Improvement"}
                      </div>
                      <p className="text-sm text-gray-500">
                        Compared to {industryData.name} industry
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium mb-2">
                    Industry Comparison
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm">
                        <span>Industry:</span>
                        <span className="font-medium">{industryData.name}</span>
                      </div>
                      {industryData.subCategory && (
                        <div className="flex justify-between text-sm">
                          <span>Subsector:</span>
                          <span className="font-medium">
                            {industryData.subCategory}
                          </span>
                        </div>
                      )}
                      {industryData.sizeCategory && (
                        <div className="flex justify-between text-sm">
                          <span>Size Category:</span>
                          <span className="font-medium">
                            {industryData.sizeCategory}
                          </span>
                        </div>
                      )}
                      {industryData.region && (
                        <div className="flex justify-between text-sm">
                          <span>Region:</span>
                          <span className="font-medium">
                            {industryData.region}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium mb-2">Company Overview</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Revenue:</span>
                      <span className="font-medium">
                        ${companyData.annualRevenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Employees:</span>
                      <span className="font-medium">
                        {companyData.employeeCount}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Subsector:</span>
                      <span className="font-medium">
                        {companyData.industrySubsector || "Not specified"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">
                Key Performance Metrics
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4 font-medium">
                        Category
                      </th>
                      <th className="text-left py-2 px-4 font-medium">
                        Metric
                      </th>
                      <th className="text-right py-2 px-4 font-medium">
                        Your Value
                      </th>
                      <th className="text-right py-2 px-4 font-medium">
                        Industry Benchmark
                      </th>
                      <th className="text-right py-2 px-4 font-medium">
                        Difference
                      </th>
                      <th className="text-left py-2 px-4 font-medium">
                        Performance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Profitability Metrics */}
                    <tr className="border-b bg-gray-50">
                      <td colSpan={6} className="py-2 px-4 font-medium">
                        Profitability
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4"></td>
                      <td className="py-2 px-4">Gross Profit Margin</td>
                      <td className="py-2 px-4 text-right">
                        {companyData.grossProfitMargin.toFixed(2)}%
                      </td>
                      <td className="py-2 px-4 text-right">
                        {benchmarkData.grossProfitMargin.toFixed(2)}%
                      </td>
                      <td
                        className={`py-2 px-4 text-right ${companyData.grossProfitMargin >= benchmarkData.grossProfitMargin ? "text-green-600" : "text-red-600"}`}
                      >
                        {(
                          companyData.grossProfitMargin -
                          benchmarkData.grossProfitMargin
                        ).toFixed(2)}
                        %
                      </td>
                      <td className="py-2 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            companyData.grossProfitMargin >=
                            benchmarkData.grossProfitMargin * 1.1
                              ? "bg-green-100 text-green-800"
                              : companyData.grossProfitMargin >=
                                  benchmarkData.grossProfitMargin * 0.9
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {companyData.grossProfitMargin >=
                          benchmarkData.grossProfitMargin * 1.1
                            ? "Above Average"
                            : companyData.grossProfitMargin >=
                                benchmarkData.grossProfitMargin * 0.9
                              ? "Average"
                              : "Below Average"}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4"></td>
                      <td className="py-2 px-4">Operating Profit Margin</td>
                      <td className="py-2 px-4 text-right">
                        {companyData.operatingProfitMargin.toFixed(2)}%
                      </td>
                      <td className="py-2 px-4 text-right">
                        {benchmarkData.operatingProfitMargin.toFixed(2)}%
                      </td>
                      <td
                        className={`py-2 px-4 text-right ${companyData.operatingProfitMargin >= benchmarkData.operatingProfitMargin ? "text-green-600" : "text-red-600"}`}
                      >
                        {(
                          companyData.operatingProfitMargin -
                          benchmarkData.operatingProfitMargin
                        ).toFixed(2)}
                        %
                      </td>
                      <td className="py-2 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            companyData.operatingProfitMargin >=
                            benchmarkData.operatingProfitMargin * 1.1
                              ? "bg-green-100 text-green-800"
                              : companyData.operatingProfitMargin >=
                                  benchmarkData.operatingProfitMargin * 0.9
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {companyData.operatingProfitMargin >=
                          benchmarkData.operatingProfitMargin * 1.1
                            ? "Above Average"
                            : companyData.operatingProfitMargin >=
                                benchmarkData.operatingProfitMargin * 0.9
                              ? "Average"
                              : "Below Average"}
                        </span>
                      </td>
                    </tr>

                    {/* Liquidity Metrics */}
                    <tr className="border-b bg-gray-50">
                      <td colSpan={6} className="py-2 px-4 font-medium">
                        Liquidity
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4"></td>
                      <td className="py-2 px-4">Current Ratio</td>
                      <td className="py-2 px-4 text-right">
                        {companyData.currentRatio.toFixed(2)}x
                      </td>
                      <td className="py-2 px-4 text-right">
                        {benchmarkData.currentRatio.toFixed(2)}x
                      </td>
                      <td
                        className={`py-2 px-4 text-right ${companyData.currentRatio >= benchmarkData.currentRatio ? "text-green-600" : "text-red-600"}`}
                      >
                        {(
                          companyData.currentRatio - benchmarkData.currentRatio
                        ).toFixed(2)}
                        x
                      </td>
                      <td className="py-2 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            companyData.currentRatio >=
                            benchmarkData.currentRatio * 1.1
                              ? "bg-green-100 text-green-800"
                              : companyData.currentRatio >=
                                  benchmarkData.currentRatio * 0.9
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {companyData.currentRatio >=
                          benchmarkData.currentRatio * 1.1
                            ? "Above Average"
                            : companyData.currentRatio >=
                                benchmarkData.currentRatio * 0.9
                              ? "Average"
                              : "Below Average"}
                        </span>
                      </td>
                    </tr>

                    {/* Efficiency Metrics */}
                    <tr className="border-b bg-gray-50">
                      <td colSpan={6} className="py-2 px-4 font-medium">
                        Efficiency
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4"></td>
                      <td className="py-2 px-4">Asset Turnover</td>
                      <td className="py-2 px-4 text-right">
                        {companyData.assetTurnover.toFixed(2)}x
                      </td>
                      <td className="py-2 px-4 text-right">
                        {benchmarkData.assetTurnover.toFixed(2)}x
                      </td>
                      <td
                        className={`py-2 px-4 text-right ${companyData.assetTurnover >= benchmarkData.assetTurnover ? "text-green-600" : "text-red-600"}`}
                      >
                        {(
                          companyData.assetTurnover -
                          benchmarkData.assetTurnover
                        ).toFixed(2)}
                        x
                      </td>
                      <td className="py-2 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            companyData.assetTurnover >=
                            benchmarkData.assetTurnover * 1.1
                              ? "bg-green-100 text-green-800"
                              : companyData.assetTurnover >=
                                  benchmarkData.assetTurnover * 0.9
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {companyData.assetTurnover >=
                          benchmarkData.assetTurnover * 1.1
                            ? "Above Average"
                            : companyData.assetTurnover >=
                                benchmarkData.assetTurnover * 0.9
                              ? "Average"
                              : "Below Average"}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Key Recommendations</h3>

              <div className="space-y-4">
                {performanceScore < 80 && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Overall Improvement Opportunities
                    </h4>
                    <p className="text-sm text-gray-700">
                      Based on your benchmarking results, we've identified
                      several areas where your company can improve financial
                      performance compared to industry standards.
                    </p>
                  </div>
                )}

                {companyData.grossProfitMargin <
                  benchmarkData.grossProfitMargin && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Improve Gross Profit Margin
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Your gross profit margin is{" "}
                      {(
                        ((benchmarkData.grossProfitMargin -
                          companyData.grossProfitMargin) /
                          benchmarkData.grossProfitMargin) *
                        100
                      ).toFixed(1)}
                      % below the industry benchmark.
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      <li>
                        Review pricing strategy to ensure optimal pricing for
                        your products
                      </li>
                      <li>
                        Analyze material costs and supplier relationships for
                        potential savings
                      </li>
                      <li>
                        Evaluate production processes for efficiency
                        improvements
                      </li>
                    </ul>
                  </div>
                )}

                {companyData.daysOfInventory >
                  benchmarkData.daysOfInventory && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Optimize Inventory Management
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Your inventory days are{" "}
                      {(
                        companyData.daysOfInventory -
                        benchmarkData.daysOfInventory
                      ).toFixed(1)}{" "}
                      days higher than the industry benchmark.
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      <li>
                        Implement just-in-time inventory management practices
                      </li>
                      <li>
                        Review slow-moving inventory items and consider
                        liquidation
                      </li>
                      <li>
                        Improve demand forecasting to reduce excess inventory
                      </li>
                    </ul>
                  </div>
                )}

                {companyData.daysOfReceivables >
                  benchmarkData.daysOfReceivables && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Improve Accounts Receivable Collection
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Your receivables days are{" "}
                      {(
                        companyData.daysOfReceivables -
                        benchmarkData.daysOfReceivables
                      ).toFixed(1)}{" "}
                      days higher than the industry benchmark.
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      <li>
                        Review customer payment terms and collection processes
                      </li>
                      <li>Consider early payment incentives for customers</li>
                      <li>
                        Implement automated payment reminders and follow-ups
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-6">
            {savedReports.length > 0 ? (
              <div className="space-y-4">
                {savedReports.map((reportId) => (
                  <Card key={reportId}>
                    <CardContent className="p-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-blue-600" />
                        <div>
                          <h3 className="font-medium">Benchmark Report</h3>
                          <p className="text-sm text-gray-500">
                            Saved on {new Date().toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No Saved Reports</h3>
                <p className="text-gray-500 mb-4">
                  You haven't saved any benchmark reports yet.
                </p>
                <Button onClick={() => setActiveTab("current")}>
                  Return to Current Report
                </Button>
              </div>
            )}
          </TabsContent>
        </CardContent>

        <CardFooter className="flex justify-between border-t pt-4 print:hidden">
          <p className="text-sm text-gray-500">
            Report generated by Schapira CPA Financial Benchmarking Tool
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

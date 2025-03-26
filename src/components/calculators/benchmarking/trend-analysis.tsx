"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CompanyData, BenchmarkData } from "@/lib/benchmarking/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LineChart, BarChart } from "lucide-react";

interface TrendAnalysisProps {
  companyData: CompanyData;
  benchmarkData: BenchmarkData;
}

export function TrendAnalysis({
  companyData,
  benchmarkData,
}: TrendAnalysisProps) {
  const [selectedMetric, setSelectedMetric] = useState("grossProfitMargin");
  const [chartType, setChartType] = useState<"line" | "bar">("line");

  // Mock historical data for trend analysis
  // In a real implementation, this would come from an API or database
  const historicalData = {
    years: [
      companyData.fiscalYear - 2,
      companyData.fiscalYear - 1,
      companyData.fiscalYear,
    ],
    company: {
      grossProfitMargin: [
        companyData.grossProfitMargin - Math.random() * 5,
        companyData.grossProfitMargin - Math.random() * 3,
        companyData.grossProfitMargin,
      ],
      operatingProfitMargin: [
        companyData.operatingProfitMargin - Math.random() * 4,
        companyData.operatingProfitMargin - Math.random() * 2,
        companyData.operatingProfitMargin,
      ],
      netProfitMargin: [
        companyData.netProfitMargin - Math.random() * 3,
        companyData.netProfitMargin - Math.random() * 1.5,
        companyData.netProfitMargin,
      ],
      currentRatio: [
        companyData.currentRatio - Math.random() * 0.5,
        companyData.currentRatio - Math.random() * 0.2,
        companyData.currentRatio,
      ],
      daysOfInventory: [
        companyData.daysOfInventory + Math.random() * 10,
        companyData.daysOfInventory + Math.random() * 5,
        companyData.daysOfInventory,
      ],
      daysOfReceivables: [
        companyData.daysOfReceivables + Math.random() * 8,
        companyData.daysOfReceivables + Math.random() * 4,
        companyData.daysOfReceivables,
      ],
      assetTurnover: [
        companyData.assetTurnover - Math.random() * 0.3,
        companyData.assetTurnover - Math.random() * 0.1,
        companyData.assetTurnover,
      ],
      inventoryTurnover: [
        companyData.inventoryTurnover - Math.random() * 1,
        companyData.inventoryTurnover - Math.random() * 0.5,
        companyData.inventoryTurnover,
      ],
      debtToEquity: [
        companyData.debtToEquity + Math.random() * 0.4,
        companyData.debtToEquity + Math.random() * 0.2,
        companyData.debtToEquity,
      ],
    },
    industry: {
      grossProfitMargin: [
        benchmarkData.grossProfitMargin - 0.5,
        benchmarkData.grossProfitMargin - 0.2,
        benchmarkData.grossProfitMargin,
      ],
      operatingProfitMargin: [
        benchmarkData.operatingProfitMargin - 0.4,
        benchmarkData.operatingProfitMargin - 0.2,
        benchmarkData.operatingProfitMargin,
      ],
      netProfitMargin: [
        benchmarkData.netProfitMargin - 0.3,
        benchmarkData.netProfitMargin - 0.1,
        benchmarkData.netProfitMargin,
      ],
      currentRatio: [
        benchmarkData.currentRatio - 0.1,
        benchmarkData.currentRatio - 0.05,
        benchmarkData.currentRatio,
      ],
      daysOfInventory: [
        benchmarkData.daysOfInventory + 2,
        benchmarkData.daysOfInventory + 1,
        benchmarkData.daysOfInventory,
      ],
      daysOfReceivables: [
        benchmarkData.daysOfReceivables + 1.5,
        benchmarkData.daysOfReceivables + 0.7,
        benchmarkData.daysOfReceivables,
      ],
      assetTurnover: [
        benchmarkData.assetTurnover - 0.05,
        benchmarkData.assetTurnover - 0.02,
        benchmarkData.assetTurnover,
      ],
      inventoryTurnover: [
        benchmarkData.inventoryTurnover - 0.2,
        benchmarkData.inventoryTurnover - 0.1,
        benchmarkData.inventoryTurnover,
      ],
      debtToEquity: [
        benchmarkData.debtToEquity + 0.1,
        benchmarkData.debtToEquity + 0.05,
        benchmarkData.debtToEquity,
      ],
    },
  };

  // Get metric display name
  const getMetricName = (metric: string) => {
    const metricNames: Record<string, string> = {
      grossProfitMargin: "Gross Profit Margin",
      operatingProfitMargin: "Operating Profit Margin",
      netProfitMargin: "Net Profit Margin",
      currentRatio: "Current Ratio",
      daysOfInventory: "Days of Inventory",
      daysOfReceivables: "Days of Receivables",
      assetTurnover: "Asset Turnover",
      inventoryTurnover: "Inventory Turnover",
      debtToEquity: "Debt to Equity",
    };
    return metricNames[metric] || metric;
  };

  // Get metric unit
  const getMetricUnit = (metric: string) => {
    const metricUnits: Record<string, string> = {
      grossProfitMargin: "%",
      operatingProfitMargin: "%",
      netProfitMargin: "%",
      currentRatio: "x",
      daysOfInventory: "days",
      daysOfReceivables: "days",
      assetTurnover: "x",
      inventoryTurnover: "x",
      debtToEquity: "x",
    };
    return metricUnits[metric] || "";
  };

  // Get whether higher values are better for this metric
  const isHigherBetter = (metric: string) => {
    const higherBetterMetrics = [
      "grossProfitMargin",
      "operatingProfitMargin",
      "netProfitMargin",
      "currentRatio",
      "assetTurnover",
      "inventoryTurnover",
      "daysOfPayables",
    ];
    return higherBetterMetrics.includes(metric);
  };

  // Calculate trend direction and percentage
  const calculateTrend = (data: number[]) => {
    if (data.length < 2) return { direction: "neutral", percentage: 0 };

    const firstValue = data[0];
    const lastValue = data[data.length - 1];
    const change = lastValue - firstValue;
    const percentage =
      firstValue !== 0 ? (change / Math.abs(firstValue)) * 100 : 0;

    return {
      direction: change > 0 ? "up" : change < 0 ? "down" : "neutral",
      percentage: Math.abs(percentage),
    };
  };

  const companyTrend = calculateTrend(
    historicalData.company[
      selectedMetric as keyof typeof historicalData.company
    ],
  );
  const industryTrend = calculateTrend(
    historicalData.industry[
      selectedMetric as keyof typeof historicalData.industry
    ],
  );

  // Determine if company trend is positive based on the metric
  const isCompanyTrendPositive = () => {
    const higherIsBetter = isHigherBetter(selectedMetric);
    return (
      (higherIsBetter && companyTrend.direction === "up") ||
      (!higherIsBetter && companyTrend.direction === "down")
    );
  };

  // Render chart (simplified for this example)
  const renderChart = () => {
    const years = historicalData.years;
    const companyData =
      historicalData.company[
        selectedMetric as keyof typeof historicalData.company
      ];
    const industryData =
      historicalData.industry[
        selectedMetric as keyof typeof historicalData.industry
      ];
    const unit = getMetricUnit(selectedMetric);

    // In a real implementation, you would use a charting library like Chart.js or Recharts
    return (
      <div className="h-64 w-full relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">
            Chart visualization would appear here, showing{" "}
            {getMetricName(selectedMetric)} trends over time.
            <br />
            In a production environment, this would use a charting library like
            Chart.js or Recharts.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-500">
          {years.map((year) => (
            <span key={year}>{year}</span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Trend Analysis</CardTitle>
              <CardDescription>
                Compare your performance trends against industry benchmarks
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grossProfitMargin">
                    Gross Profit Margin
                  </SelectItem>
                  <SelectItem value="operatingProfitMargin">
                    Operating Profit Margin
                  </SelectItem>
                  <SelectItem value="netProfitMargin">
                    Net Profit Margin
                  </SelectItem>
                  <SelectItem value="currentRatio">Current Ratio</SelectItem>
                  <SelectItem value="daysOfInventory">
                    Days of Inventory
                  </SelectItem>
                  <SelectItem value="daysOfReceivables">
                    Days of Receivables
                  </SelectItem>
                  <SelectItem value="assetTurnover">Asset Turnover</SelectItem>
                  <SelectItem value="inventoryTurnover">
                    Inventory Turnover
                  </SelectItem>
                  <SelectItem value="debtToEquity">Debt to Equity</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-md overflow-hidden">
                <button
                  className={`px-3 py-2 flex items-center gap-1 text-sm ${
                    chartType === "line"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => setChartType("line")}
                >
                  <LineChart className="h-4 w-4" />
                  <span className="hidden sm:inline">Line</span>
                </button>
                <button
                  className={`px-3 py-2 flex items-center gap-1 text-sm ${
                    chartType === "bar"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => setChartType("bar")}
                >
                  <BarChart className="h-4 w-4" />
                  <span className="hidden sm:inline">Bar</span>
                </button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium mb-2">Your Trend</h3>
                <div className="flex items-center gap-2">
                  <div
                    className={`p-2 rounded-full ${isCompanyTrendPositive() ? "bg-green-100" : "bg-red-100"}`}
                  >
                    {companyTrend.direction === "up" ? (
                      <svg
                        className={`h-5 w-5 ${isCompanyTrendPositive() ? "text-green-600" : "text-red-600"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    ) : companyTrend.direction === "down" ? (
                      <svg
                        className={`h-5 w-5 ${isCompanyTrendPositive() ? "text-green-600" : "text-red-600"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="text-2xl font-bold">
                      {companyTrend.percentage.toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-500">
                      {companyTrend.direction === "up"
                        ? "Increase"
                        : companyTrend.direction === "down"
                          ? "Decrease"
                          : "No change"}{" "}
                      over 3 years
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium mb-2">Industry Trend</h3>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-blue-100">
                    {industryTrend.direction === "up" ? (
                      <svg
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    ) : industryTrend.direction === "down" ? (
                      <svg
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="text-2xl font-bold">
                      {industryTrend.percentage.toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-500">
                      Industry{" "}
                      {industryTrend.direction === "up"
                        ? "increase"
                        : industryTrend.direction === "down"
                          ? "decrease"
                          : "no change"}{" "}
                      over 3 years
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium mb-2">Comparison</h3>
                <div className="flex items-center gap-2">
                  <div
                    className={`p-2 rounded-full ${
                      (isHigherBetter(selectedMetric) &&
                        companyTrend.percentage > industryTrend.percentage &&
                        companyTrend.direction === "up") ||
                      (!isHigherBetter(selectedMetric) &&
                        companyTrend.percentage > industryTrend.percentage &&
                        companyTrend.direction === "down")
                        ? "bg-green-100"
                        : "bg-yellow-100"
                    }`}
                  >
                    {(isHigherBetter(selectedMetric) &&
                      companyTrend.percentage > industryTrend.percentage &&
                      companyTrend.direction === "up") ||
                    (!isHigherBetter(selectedMetric) &&
                      companyTrend.percentage > industryTrend.percentage &&
                      companyTrend.direction === "down") ? (
                      <svg
                        className="h-5 w-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-yellow-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="text-lg font-medium">
                      {(isHigherBetter(selectedMetric) &&
                        companyTrend.percentage > industryTrend.percentage &&
                        companyTrend.direction === "up") ||
                      (!isHigherBetter(selectedMetric) &&
                        companyTrend.percentage > industryTrend.percentage &&
                        companyTrend.direction === "down")
                        ? "Outperforming Industry"
                        : "Underperforming Industry"}
                    </div>
                    <div className="text-xs text-gray-500">
                      {Math.abs(
                        companyTrend.percentage - industryTrend.percentage,
                      ).toFixed(1)}
                      % difference in trend
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">{renderChart()}</div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Trend Analysis</h3>
              <p className="text-sm text-gray-600">
                {isCompanyTrendPositive()
                  ? `Your ${getMetricName(selectedMetric)} has been improving over the past 3 years, showing a ${companyTrend.percentage.toFixed(1)}% ${companyTrend.direction === "up" ? "increase" : "decrease"}.`
                  : `Your ${getMetricName(selectedMetric)} has been declining over the past 3 years, showing a ${companyTrend.percentage.toFixed(1)}% ${companyTrend.direction === "up" ? "increase" : "decrease"}.`}{" "}
                {(isHigherBetter(selectedMetric) &&
                  companyTrend.percentage > industryTrend.percentage &&
                  companyTrend.direction === "up") ||
                (!isHigherBetter(selectedMetric) &&
                  companyTrend.percentage > industryTrend.percentage &&
                  companyTrend.direction === "down")
                  ? `This is better than the industry average trend of ${industryTrend.percentage.toFixed(1)}%.`
                  : `This is below the industry average trend of ${industryTrend.percentage.toFixed(1)}%.`}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Recommendations</h3>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                {!isCompanyTrendPositive() && (
                  <li>
                    Focus on improving your {getMetricName(selectedMetric)} to
                    align with industry trends.
                  </li>
                )}
                {selectedMetric === "grossProfitMargin" && (
                  <>
                    <li>
                      Review pricing strategy and material costs to improve
                      margins.
                    </li>
                    <li>Consider negotiating better terms with suppliers.</li>
                  </>
                )}
                {selectedMetric === "daysOfInventory" && (
                  <>
                    <li>
                      Implement just-in-time inventory management to reduce
                      holding costs.
                    </li>
                    <li>
                      Review slow-moving inventory items and consider
                      liquidation.
                    </li>
                  </>
                )}
                {selectedMetric === "daysOfReceivables" && (
                  <>
                    <li>
                      Review customer payment terms and collection processes.
                    </li>
                    <li>Consider early payment incentives for customers.</li>
                  </>
                )}
                {selectedMetric === "debtToEquity" && (
                  <>
                    <li>
                      Develop a debt reduction strategy to improve financial
                      stability.
                    </li>
                    <li>
                      Consider restructuring debt to optimize interest costs.
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

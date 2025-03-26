"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CompanyData, BenchmarkData } from "@/lib/benchmarking/types";
import { ArrowUpRight, DollarSign } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface GapAnalysisProps {
  companyData: CompanyData;
  benchmarkData: BenchmarkData;
}

export function GapAnalysis({ companyData, benchmarkData }: GapAnalysisProps) {
  // Calculate performance gaps and opportunities
  const calculateGaps = () => {
    const gaps = [];

    // Profitability gaps
    if (companyData.grossProfitMargin < benchmarkData.grossProfitMargin) {
      const gap =
        benchmarkData.grossProfitMargin - companyData.grossProfitMargin;
      const impact = (gap / 100) * companyData.annualRevenue;
      gaps.push({
        category: "Profitability",
        metric: "Gross Profit Margin",
        gap: gap.toFixed(2) + "%",
        impact:
          "$" + impact.toLocaleString(undefined, { maximumFractionDigits: 0 }),
        description:
          "Improving materials cost or pricing strategy could increase gross profit.",
        severity: gap > 5 ? "high" : gap > 2 ? "medium" : "low",
        priorityScore: (gap / benchmarkData.grossProfitMargin) * 100,
      });
    }

    if (
      companyData.operatingProfitMargin < benchmarkData.operatingProfitMargin
    ) {
      const gap =
        benchmarkData.operatingProfitMargin - companyData.operatingProfitMargin;
      const impact = (gap / 100) * companyData.annualRevenue;
      gaps.push({
        category: "Profitability",
        metric: "Operating Profit Margin",
        gap: gap.toFixed(2) + "%",
        impact:
          "$" + impact.toLocaleString(undefined, { maximumFractionDigits: 0 }),
        description:
          "Reducing operating expenses could significantly improve profitability.",
        severity: gap > 5 ? "high" : gap > 2 ? "medium" : "low",
        priorityScore: (gap / benchmarkData.operatingProfitMargin) * 100,
      });
    }

    // Liquidity gaps
    if (companyData.currentRatio < benchmarkData.currentRatio) {
      const gap = benchmarkData.currentRatio - companyData.currentRatio;
      gaps.push({
        category: "Liquidity",
        metric: "Current Ratio",
        gap: gap.toFixed(2) + "x",
        impact: "Improved short-term financial stability",
        description:
          "Increasing current assets or reducing current liabilities would improve liquidity.",
        severity: gap > 1 ? "high" : gap > 0.5 ? "medium" : "low",
        priorityScore: (gap / benchmarkData.currentRatio) * 100,
      });
    }

    if (companyData.daysOfInventory > benchmarkData.daysOfInventory) {
      const gap = companyData.daysOfInventory - benchmarkData.daysOfInventory;
      const inventoryValue =
        (companyData.annualRevenue / 365) * companyData.daysOfInventory;
      const potentialReduction =
        (gap / companyData.daysOfInventory) * inventoryValue;
      gaps.push({
        category: "Liquidity",
        metric: "Days of Inventory",
        gap: gap.toFixed(0) + " days",
        impact:
          "$" +
          potentialReduction.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          }) +
          " inventory reduction",
        description: "Reducing inventory levels could free up working capital.",
        severity: gap > 30 ? "high" : gap > 15 ? "medium" : "low",
        priorityScore: (gap / benchmarkData.daysOfInventory) * 100,
      });
    }

    if (companyData.daysOfReceivables > benchmarkData.daysOfReceivables) {
      const gap =
        companyData.daysOfReceivables - benchmarkData.daysOfReceivables;
      const receivablesValue =
        (companyData.annualRevenue / 365) * companyData.daysOfReceivables;
      const potentialReduction =
        (gap / companyData.daysOfReceivables) * receivablesValue;
      gaps.push({
        category: "Liquidity",
        metric: "Days of Receivables",
        gap: gap.toFixed(0) + " days",
        impact:
          "$" +
          potentialReduction.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          }) +
          " cash flow improvement",
        description:
          "Improving collections could significantly enhance cash flow.",
        severity: gap > 15 ? "high" : gap > 7 ? "medium" : "low",
        priorityScore: (gap / benchmarkData.daysOfReceivables) * 100,
      });
    }

    // Efficiency gaps
    if (companyData.assetTurnover < benchmarkData.assetTurnover) {
      const gap = benchmarkData.assetTurnover - companyData.assetTurnover;
      gaps.push({
        category: "Efficiency",
        metric: "Asset Turnover",
        gap: gap.toFixed(2) + "x",
        impact: "More revenue from existing assets",
        description:
          "Increasing revenue or reducing underutilized assets could improve efficiency.",
        severity: gap > 0.5 ? "high" : gap > 0.2 ? "medium" : "low",
        priorityScore: (gap / benchmarkData.assetTurnover) * 100,
      });
    }

    if (companyData.inventoryTurnover < benchmarkData.inventoryTurnover) {
      const gap =
        benchmarkData.inventoryTurnover - companyData.inventoryTurnover;
      gaps.push({
        category: "Efficiency",
        metric: "Inventory Turnover",
        gap: gap.toFixed(2) + "x",
        impact: "Reduced inventory holding costs",
        description:
          "Improving inventory management could reduce costs and increase cash flow.",
        severity: gap > 3 ? "high" : gap > 1 ? "medium" : "low",
        priorityScore: (gap / benchmarkData.inventoryTurnover) * 100,
      });
    }

    // Leverage gaps
    if (companyData.debtToEquity > benchmarkData.debtToEquity) {
      const gap = companyData.debtToEquity - benchmarkData.debtToEquity;
      gaps.push({
        category: "Leverage",
        metric: "Debt to Equity",
        gap: gap.toFixed(2) + "x",
        impact: "Reduced financial risk",
        description:
          "Reducing debt levels could improve financial stability and reduce interest costs.",
        severity: gap > 1 ? "high" : gap > 0.5 ? "medium" : "low",
        priorityScore: (gap / benchmarkData.debtToEquity) * 100,
      });
    }

    // Sort by priority score (highest first)
    return gaps.sort((a, b) => b.priorityScore - a.priorityScore);
  };

  const gaps = calculateGaps();

  // Calculate overall performance score
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

  // Calculate potential financial impact
  const calculatePotentialImpact = () => {
    let totalImpact = 0;

    // Impact from improving gross profit margin
    if (companyData.grossProfitMargin < benchmarkData.grossProfitMargin) {
      const gap =
        benchmarkData.grossProfitMargin - companyData.grossProfitMargin;
      totalImpact += (gap / 100) * companyData.annualRevenue;
    }

    // Impact from improving operating profit margin
    if (
      companyData.operatingProfitMargin < benchmarkData.operatingProfitMargin
    ) {
      const gap =
        benchmarkData.operatingProfitMargin - companyData.operatingProfitMargin;
      totalImpact += (gap / 100) * companyData.annualRevenue;
    }

    // Impact from improving inventory turnover
    if (companyData.daysOfInventory > benchmarkData.daysOfInventory) {
      const gap = companyData.daysOfInventory - benchmarkData.daysOfInventory;
      const inventoryValue =
        (companyData.annualRevenue / 365) * companyData.daysOfInventory;
      const potentialReduction =
        (gap / companyData.daysOfInventory) * inventoryValue;
      // Assume 10% annual carrying cost savings
      totalImpact += potentialReduction * 0.1;
    }

    // Impact from improving receivables turnover
    if (companyData.daysOfReceivables > benchmarkData.daysOfReceivables) {
      const gap =
        companyData.daysOfReceivables - benchmarkData.daysOfReceivables;
      const receivablesValue =
        (companyData.annualRevenue / 365) * companyData.daysOfReceivables;
      const potentialReduction =
        (gap / companyData.daysOfReceivables) * receivablesValue;
      // Assume 8% annual financing cost savings
      totalImpact += potentialReduction * 0.08;
    }

    return totalImpact;
  };

  const potentialImpact = calculatePotentialImpact();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Overall Performance</CardTitle>
            <CardDescription>Compared to industry benchmarks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">
                    {performanceScore}%
                  </span>
                </div>
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
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  {performanceScore >= 80
                    ? "Strong Performance"
                    : performanceScore >= 60
                      ? "Average Performance"
                      : "Needs Improvement"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Improvement Areas</CardTitle>
            <CardDescription>Key metrics with largest gaps</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {gaps.slice(0, 3).map((gap, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{gap.metric}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        gap.severity === "high"
                          ? "bg-red-100 text-red-800"
                          : gap.severity === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      Gap: {gap.gap}
                    </span>
                  </div>
                  <Progress
                    value={Math.min(gap.priorityScore, 100)}
                    className="h-2"
                  />
                  <p className="text-xs text-gray-500">{gap.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">
              Potential Financial Impact
            </CardTitle>
            <CardDescription>Estimated annual improvement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-8 w-8 text-green-600" />
                <span className="text-3xl font-bold text-green-600">
                  ${Math.round(potentialImpact).toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Potential annual improvement by closing performance gaps
              </p>
              <div className="mt-4 w-full">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Current</span>
                  <span>Potential</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: `${Math.min(performanceScore, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-gray-500 flex items-center">
                    <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
                    {(100 - performanceScore).toFixed(0)}% improvement potential
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Gap Analysis</CardTitle>
          <CardDescription>
            Detailed analysis of performance gaps and improvement opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4 font-medium">Category</th>
                  <th className="text-left py-2 px-4 font-medium">Metric</th>
                  <th className="text-left py-2 px-4 font-medium">Gap</th>
                  <th className="text-left py-2 px-4 font-medium">
                    Potential Impact
                  </th>
                  <th className="text-left py-2 px-4 font-medium">Priority</th>
                  <th className="text-left py-2 px-4 font-medium">
                    Recommendation
                  </th>
                </tr>
              </thead>
              <tbody>
                {gaps.map((gap, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : ""}
                  >
                    <td className="py-3 px-4">{gap.category}</td>
                    <td className="py-3 px-4">{gap.metric}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                          gap.severity === "high"
                            ? "bg-red-100 text-red-800"
                            : gap.severity === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {gap.gap}
                      </span>
                    </td>
                    <td className="py-3 px-4">{gap.impact}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Progress
                          value={Math.min(gap.priorityScore, 100)}
                          className="h-2 w-20"
                        />
                        <span className="text-xs">
                          {gap.priorityScore > 75
                            ? "High"
                            : gap.priorityScore > 40
                              ? "Medium"
                              : "Low"}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{gap.description}</td>
                  </tr>
                ))}
                {gaps.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-4 text-center text-gray-500">
                      No significant performance gaps detected. Your company is
                      performing well compared to industry benchmarks.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

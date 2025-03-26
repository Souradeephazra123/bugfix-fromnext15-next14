"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CompanyData, BenchmarkData } from "@/lib/benchmarking/types";
import { MetricGauge } from "./metric-gauge";
import { MetricTable } from "./metric-table";
import { Button } from "@/components/ui/button";
import { BarChart, PieChart, Download } from "lucide-react";

interface MetricsComparisonProps {
  companyData: CompanyData;
  benchmarkData: BenchmarkData;
}

export function MetricsComparison({
  companyData,
  benchmarkData,
}: MetricsComparisonProps) {
  const [viewMode, setViewMode] = useState<"gauge" | "table">("gauge");

  const profitabilityMetrics = [
    {
      name: "Gross Profit Margin",
      value: companyData.grossProfitMargin,
      benchmark: benchmarkData.grossProfitMargin,
      unit: "%",
      description:
        "Measures the efficiency of converting raw materials into finished goods",
      isHigherBetter: true,
    },
    {
      name: "Operating Profit Margin",
      value: companyData.operatingProfitMargin,
      benchmark: benchmarkData.operatingProfitMargin,
      unit: "%",
      description: "Indicates how well the company manages its operations",
      isHigherBetter: true,
    },
    {
      name: "Net Profit Margin",
      value: companyData.netProfitMargin,
      benchmark: benchmarkData.netProfitMargin,
      unit: "%",
      description:
        "Shows how much profit is generated as a percentage of revenue",
      isHigherBetter: true,
    },
    {
      name: "EBITDA Margin",
      value: companyData.ebitdaMargin,
      benchmark: benchmarkData.ebitdaMargin,
      unit: "%",
      description:
        "Earnings before interest, taxes, depreciation, and amortization as a percentage of revenue",
      isHigherBetter: true,
    },
    {
      name: "Return on Assets",
      value: companyData.returnOnAssets,
      benchmark: benchmarkData.returnOnAssets,
      unit: "%",
      description:
        "Measures how efficiently a company is using its assets to generate profit",
      isHigherBetter: true,
    },
  ];

  const liquidityMetrics = [
    {
      name: "Current Ratio",
      value: companyData.currentRatio,
      benchmark: benchmarkData.currentRatio,
      unit: "x",
      description: "Measures ability to pay short-term obligations",
      isHigherBetter: true,
      min: 0,
      max: 4,
    },
    {
      name: "Quick Ratio",
      value: companyData.quickRatio,
      benchmark: benchmarkData.quickRatio,
      unit: "x",
      description:
        "Measures ability to pay short-term obligations without selling inventory",
      isHigherBetter: true,
      min: 0,
      max: 3,
    },
    {
      name: "Cash Ratio",
      value: companyData.cashRatio,
      benchmark: benchmarkData.cashRatio,
      unit: "x",
      description:
        "Measures ability to cover short-term liabilities with cash and cash equivalents",
      isHigherBetter: true,
      min: 0,
      max: 2,
    },
    {
      name: "Days of Inventory",
      value: companyData.daysOfInventory,
      benchmark: benchmarkData.daysOfInventory,
      unit: "days",
      description: "Average number of days inventory is held before being sold",
      isHigherBetter: false,
    },
    {
      name: "Days of Receivables",
      value: companyData.daysOfReceivables,
      benchmark: benchmarkData.daysOfReceivables,
      unit: "days",
      description: "Average number of days to collect payment after a sale",
      isHigherBetter: false,
    },
    {
      name: "Days of Payables",
      value: companyData.daysOfPayables,
      benchmark: benchmarkData.daysOfPayables,
      unit: "days",
      description: "Average number of days taken to pay suppliers",
      isHigherBetter: true,
    },
  ];

  const efficiencyMetrics = [
    {
      name: "Asset Turnover",
      value: companyData.assetTurnover,
      benchmark: benchmarkData.assetTurnover,
      unit: "x",
      description:
        "Measures how efficiently a company uses its assets to generate revenue",
      isHigherBetter: true,
    },
    {
      name: "Inventory Turnover",
      value: companyData.inventoryTurnover,
      benchmark: benchmarkData.inventoryTurnover,
      unit: "x",
      description: "Number of times inventory is sold or used in a time period",
      isHigherBetter: true,
    },
    {
      name: "Receivables Turnover",
      value: companyData.receivablesTurnover,
      benchmark: benchmarkData.receivablesTurnover,
      unit: "x",
      description: "Number of times receivables are collected in a time period",
      isHigherBetter: true,
    },
    {
      name: "Fixed Asset Turnover",
      value: companyData.fixedAssetTurnover,
      benchmark: benchmarkData.fixedAssetTurnover,
      unit: "x",
      description:
        "Measures how efficiently a company uses its fixed assets to generate revenue",
      isHigherBetter: true,
    },
    {
      name: "Operating Cycle",
      value: companyData.operatingCycle,
      benchmark: benchmarkData.operatingCycle,
      unit: "days",
      description: "Time required to convert inventory to cash",
      isHigherBetter: false,
    },
  ];

  const leverageMetrics = [
    {
      name: "Debt to Equity",
      value: companyData.debtToEquity,
      benchmark: benchmarkData.debtToEquity,
      unit: "x",
      description: "Measures financial leverage by comparing debt to equity",
      isHigherBetter: false,
      min: 0,
      max: 5,
    },
    {
      name: "Debt to Assets",
      value: companyData.debtToAssets,
      benchmark: benchmarkData.debtToAssets,
      unit: "%",
      description: "Percentage of assets financed by debt",
      isHigherBetter: false,
      min: 0,
      max: 100,
    },
    {
      name: "Interest Coverage Ratio",
      value: companyData.interestCoverageRatio || 0,
      benchmark: benchmarkData.interestCoverageRatio,
      unit: "x",
      description: "Ability to pay interest expenses on outstanding debt",
      isHigherBetter: true,
      min: 0,
      max: 10,
    },
    {
      name: "Fixed Charge Coverage",
      value: companyData.fixedChargeCoverage || 0,
      benchmark: benchmarkData.fixedChargeCoverage,
      unit: "x",
      description:
        "Ability to pay fixed charges, such as lease payments and interest",
      isHigherBetter: true,
      min: 0,
      max: 5,
    },
  ];

  const handleExportCSV = () => {
    // Combine all metrics
    const allMetrics = [
      ...profitabilityMetrics.map((m) => ({ category: "Profitability", ...m })),
      ...liquidityMetrics.map((m) => ({ category: "Liquidity", ...m })),
      ...efficiencyMetrics.map((m) => ({ category: "Efficiency", ...m })),
      ...leverageMetrics.map((m) => ({ category: "Leverage", ...m })),
    ];

    // Create CSV content
    let csvContent =
      "Category,Metric,Your Value,Industry Benchmark,Unit,Difference,Performance\n";

    allMetrics.forEach((metric) => {
      const difference = metric.value - metric.benchmark;
      const performance = metric.isHigherBetter
        ? difference > 0
          ? "Above Average"
          : difference < 0
            ? "Below Average"
            : "Average"
        : difference < 0
          ? "Above Average"
          : difference > 0
            ? "Below Average"
            : "Average";

      csvContent += `${metric.category},${metric.name},${metric.value},${metric.benchmark},${metric.unit},${difference.toFixed(2)},${performance}\n`;
    });

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
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "gauge" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("gauge")}
            className="flex items-center gap-1"
          >
            <PieChart className="h-4 w-4" />
            Gauge View
          </Button>
          <Button
            variant={viewMode === "table" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("table")}
            className="flex items-center gap-1"
          >
            <BarChart className="h-4 w-4" />
            Table View
          </Button>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleExportCSV}
          className="flex items-center gap-1"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <Tabs defaultValue="profitability" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <TabsTrigger value="profitability">Profitability</TabsTrigger>
          <TabsTrigger value="liquidity">Liquidity</TabsTrigger>
          <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
          <TabsTrigger value="leverage">Leverage</TabsTrigger>
        </TabsList>

        <TabsContent value="profitability" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Profitability Metrics</CardTitle>
              <CardDescription>
                How your profit margins compare to industry benchmarks
              </CardDescription>
            </CardHeader>
            <CardContent>
              {viewMode === "gauge" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {profitabilityMetrics.map((metric) => (
                    <MetricGauge
                      key={metric.name}
                      name={metric.name}
                      value={metric.value}
                      benchmark={metric.benchmark}
                      unit={metric.unit}
                      description={metric.description}
                      isHigherBetter={metric.isHigherBetter}
                      min={metric.min}
                      max={metric.max}
                    />
                  ))}
                </div>
              ) : (
                <MetricTable metrics={profitabilityMetrics} />
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="liquidity" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Liquidity Metrics</CardTitle>
              <CardDescription>
                How your ability to meet short-term obligations compares to
                industry benchmarks
              </CardDescription>
            </CardHeader>
            <CardContent>
              {viewMode === "gauge" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {liquidityMetrics.map((metric) => (
                    <MetricGauge
                      key={metric.name}
                      name={metric.name}
                      value={metric.value}
                      benchmark={metric.benchmark}
                      unit={metric.unit}
                      description={metric.description}
                      isHigherBetter={metric.isHigherBetter}
                      min={metric.min}
                      max={metric.max}
                    />
                  ))}
                </div>
              ) : (
                <MetricTable metrics={liquidityMetrics} />
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="efficiency" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Efficiency Metrics</CardTitle>
              <CardDescription>
                How efficiently you utilize your assets compared to industry
                benchmarks
              </CardDescription>
            </CardHeader>
            <CardContent>
              {viewMode === "gauge" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {efficiencyMetrics.map((metric) => (
                    <MetricGauge
                      key={metric.name}
                      name={metric.name}
                      value={metric.value}
                      benchmark={metric.benchmark}
                      unit={metric.unit}
                      description={metric.description}
                      isHigherBetter={metric.isHigherBetter}
                      min={metric.min}
                      max={metric.max}
                    />
                  ))}
                </div>
              ) : (
                <MetricTable metrics={efficiencyMetrics} />
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leverage" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Leverage Metrics</CardTitle>
              <CardDescription>
                How your debt and financial leverage compare to industry
                benchmarks
              </CardDescription>
            </CardHeader>
            <CardContent>
              {viewMode === "gauge" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {leverageMetrics.map((metric) => (
                    <MetricGauge
                      key={metric.name}
                      name={metric.name}
                      value={metric.value}
                      benchmark={metric.benchmark}
                      unit={metric.unit}
                      description={metric.description}
                      isHigherBetter={metric.isHigherBetter}
                      min={metric.min}
                      max={metric.max}
                    />
                  ))}
                </div>
              ) : (
                <MetricTable metrics={leverageMetrics} />
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

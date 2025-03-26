"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InfoCircle } from "@/components/info-circle";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function RatioAnalyzer() {
  const [formData, setFormData] = useState({
    // Balance Sheet
    currentAssets: 500000,
    totalAssets: 2000000,
    inventory: 200000,
    currentLiabilities: 300000,
    totalLiabilities: 1200000,
    equity: 800000,

    // Income Statement
    revenue: 3000000,
    costOfGoodsSold: 1800000,
    operatingExpenses: 600000,
    interestExpense: 50000,
    taxes: 110000,
    netIncome: 440000,
  });

  const [results, setResults] = useState<null | {
    liquidityRatios: {
      currentRatio: number;
      quickRatio: number;
      cashRatio: number;
    };
    solvencyRatios: {
      debtToEquity: number;
      debtToAssets: number;
      interestCoverage: number;
    };
    profitabilityRatios: {
      grossMargin: number;
      operatingMargin: number;
      netMargin: number;
      returnOnAssets: number;
      returnOnEquity: number;
    };
    efficiencyRatios: {
      assetTurnover: number;
      inventoryTurnover: number;
    };
    industryComparison: Array<{
      name: string;
      yourValue: number;
      industryAvg: number;
    }>;
  }>(null);

  const handleInputChange = (field: string, value: string) => {
    const numValue = value === "" ? 0 : Number.parseFloat(value);
    setFormData((prev) => ({
      ...prev,
      [field]: numValue,
    }));
  };

  const calculateRatios = () => {
    // Calculate EBIT (Earnings Before Interest and Taxes)
    const ebit =
      formData.revenue - formData.costOfGoodsSold - formData.operatingExpenses;

    // Liquidity Ratios
    const currentRatio = formData.currentAssets / formData.currentLiabilities;
    const quickRatio =
      (formData.currentAssets - formData.inventory) /
      formData.currentLiabilities;
    const cashRatio =
      ((formData.currentAssets - formData.inventory) * 0.3) /
      formData.currentLiabilities; // Assuming 30% of current assets minus inventory is cash

    // Solvency Ratios
    const debtToEquity = formData.totalLiabilities / formData.equity;
    const debtToAssets = formData.totalLiabilities / formData.totalAssets;
    const interestCoverage = ebit / formData.interestExpense;

    // Profitability Ratios
    const grossMargin =
      (formData.revenue - formData.costOfGoodsSold) / formData.revenue;
    const operatingMargin = ebit / formData.revenue;
    const netMargin = formData.netIncome / formData.revenue;
    const returnOnAssets = formData.netIncome / formData.totalAssets;
    const returnOnEquity = formData.netIncome / formData.equity;

    // Efficiency Ratios
    const assetTurnover = formData.revenue / formData.totalAssets;
    const inventoryTurnover = formData.costOfGoodsSold / formData.inventory;

    // Industry comparison data (example values)
    const industryComparison = [
      { name: "Current Ratio", yourValue: currentRatio, industryAvg: 1.8 },
      { name: "Quick Ratio", yourValue: quickRatio, industryAvg: 1.1 },
      { name: "Debt to Equity", yourValue: debtToEquity, industryAvg: 1.5 },
      { name: "Gross Margin", yourValue: grossMargin, industryAvg: 0.4 },
      { name: "Net Margin", yourValue: netMargin, industryAvg: 0.12 },
      {
        name: "Return on Equity",
        yourValue: returnOnEquity,
        industryAvg: 0.18,
      },
    ];

    setResults({
      liquidityRatios: {
        currentRatio,
        quickRatio,
        cashRatio,
      },
      solvencyRatios: {
        debtToEquity,
        debtToAssets,
        interestCoverage,
      },
      profitabilityRatios: {
        grossMargin,
        operatingMargin,
        netMargin,
        returnOnAssets,
        returnOnEquity,
      },
      efficiencyRatios: {
        assetTurnover,
        inventoryTurnover,
      },
      industryComparison,
    });
  };

  const formatRatio = (ratio: number) => {
    return ratio.toFixed(2);
  };

  const formatPercent = (value: number) => {
    return (value * 100).toFixed(1) + "%";
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getRatioStatus = (
    ratio: number,
    benchmark: number,
    higherIsBetter: boolean,
  ) => {
    if (higherIsBetter) {
      if (ratio >= benchmark * 1.2) return "text-green-600";
      if (ratio >= benchmark * 0.8) return "text-amber-600";
      return "text-red-600";
    } else {
      if (ratio <= benchmark * 0.8) return "text-green-600";
      if (ratio <= benchmark * 1.2) return "text-amber-600";
      return "text-red-600";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Financial Ratio Analyzer
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Analyze your company's financial health with key performance ratios
          and industry benchmarks
        </p>
      </div>

      <Card className="border-slate-200 shadow-md">
        <CardContent className="p-6 md:p-8">
          <Tabs defaultValue="input" className="w-full">
            <TabsList className="grid grid-cols-2 w-full mb-6">
              <TabsTrigger value="input">Financial Data Input</TabsTrigger>
              <TabsTrigger value="results" disabled={!results}>
                Results & Analysis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="input" className="space-y-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Balance Sheet</h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="currentAssets">Current Assets</Label>
                        <InfoCircle tooltip="Assets that can be converted to cash within one year." />
                      </div>
                      <Input
                        id="currentAssets"
                        type="number"
                        value={formData.currentAssets}
                        onChange={(e) =>
                          handleInputChange("currentAssets", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="inventory">Inventory</Label>
                        <InfoCircle tooltip="Value of goods available for sale." />
                      </div>
                      <Input
                        id="inventory"
                        type="number"
                        value={formData.inventory}
                        onChange={(e) =>
                          handleInputChange("inventory", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="totalAssets">Total Assets</Label>
                        <InfoCircle tooltip="All assets owned by the company." />
                      </div>
                      <Input
                        id="totalAssets"
                        type="number"
                        value={formData.totalAssets}
                        onChange={(e) =>
                          handleInputChange("totalAssets", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="currentLiabilities">
                          Current Liabilities
                        </Label>
                        <InfoCircle tooltip="Debts or obligations due within one year." />
                      </div>
                      <Input
                        id="currentLiabilities"
                        type="number"
                        value={formData.currentLiabilities}
                        onChange={(e) =>
                          handleInputChange(
                            "currentLiabilities",
                            e.target.value,
                          )
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="totalLiabilities">
                          Total Liabilities
                        </Label>
                        <InfoCircle tooltip="All debts and obligations owed by the company." />
                      </div>
                      <Input
                        id="totalLiabilities"
                        type="number"
                        value={formData.totalLiabilities}
                        onChange={(e) =>
                          handleInputChange("totalLiabilities", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="equity">Shareholders' Equity</Label>
                        <InfoCircle tooltip="Assets minus liabilities; represents ownership interest." />
                      </div>
                      <Input
                        id="equity"
                        type="number"
                        value={formData.equity}
                        onChange={(e) =>
                          handleInputChange("equity", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Income Statement</h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="revenue">Revenue</Label>
                        <InfoCircle tooltip="Total income from sales before expenses." />
                      </div>
                      <Input
                        id="revenue"
                        type="number"
                        value={formData.revenue}
                        onChange={(e) =>
                          handleInputChange("revenue", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="costOfGoodsSold">
                          Cost of Goods Sold
                        </Label>
                        <InfoCircle tooltip="Direct costs attributable to the production of goods sold." />
                      </div>
                      <Input
                        id="costOfGoodsSold"
                        type="number"
                        value={formData.costOfGoodsSold}
                        onChange={(e) =>
                          handleInputChange("costOfGoodsSold", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="operatingExpenses">
                          Operating Expenses
                        </Label>
                        <InfoCircle tooltip="Expenses related to business operations (excluding COGS)." />
                      </div>
                      <Input
                        id="operatingExpenses"
                        type="number"
                        value={formData.operatingExpenses}
                        onChange={(e) =>
                          handleInputChange("operatingExpenses", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="interestExpense">
                          Interest Expense
                        </Label>
                        <InfoCircle tooltip="Cost of borrowing money from lenders." />
                      </div>
                      <Input
                        id="interestExpense"
                        type="number"
                        value={formData.interestExpense}
                        onChange={(e) =>
                          handleInputChange("interestExpense", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="taxes">Taxes</Label>
                        <InfoCircle tooltip="Income taxes paid to government authorities." />
                      </div>
                      <Input
                        id="taxes"
                        type="number"
                        value={formData.taxes}
                        onChange={(e) =>
                          handleInputChange("taxes", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="netIncome">Net Income</Label>
                        <InfoCircle tooltip="Total earnings after all expenses, taxes, and costs." />
                      </div>
                      <Input
                        id="netIncome"
                        type="number"
                        value={formData.netIncome}
                        onChange={(e) =>
                          handleInputChange("netIncome", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button onClick={calculateRatios} size="lg">
                  Calculate Financial Ratios
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              {results && (
                <>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                    <h3 className="text-lg font-semibold mb-4">
                      Financial Health Overview
                    </h3>

                    <div className="h-80 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={results.industryComparison}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip formatter={(value) => value.toFixed(2)} />
                          <Legend />
                          <Bar
                            dataKey="yourValue"
                            name="Your Company"
                            fill="#3b82f6"
                          />
                          <Bar
                            dataKey="industryAvg"
                            name="Industry Average"
                            fill="#64748b"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">
                          Liquidity Ratios
                        </h3>
                        <p className="text-sm text-slate-600 mb-4">
                          Measures your company's ability to pay short-term
                          obligations.
                        </p>

                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Current Ratio
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.liquidityRatios.currentRatio, 1.5, true)}`}
                              >
                                {formatRatio(
                                  results.liquidityRatios.currentRatio,
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &gt; 1.5 (Higher is better)
                            </p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Quick Ratio
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.liquidityRatios.quickRatio, 1.0, true)}`}
                              >
                                {formatRatio(
                                  results.liquidityRatios.quickRatio,
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &gt; 1.0 (Higher is better)
                            </p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Cash Ratio
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.liquidityRatios.cashRatio, 0.5, true)}`}
                              >
                                {formatRatio(results.liquidityRatios.cashRatio)}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &gt; 0.5 (Higher is better)
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">
                          Solvency Ratios
                        </h3>
                        <p className="text-sm text-slate-600 mb-4">
                          Measures your company's ability to meet long-term
                          obligations.
                        </p>

                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Debt to Equity
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.solvencyRatios.debtToEquity, 1.5, false)}`}
                              >
                                {formatRatio(
                                  results.solvencyRatios.debtToEquity,
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &lt; 1.5 (Lower is better)
                            </p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Debt to Assets
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.solvencyRatios.debtToAssets, 0.5, false)}`}
                              >
                                {formatRatio(
                                  results.solvencyRatios.debtToAssets,
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &lt; 0.5 (Lower is better)
                            </p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Interest Coverage
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.solvencyRatios.interestCoverage, 3.0, true)}`}
                              >
                                {formatRatio(
                                  results.solvencyRatios.interestCoverage,
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &gt; 3.0 (Higher is better)
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">
                          Profitability Ratios
                        </h3>
                        <p className="text-sm text-slate-600 mb-4">
                          Measures your company's ability to generate earnings
                          relative to revenue, assets, and equity.
                        </p>

                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Gross Margin
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.profitabilityRatios.grossMargin, 0.4, true)}`}
                              >
                                {formatPercent(
                                  results.profitabilityRatios.grossMargin,
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &gt; 40% (Higher is better)
                            </p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Operating Margin
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.profitabilityRatios.operatingMargin, 0.15, true)}`}
                              >
                                {formatPercent(
                                  results.profitabilityRatios.operatingMargin,
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &gt; 15% (Higher is better)
                            </p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Net Margin
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.profitabilityRatios.netMargin, 0.1, true)}`}
                              >
                                {formatPercent(
                                  results.profitabilityRatios.netMargin,
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &gt; 10% (Higher is better)
                            </p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Return on Assets (ROA)
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.profitabilityRatios.returnOnAssets, 0.05, true)}`}
                              >
                                {formatPercent(
                                  results.profitabilityRatios.returnOnAssets,
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &gt; 5% (Higher is better)
                            </p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Return on Equity (ROE)
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.profitabilityRatios.returnOnEquity, 0.15, true)}`}
                              >
                                {formatPercent(
                                  results.profitabilityRatios.returnOnEquity,
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &gt; 15% (Higher is better)
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">
                          Efficiency Ratios
                        </h3>
                        <p className="text-sm text-slate-600 mb-4">
                          Measures how effectively your company uses its assets
                          and manages its operations.
                        </p>

                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Asset Turnover
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.efficiencyRatios.assetTurnover, 1.0, true)}`}
                              >
                                {formatRatio(
                                  results.efficiencyRatios.assetTurnover,
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &gt; 1.0 (Higher is better)
                            </p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">
                                Inventory Turnover
                              </span>
                              <span
                                className={`font-semibold ${getRatioStatus(results.efficiencyRatios.inventoryTurnover, 6.0, true)}`}
                              >
                                {formatRatio(
                                  results.efficiencyRatios.inventoryTurnover,
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Benchmark: &gt; 6.0 (Higher is better)
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm">
                          <p className="font-medium text-blue-800 mb-1">
                            Analysis Summary:
                          </p>
                          <p className="text-blue-700">
                            Based on your financial data, your company shows
                            {results.liquidityRatios.currentRatio > 1.5
                              ? " strong liquidity"
                              : " potential liquidity concerns"}{" "}
                            and
                            {results.solvencyRatios.debtToEquity < 1.5
                              ? " healthy solvency"
                              : " elevated debt levels"}
                            . Your
                            {results.profitabilityRatios.netMargin > 0.1
                              ? " profitability is solid"
                              : " profitability could be improved"}
                            .
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-slate-500 max-w-3xl mx-auto">
        <p className="font-medium">Disclaimer:</p>
        <p>
          This analyzer provides estimates for informational purposes only and
          does not constitute financial advice. Industry benchmarks are
          approximations and may vary by industry, company size, and other
          factors. Please consult with a financial professional for personalized
          analysis of your company's financial health.
        </p>
      </div>
    </div>
  );
}

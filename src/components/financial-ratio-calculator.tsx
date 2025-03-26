"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Calculator,
  Download,
  TrendingUp,
  BarChart3,
  DollarSign,
  Percent,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function FinancialRatioCalculator() {
  const {toast} = useToast();
  // Balance Sheet Inputs
  const [currentAssets, setCurrentAssets] = useState(500000);
  const [cashEquivalents, setCashEquivalents] = useState(150000);
  const [accountsReceivable, setAccountsReceivable] = useState(200000);
  const [inventory, setInventory] = useState(150000);
  const [totalAssets, setTotalAssets] = useState(2000000);
  const [currentLiabilities, setCurrentLiabilities] = useState(300000);
  const [totalLiabilities, setTotalLiabilities] = useState(1200000);
  const [shareholderEquity, setShareholderEquity] = useState(800000);

  // Income Statement Inputs
  const [revenue, setRevenue] = useState(1500000);
  const [costOfGoodsSold, setCostOfGoodsSold] = useState(900000);
  const [operatingExpenses, setOperatingExpenses] = useState(400000);
  const [interestExpense, setInterestExpense] = useState(50000);
  const [taxes, setTaxes] = useState(45000);

  // Calculated Ratios
  const [liquidityRatios, setLiquidityRatios] = useState({
    currentRatio: 0,
    quickRatio: 0,
    cashRatio: 0,
    workingCapital: 0,
  });

  const [profitabilityRatios, setProfitabilityRatios] = useState({
    grossProfitMargin: 0,
    operatingProfitMargin: 0,
    netProfitMargin: 0,
    returnOnAssets: 0,
    returnOnEquity: 0,
  });

  const [efficiencyRatios, setEfficiencyRatios] = useState({
    assetTurnover: 0,
    inventoryTurnover: 0,
    receivablesTurnover: 0,
    daysInventoryOutstanding: 0,
    daysSalesOutstanding: 0,
  });

  const [leverageRatios, setLeverageRatios] = useState({
    debtRatio: 0,
    debtToEquityRatio: 0,
    interestCoverageRatio: 0,
    equityMultiplier: 0,
  });

  // Format numbers as currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Format numbers as percentages
  const formatPercent = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value / 100);
  };

  // Format numbers with decimal places
  const formatDecimal = (value: number, decimals = 2) => {
    return value.toFixed(decimals);
  };

  // Calculate all ratios
  const calculateRatios = () => {
    try {
      // Calculate gross profit and net income
      const grossProfit = revenue - costOfGoodsSold;
      const operatingProfit = grossProfit - operatingExpenses;
      const netIncome = operatingProfit - interestExpense - taxes;

      // Liquidity Ratios
      const currentRatioValue =
        currentLiabilities !== 0 ? currentAssets / currentLiabilities : 0;
      const quickRatioValue =
        currentLiabilities !== 0
          ? (currentAssets - inventory) / currentLiabilities
          : 0;
      const cashRatioValue =
        currentLiabilities !== 0 ? cashEquivalents / currentLiabilities : 0;
      const workingCapitalValue = currentAssets - currentLiabilities;

      setLiquidityRatios({
        currentRatio: currentRatioValue,
        quickRatio: quickRatioValue,
        cashRatio: cashRatioValue,
        workingCapital: workingCapitalValue,
      });

      // Profitability Ratios
      const grossProfitMarginValue =
        revenue !== 0 ? (grossProfit / revenue) * 100 : 0;
      const operatingProfitMarginValue =
        revenue !== 0 ? (operatingProfit / revenue) * 100 : 0;
      const netProfitMarginValue =
        revenue !== 0 ? (netIncome / revenue) * 100 : 0;
      const returnOnAssetsValue =
        totalAssets !== 0 ? (netIncome / totalAssets) * 100 : 0;
      const returnOnEquityValue =
        shareholderEquity !== 0 ? (netIncome / shareholderEquity) * 100 : 0;

      setProfitabilityRatios({
        grossProfitMargin: grossProfitMarginValue,
        operatingProfitMargin: operatingProfitMarginValue,
        netProfitMargin: netProfitMarginValue,
        returnOnAssets: returnOnAssetsValue,
        returnOnEquity: returnOnEquityValue,
      });

      // Efficiency Ratios
      const assetTurnoverValue = totalAssets !== 0 ? revenue / totalAssets : 0;
      const inventoryTurnoverValue =
        inventory !== 0 ? costOfGoodsSold / inventory : 0;
      const receivablesTurnoverValue =
        accountsReceivable !== 0 ? revenue / accountsReceivable : 0;
      const daysInventoryOutstandingValue =
        inventoryTurnoverValue !== 0 ? 365 / inventoryTurnoverValue : 0;
      const daysSalesOutstandingValue =
        receivablesTurnoverValue !== 0 ? 365 / receivablesTurnoverValue : 0;

      setEfficiencyRatios({
        assetTurnover: assetTurnoverValue,
        inventoryTurnover: inventoryTurnoverValue,
        receivablesTurnover: receivablesTurnoverValue,
        daysInventoryOutstanding: daysInventoryOutstandingValue,
        daysSalesOutstanding: daysSalesOutstandingValue,
      });

      // Leverage Ratios
      const debtRatioValue =
        totalAssets !== 0 ? (totalLiabilities / totalAssets) * 100 : 0;
      const debtToEquityRatioValue =
        shareholderEquity !== 0 ? totalLiabilities / shareholderEquity : 0;
      const interestCoverageRatioValue =
        interestExpense !== 0 ? operatingProfit / interestExpense : 0;
      const equityMultiplierValue =
        shareholderEquity !== 0 ? totalAssets / shareholderEquity : 0;

      setLeverageRatios({
        debtRatio: debtRatioValue,
        debtToEquityRatio: debtToEquityRatioValue,
        interestCoverageRatio: interestCoverageRatioValue,
        equityMultiplier: equityMultiplierValue,
      });

      toast({
        title: "Ratios calculated successfully",
        description:
          "All financial ratios have been updated based on your inputs.",
        variant: "default",
      });
    } catch (error) {
      console.error("Calculation error:", error);
      toast({
        title: "Calculation error",
        description:
          "There was an error calculating the ratios. Please check your inputs.",
        variant: "error",
      });
    }
  };

  // Handle export of ratio data
  const handleExportData = () => {
    try {
      // Create CSV content
      const csvContent = [
        ["Financial Ratio Analysis"],
        ["Generated on", new Date().toLocaleDateString()],
        [""],
        ["Balance Sheet Data"],
        ["Current Assets", currentAssets],
        ["Cash & Equivalents", cashEquivalents],
        ["Accounts Receivable", accountsReceivable],
        ["Inventory", inventory],
        ["Total Assets", totalAssets],
        ["Current Liabilities", currentLiabilities],
        ["Total Liabilities", totalLiabilities],
        ["Shareholder Equity", shareholderEquity],
        [""],
        ["Income Statement Data"],
        ["Revenue", revenue],
        ["Cost of Goods Sold", costOfGoodsSold],
        ["Operating Expenses", operatingExpenses],
        ["Interest Expense", interestExpense],
        ["Taxes", taxes],
        [""],
        ["Liquidity Ratios"],
        ["Current Ratio", liquidityRatios.currentRatio],
        ["Quick Ratio", liquidityRatios.quickRatio],
        ["Cash Ratio", liquidityRatios.cashRatio],
        ["Working Capital", liquidityRatios.workingCapital],
        [""],
        ["Profitability Ratios"],
        ["Gross Profit Margin", profitabilityRatios.grossProfitMargin + "%"],
        [
          "Operating Profit Margin",
          profitabilityRatios.operatingProfitMargin + "%",
        ],
        ["Net Profit Margin", profitabilityRatios.netProfitMargin + "%"],
        ["Return on Assets (ROA)", profitabilityRatios.returnOnAssets + "%"],
        ["Return on Equity (ROE)", profitabilityRatios.returnOnEquity + "%"],
        [""],
        ["Efficiency Ratios"],
        ["Asset Turnover", efficiencyRatios.assetTurnover],
        ["Inventory Turnover", efficiencyRatios.inventoryTurnover],
        ["Receivables Turnover", efficiencyRatios.receivablesTurnover],
        [
          "Days Inventory Outstanding",
          efficiencyRatios.daysInventoryOutstanding,
        ],
        ["Days Sales Outstanding", efficiencyRatios.daysSalesOutstanding],
        [""],
        ["Leverage Ratios"],
        ["Debt Ratio", leverageRatios.debtRatio + "%"],
        ["Debt to Equity Ratio", leverageRatios.debtToEquityRatio],
        ["Interest Coverage Ratio", leverageRatios.interestCoverageRatio],
        ["Equity Multiplier", leverageRatios.equityMultiplier],
      ];

      // Convert to CSV string
      const csvString = csvContent?.map((row) => row.join(",")).join("\n");

      // Create blob and download
      const blob = new Blob([csvString], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `financial-ratios-${Date.now()}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Export successful",
        description:
          "Your financial ratio data has been downloaded as a CSV file.",
        variant: "success",
      });
    } catch (error) {
      console.error("Export error:", error);
      toast({
        title: "Export failed",
        description: "There was an error exporting your data.",
        variant: "error",
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="shadow-lg border-t-4 border-t-blue-600">
        <CardHeader className="bg-slate-50">
          <CardTitle className="text-2xl text-center">
            Financial Ratio Calculator
          </CardTitle>
          <CardDescription className="text-center text-base">
            Calculate key financial ratios to assess your business's liquidity,
            profitability, efficiency, and leverage
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="flex justify-end mb-6">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={handleExportData}
            >
              <Download size={16} />
              <span>Export Data</span>
            </Button>
          </div>

          <Tabs defaultValue="balancesheet" className="w-full">
            <TabsList className="grid grid-cols-5 mb-6">
              <TabsTrigger
                value="balancesheet"
                className="flex items-center gap-2"
              >
                <Calculator size={16} />
                <span>Balance Sheet</span>
              </TabsTrigger>
              <TabsTrigger
                value="incomestatement"
                className="flex items-center gap-2"
              >
                <DollarSign size={16} />
                <span>Income Statement</span>
              </TabsTrigger>
              <TabsTrigger
                value="liquidity"
                className="flex items-center gap-2"
              >
                <TrendingUp size={16} />
                <span>Liquidity</span>
              </TabsTrigger>
              <TabsTrigger
                value="profitability"
                className="flex items-center gap-2"
              >
                <Percent size={16} />
                <span>Profitability</span>
              </TabsTrigger>
              <TabsTrigger
                value="efficiency"
                className="flex items-center gap-2"
              >
                <BarChart3 size={16} />
                <span>Efficiency & Leverage</span>
              </TabsTrigger>
            </TabsList>

            {/* Balance Sheet Tab */}
            <TabsContent value="balancesheet" className="space-y-6 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="currentAssets">Current Assets</Label>
                  <Input
                    id="currentAssets"
                    type="number"
                    value={currentAssets}
                    onChange={(e) => setCurrentAssets(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    Assets that can be converted to cash within one year.
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="totalAssets">Total Assets</Label>
                  <Input
                    id="totalAssets"
                    type="number"
                    value={totalAssets}
                    onChange={(e) => setTotalAssets(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    The total of all assets owned by the business.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="cashEquivalents">Cash & Equivalents</Label>
                  <Input
                    id="cashEquivalents"
                    type="number"
                    value={cashEquivalents}
                    onChange={(e) => setCashEquivalents(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    Cash and highly liquid investments.
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="accountsReceivable">
                    Accounts Receivable
                  </Label>
                  <Input
                    id="accountsReceivable"
                    type="number"
                    value={accountsReceivable}
                    onChange={(e) =>
                      setAccountsReceivable(Number(e.target.value))
                    }
                  />
                  <p className="text-sm text-gray-500">
                    Money owed to your business by customers.
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="inventory">Inventory</Label>
                  <Input
                    id="inventory"
                    type="number"
                    value={inventory}
                    onChange={(e) => setInventory(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    Value of goods held for sale.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="space-y-4">
                  <Label htmlFor="currentLiabilities">
                    Current Liabilities
                  </Label>
                  <Input
                    id="currentLiabilities"
                    type="number"
                    value={currentLiabilities}
                    onChange={(e) =>
                      setCurrentLiabilities(Number(e.target.value))
                    }
                  />
                  <p className="text-sm text-gray-500">
                    Debts due within one year.
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="totalLiabilities">Total Liabilities</Label>
                  <Input
                    id="totalLiabilities"
                    type="number"
                    value={totalLiabilities}
                    onChange={(e) =>
                      setTotalLiabilities(Number(e.target.value))
                    }
                  />
                  <p className="text-sm text-gray-500">
                    The total of all debts and obligations.
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="shareholderEquity">Shareholder Equity</Label>
                  <Input
                    id="shareholderEquity"
                    type="number"
                    value={shareholderEquity}
                    onChange={(e) =>
                      setShareholderEquity(Number(e.target.value))
                    }
                  />
                  <p className="text-sm text-gray-500">
                    Total assets minus total liabilities.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Income Statement Tab */}
            <TabsContent value="incomestatement" className="space-y-6 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="revenue">Revenue</Label>
                  <Input
                    id="revenue"
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    Total income from sales before any deductions.
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="costOfGoodsSold">
                    Cost of Goods Sold (COGS)
                  </Label>
                  <Input
                    id="costOfGoodsSold"
                    type="number"
                    value={costOfGoodsSold}
                    onChange={(e) => setCostOfGoodsSold(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    Direct costs attributable to the production of goods sold.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="operatingExpenses">Operating Expenses</Label>
                  <Input
                    id="operatingExpenses"
                    type="number"
                    value={operatingExpenses}
                    onChange={(e) =>
                      setOperatingExpenses(Number(e.target.value))
                    }
                  />
                  <p className="text-sm text-gray-500">
                    Expenses related to business operations.
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="interestExpense">Interest Expense</Label>
                  <Input
                    id="interestExpense"
                    type="number"
                    value={interestExpense}
                    onChange={(e) => setInterestExpense(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    Cost of borrowing money.
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="taxes">Taxes</Label>
                  <Input
                    id="taxes"
                    type="number"
                    value={taxes}
                    onChange={(e) => setTaxes(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">Income taxes paid.</p>
                </div>
              </div>

              <div className="pt-6">
                <Button onClick={calculateRatios} className="w-full">
                  Calculate All Ratios
                </Button>
              </div>
            </TabsContent>

            {/* Liquidity Ratios Tab */}
            <TabsContent value="liquidity" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Liquidity Ratios</CardTitle>
                  <CardDescription>
                    Measures of your business's ability to pay short-term
                    obligations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Current Ratio</h3>
                        <span className="text-xl font-bold">
                          {formatDecimal(liquidityRatios.currentRatio)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Current Assets / Current Liabilities
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures ability to pay short-term obligations. A ratio
                        of 2:1 is considered good.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Quick Ratio</h3>
                        <span className="text-xl font-bold">
                          {formatDecimal(liquidityRatios.quickRatio)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        (Current Assets - Inventory) / Current Liabilities
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        A more stringent measure of liquidity that excludes
                        inventory. A ratio of 1:1 is considered good.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Cash Ratio</h3>
                        <span className="text-xl font-bold">
                          {formatDecimal(liquidityRatios.cashRatio)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Cash & Equivalents / Current Liabilities
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        The most conservative liquidity ratio. Shows ability to
                        cover short-term liabilities with cash.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Working Capital</h3>
                        <span className="text-xl font-bold">
                          {formatCurrency(liquidityRatios.workingCapital)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Current Assets - Current Liabilities
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        The capital available for day-to-day operations. Higher
                        working capital indicates better financial health.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profitability Ratios Tab */}
            <TabsContent value="profitability" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Profitability Ratios</CardTitle>
                  <CardDescription>
                    Measures of your business's ability to generate earnings
                    relative to revenue, assets, and equity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Gross Profit Margin</h3>
                        <span className="text-xl font-bold">
                          {formatPercent(profitabilityRatios.grossProfitMargin)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        (Revenue - COGS) / Revenue
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures profitability after accounting for cost of
                        goods sold.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Operating Profit Margin</h3>
                        <span className="text-xl font-bold">
                          {formatPercent(
                            profitabilityRatios.operatingProfitMargin,
                          )}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        (Revenue - COGS - Operating Expenses) / Revenue
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures profitability from core business operations.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Net Profit Margin</h3>
                        <span className="text-xl font-bold">
                          {formatPercent(profitabilityRatios.netProfitMargin)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Net Income / Revenue
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures overall profitability after all expenses.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Return on Assets (ROA)</h3>
                        <span className="text-xl font-bold">
                          {formatPercent(profitabilityRatios.returnOnAssets)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Net Income / Total Assets
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures how efficiently a company is using its assets
                        to generate profits.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Return on Equity (ROE)</h3>
                        <span className="text-xl font-bold">
                          {formatPercent(profitabilityRatios.returnOnEquity)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Net Income / Shareholder Equity
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures how efficiently a company is using its equity
                        to generate profits.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Efficiency & Leverage Ratios Tab */}
            <TabsContent value="efficiency" className="space-y-6 pt-4">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Efficiency Ratios</CardTitle>
                  <CardDescription>
                    Measures of how effectively your business is using its
                    assets and managing its liabilities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Asset Turnover</h3>
                        <span className="text-xl font-bold">
                          {formatDecimal(efficiencyRatios.assetTurnover)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Revenue / Total Assets
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures how efficiently a company is using its assets
                        to generate revenue.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Inventory Turnover</h3>
                        <span className="text-xl font-bold">
                          {formatDecimal(efficiencyRatios.inventoryTurnover)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        COGS / Average Inventory
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures how many times inventory is sold and replaced
                        over a period.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Receivables Turnover</h3>
                        <span className="text-xl font-bold">
                          {formatDecimal(efficiencyRatios.receivablesTurnover)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Revenue / Accounts Receivable
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures how efficiently a company is collecting revenue
                        from credit sales.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">
                          Days Inventory Outstanding
                        </h3>
                        <span className="text-xl font-bold">
                          {formatDecimal(
                            efficiencyRatios.daysInventoryOutstanding,
                          )}{" "}
                          days
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        365 / Inventory Turnover
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Average number of days it takes to sell inventory.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Days Sales Outstanding</h3>
                        <span className="text-xl font-bold">
                          {formatDecimal(efficiencyRatios.daysSalesOutstanding)}{" "}
                          days
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        365 / Receivables Turnover
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Average number of days it takes to collect payment after
                        a sale.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Leverage Ratios</CardTitle>
                  <CardDescription>
                    Measures of your business's debt levels and ability to meet
                    financial obligations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Debt Ratio</h3>
                        <span className="text-xl font-bold">
                          {formatPercent(leverageRatios.debtRatio)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Total Liabilities / Total Assets
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures the percentage of assets that are financed by
                        debt.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Debt to Equity Ratio</h3>
                        <span className="text-xl font-bold">
                          {formatDecimal(leverageRatios.debtToEquityRatio)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Total Liabilities / Shareholder Equity
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures the relationship between debt and equity
                        financing.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Interest Coverage Ratio</h3>
                        <span className="text-xl font-bold">
                          {formatDecimal(leverageRatios.interestCoverageRatio)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Operating Profit / Interest Expense
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures ability to pay interest on outstanding debt.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Equity Multiplier</h3>
                        <span className="text-xl font-bold">
                          {formatDecimal(leverageRatios.equityMultiplier)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Total Assets / Shareholder Equity
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Measures the portion of assets financed by equity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row justify-between border-t pt-6 gap-4">
          <div className="text-sm text-gray-600">
            © 2025 Schapira CPA. This calculator provides an estimation only
            and should not be considered financial advice.
          </div>
          <Button onClick={calculateRatios} className="flex items-center gap-2">
            <Calculator size={16} />
            Calculate All Ratios
          </Button>
        </CardFooter>
      </Card>
      <Toaster />
    </div>
  );
}

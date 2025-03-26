"use client";

import { useState, useEffect } from "react";
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
  PieChart,
  TrendingUp,
  Save,
  Upload,
  FileText,
  Building,
  BarChart3,
} from "lucide-react";
import { saveValuation, loadValuations } from "@/lib/valuation-service";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ValuationScenario } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { industryData } from "@/lib/industry-data";
import {
  generateReportContent,
  generateValuationToolData,
} from "@/lib/report-utils";
import { SensitivityAnalysis } from "@/components/sensitivity-analysis";

export default function ValuationCalculator() {

  const {toast}=useToast();
  // Financial inputs
  const [revenue, setRevenue] = useState(10000000);
  const [ebitda, setEbitda] = useState(1500000);
  const [adjustments, setAdjustments] = useState(200000);
  const [capex, setCapex] = useState(500000);
  const [workingCapital, setWorkingCapital] = useState(2000000);
  const [debt, setDebt] = useState(1000000);

  // Asset-based valuation inputs
  const [tangibleAssets, setTangibleAssets] = useState(5000000);
  const [intangibleAssets, setIntangibleAssets] = useState(1000000);
  const [totalLiabilities, setTotalLiabilities] = useState(2000000);

  // Growth and projection inputs
  const [projectedGrowthRate, setProjectedGrowthRate] = useState(3);
  const [discountRate, setDiscountRate] = useState(15);
  const [projectionYears, setProjectionYears] = useState(5);

  // Industry & multiple selection
  const [industryType, setIndustryType] = useState("metalFabrication");
  const [baseMultiple, setBaseMultiple] = useState(5.5);

  // Value driver scores
  const [financialScore, setFinancialScore] = useState(3);
  const [customerScore, setCustomerScore] = useState(3);
  const [operationalScore, setOperationalScore] = useState(3);
  const [managementScore, setManagementScore] = useState(3);
  const [strategicScore, setStrategicScore] = useState(3);

  // Additional adjustments
  const [customerConcentration, setCustomerConcentration] = useState(0);
  const [proprietaryProducts, setProprietaryProducts] = useState(0);
  const [managementDepth, setManagementDepth] = useState(0);
  const [growthRate, setGrowthRate] = useState(0);

  // Results
  const [adjustedEbitda, setAdjustedEbitda] = useState(0);
  const [adjustedMultiple, setAdjustedMultiple] = useState(0);
  const [businessValue, setBusinessValue] = useState(0);
  const [valueDriverScore, setValueDriverScore] = useState(0);
  const [dcfValue, setDcfValue] = useState(0);
  const [assetValue, setAssetValue] = useState(0);
  const [valuationRange, setValuationRange] = useState({
    low: 0,
    mid: 0,
    high: 0,
  });

  // Scenario management
  const [scenarioName, setScenarioName] = useState("");
  const [savedScenarios, setSavedScenarios] = useState<ValuationScenario[]>([]);
  const [isLoadDialogOpen, setIsLoadDialogOpen] = useState(false);

  // Lead capture
  const [email, setEmail] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);

  // Format numbers as currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Load saved scenarios on component mount
  useEffect(() => {
    const fetchScenarios = async () => {
      try {
        const scenarios = await loadValuations();
        setSavedScenarios(scenarios);
      } catch (error) {
        console.error("Failed to load scenarios:", error);
      }
    };

    fetchScenarios();
  }, []);

  // Calculate valuation
  useEffect(() => {
    // Calculate adjusted EBITDA
    const calculatedAdjustedEbitda = ebitda + adjustments;
    setAdjustedEbitda(calculatedAdjustedEbitda);

    // Calculate value driver score
    const weightedScore = (
      financialScore * 0.3 +
      customerScore * 0.25 +
      operationalScore * 0.2 +
      managementScore * 0.15 +
      strategicScore * 0.1
    ).toFixed(2);
    setValueDriverScore(Number.parseFloat(weightedScore));

    // Calculate multiple adjustment based on scores
    const selectedIndustry = industryData[industryType];
    const [minMultiple, maxMultiple] = selectedIndustry.range;
    const multipleRange = maxMultiple - minMultiple;

    // Base multiple based on value driver score (1-5 scale)
    const scoreBasedMultiple =
      minMultiple +
      multipleRange * ((Number.parseFloat(weightedScore) - 1) / 4);

    // Apply specific adjustments
    const specificAdjustments =
      customerConcentration +
      proprietaryProducts +
      managementDepth +
      growthRate;

    const finalMultiple = scoreBasedMultiple + specificAdjustments;
    setAdjustedMultiple(Number.parseFloat(finalMultiple.toFixed(2)));

    // Calculate business value using multiple method
    const multipleValue = calculatedAdjustedEbitda * finalMultiple;
    setBusinessValue(Math.round(multipleValue));

    // Calculate DCF value
    const calculateDcfValue = () => {
      let totalPresentValue = 0;
      let currentEbitda = calculatedAdjustedEbitda;

      for (let year = 1; year <= projectionYears; year++) {
        // Calculate free cash flow for the year
        const yearlyEbitda = currentEbitda * (1 + projectedGrowthRate / 100);
        const freeCashFlow =
          yearlyEbitda -
          capex * (1 + (projectedGrowthRate / 100) * 0.5) -
          ((workingCapital * projectedGrowthRate) / 100) * 0.2;

        // Calculate present value of this year's cash flow
        const presentValue =
          freeCashFlow / Math.pow(1 + discountRate / 100, year);
        totalPresentValue += presentValue;

        // Update EBITDA for next year
        currentEbitda = yearlyEbitda;
      }

      // Terminal value calculation (Gordon Growth Model)
      const terminalGrowthRate = Math.min(projectedGrowthRate / 100, 0.03); // Cap terminal growth at 3%
      const terminalValue =
        (currentEbitda * (1 + terminalGrowthRate) * (1 - 0.25)) /
        (discountRate / 100 - terminalGrowthRate);
      const presentTerminalValue =
        terminalValue / Math.pow(1 + discountRate / 100, projectionYears);

      // Enterprise value
      const enterpriseValue = totalPresentValue + presentTerminalValue;

      // Equity value (enterprise value minus debt)
      return Math.round(enterpriseValue - debt);
    };

    const dcfCalculatedValue = calculateDcfValue();
    setDcfValue(dcfCalculatedValue);

    // Calculate asset-based value
    const calculatedAssetValue =
      tangibleAssets + intangibleAssets - totalLiabilities;
    setAssetValue(calculatedAssetValue);

    // Calculate valuation range
    const lowValue =
      Math.min(multipleValue, dcfCalculatedValue, calculatedAssetValue) * 0.9;
    const highValue =
      Math.max(multipleValue, dcfCalculatedValue, calculatedAssetValue) * 1.1;
    const midValue =
      (multipleValue + dcfCalculatedValue + calculatedAssetValue) / 3;

    setValuationRange({
      low: Math.round(lowValue),
      mid: Math.round(midValue),
      high: Math.round(highValue),
    });
  }, [
    ebitda,
    adjustments,
    industryType,
    financialScore,
    customerScore,
    operationalScore,
    managementScore,
    strategicScore,
    customerConcentration,
    proprietaryProducts,
    managementDepth,
    growthRate,
    projectedGrowthRate,
    discountRate,
    projectionYears,
    capex,
    workingCapital,
    debt,
    tangibleAssets,
    intangibleAssets,
    totalLiabilities,
  ]);

  const handleIndustryChange = (value: string) => {
    setIndustryType(value);
    const [minMultiple, maxMultiple] = industryData[value].range;
    setBaseMultiple((minMultiple + maxMultiple) / 2);
  };

  const handleSaveScenario = async () => {
    if (!scenarioName) {
      toast({
        title: "Scenario name required",
        description: "Please enter a name for your valuation scenario",
        variant: "error",
      });
      return;
    }

    const scenario: ValuationScenario = {
      id: Date.now().toString(),
      name: scenarioName,
      date: new Date().toISOString(),
      financialData: {
        revenue,
        ebitda,
        adjustments,
        capex,
        workingCapital,
        debt,
        tangibleAssets,
        intangibleAssets,
        totalLiabilities,
      },
      industryData: {
        industryType,
        projectedGrowthRate,
        discountRate,
      },
      valueDrivers: {
        financialScore,
        customerScore,
        operationalScore,
        managementScore,
        strategicScore,
        customerConcentration,
        proprietaryProducts,
        managementDepth,
        growthRate,
      },
      results: {
        adjustedEbitda,
        adjustedMultiple,
        businessValue,
        dcfValue,
        assetValue,
        valuationRange,
      },
    };

    try {
      await saveValuation(scenario);
      setSavedScenarios([...savedScenarios, scenario]);
      setScenarioName("");
      toast({
        title: "Scenario saved",
        description: "Your valuation scenario has been saved successfully",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Failed to save",
        description: "There was an error saving your scenario",
        variant: "error",
      });
    }
  };

  const handleLoadScenario = (scenario: ValuationScenario) => {
    // Load financial data
    setRevenue(scenario.financialData.revenue);
    setEbitda(scenario.financialData.ebitda);
    setAdjustments(scenario.financialData.adjustments);
    setCapex(scenario.financialData.capex);
    setWorkingCapital(scenario.financialData.workingCapital);
    setDebt(scenario.financialData.debt);
    setTangibleAssets(scenario.financialData.tangibleAssets);
    setIntangibleAssets(scenario.financialData.intangibleAssets);
    setTotalLiabilities(scenario.financialData.totalLiabilities);

    // Load industry data
    setIndustryType(scenario.industryData.industryType);
    setProjectedGrowthRate(scenario.industryData.projectedGrowthRate);
    setDiscountRate(scenario.industryData.discountRate);

    // Load value drivers
    setFinancialScore(scenario.valueDrivers.financialScore);
    setCustomerScore(scenario.valueDrivers.customerScore);
    setOperationalScore(scenario.valueDrivers.operationalScore);
    setManagementScore(scenario.valueDrivers.managementScore);
    setStrategicScore(scenario.valueDrivers.strategicScore);
    setCustomerConcentration(scenario.valueDrivers.customerConcentration);
    setProprietaryProducts(scenario.valueDrivers.proprietaryProducts);
    setManagementDepth(scenario.valueDrivers.managementDepth);
    setGrowthRate(scenario.valueDrivers.growthRate);

    setIsLoadDialogOpen(false);

    toast({
      title: "Scenario loaded",
      description: `Loaded scenario: ${scenario.name}`,
      variant: "success",
    });
  };

  const handleSubmitLead = () => {
    // This would send the lead information to your CRM
    console.log("Lead submitted:", email);
    toast({
      title: "Thank you!",
      description:
        "Your detailed valuation report will be emailed to you shortly.",
      variant: "success",
    });
    setShowLeadForm(false);
  };

  const handleExportReport = async () => {
    try {
      // Create current scenario data
      const currentScenario: ValuationScenario = {
        id: Date.now().toString(),
        name: "Current Valuation",
        date: new Date().toISOString(),
        financialData: {
          revenue,
          ebitda,
          adjustments,
          capex,
          workingCapital,
          debt,
          tangibleAssets,
          intangibleAssets,
          totalLiabilities,
        },
        industryData: {
          industryType,
          projectedGrowthRate,
          discountRate,
        },
        valueDrivers: {
          financialScore,
          customerScore,
          operationalScore,
          managementScore,
          strategicScore,
          customerConcentration,
          proprietaryProducts,
          managementDepth,
          growthRate,
        },
        results: {
          adjustedEbitda,
          adjustedMultiple,
          businessValue,
          dcfValue,
          assetValue,
          valuationRange,
        },
      };

      // Generate report content
      const reportContent = generateReportContent(currentScenario);

      // Create blob and download
      const blob = new Blob([reportContent], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `business-valuation-report-${Date.now()}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Report exported successfully",
        description: "Your valuation report has been downloaded",
        variant: "success",
      });
    } catch (error) {
      console.error("Export error:", error);
      toast({
        title: "Export failed",
        description: "There was an error exporting your report",
        variant: "error",
      });
    }
  };

  const handleDownloadTool = async () => {
    try {
      // Create current scenario data
      const currentScenario: ValuationScenario = {
        id: Date.now().toString(),
        name: "Current Valuation",
        date: new Date().toISOString(),
        financialData: {
          revenue,
          ebitda,
          adjustments,
          capex,
          workingCapital,
          debt,
          tangibleAssets,
          intangibleAssets,
          totalLiabilities,
        },
        industryData: {
          industryType,
          projectedGrowthRate,
          discountRate,
        },
        valueDrivers: {
          financialScore,
          customerScore,
          operationalScore,
          managementScore,
          strategicScore,
          customerConcentration,
          proprietaryProducts,
          managementDepth,
          growthRate,
        },
        results: {
          adjustedEbitda,
          adjustedMultiple,
          businessValue,
          dcfValue,
          assetValue,
          valuationRange,
        },
      };

      // Generate CSV data
      const csvContent = generateValuationToolData(currentScenario);

      // Create blob and download
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `valuation-tool-data-${Date.now()}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Tool data exported successfully",
        description: "Your valuation tool data has been downloaded",
        variant: "success",
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download failed",
        description: "There was an error downloading the tool data",
        variant: "error",
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="shadow-lg border-t-4 border-t-blue-600">
        <CardHeader className="bg-slate-50">
          <CardTitle className="text-2xl text-center">
            Manufacturing Business Valuation Calculator
          </CardTitle>
          <CardDescription className="text-center text-base">
            Estimate your manufacturing company's value based on multiple
            valuation methods and industry metrics
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Save size={16} />
                    <span>Save Scenario</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Save Valuation Scenario</DialogTitle>
                    <DialogDescription>
                      Enter a name for this valuation scenario to save it for
                      future reference.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <Label htmlFor="scenarioName">Scenario Name</Label>
                    <Input
                      id="scenarioName"
                      value={scenarioName}
                      onChange={(e) => setScenarioName(e.target.value)}
                      placeholder="e.g., Base Case 2025"
                      className="mt-2"
                    />
                  </div>
                  <DialogFooter>
                    <Button onClick={handleSaveScenario}>Save Scenario</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog
                open={isLoadDialogOpen}
                onOpenChange={setIsLoadDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Upload size={16} />
                    <span>Load Scenario</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Load Saved Scenario</DialogTitle>
                    <DialogDescription>
                      Select a previously saved valuation scenario to load.
                    </DialogDescription>
                  </DialogHeader>
                  <ScrollArea className="h-[300px] rounded-md border p-4">
                    {savedScenarios.length > 0 ? (
                      <div className="space-y-2">
                        {savedScenarios.map((scenario) => (
                          <div
                            key={scenario.id}
                            className="p-3 border rounded-md hover:bg-slate-50 cursor-pointer"
                            onClick={() => handleLoadScenario(scenario)}
                          >
                            <div className="font-medium">{scenario.name}</div>
                            <div className="text-sm text-gray-500">
                              {new Date(scenario.date).toLocaleDateString()} •
                              Value:{" "}
                              {formatCurrency(
                                scenario.results.valuationRange.mid,
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <FileText className="mx-auto h-8 w-8 mb-2 opacity-50" />
                        <p>No saved scenarios found</p>
                      </div>
                    )}
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </div>

            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={handleExportReport}
            >
              <Download size={16} />
              <span>Export Report</span>
            </Button>
          </div>

          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid grid-cols-5 mb-6">
              <TabsTrigger
                value="calculator"
                className="flex items-center gap-2"
              >
                <Calculator size={16} />
                <span>Financial Data</span>
              </TabsTrigger>
              <TabsTrigger
                value="valuedrivers"
                className="flex items-center gap-2"
              >
                <TrendingUp size={16} />
                <span>Value Drivers</span>
              </TabsTrigger>
              <TabsTrigger value="methods" className="flex items-center gap-2">
                <Building size={16} />
                <span>Valuation Methods</span>
              </TabsTrigger>
              <TabsTrigger
                value="sensitivity"
                className="flex items-center gap-2"
              >
                <BarChart3 size={16} />
                <span>Sensitivity</span>
              </TabsTrigger>
              <TabsTrigger value="results" className="flex items-center gap-2">
                <PieChart size={16} />
                <span>Results</span>
              </TabsTrigger>
            </TabsList>

            {/* Financial Data Tab */}
            <TabsContent value="calculator" className="space-y-6 pt-4">
              {/* Revenue & EBITDA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="revenue">Annual Revenue</Label>
                  <Input
                    id="revenue"
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    Enter your company's annual revenue for the most recent
                    fiscal year.
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="ebitda">EBITDA</Label>
                  <Input
                    id="ebitda"
                    type="number"
                    value={ebitda}
                    onChange={(e) => setEbitda(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    Earnings Before Interest, Taxes, Depreciation, and
                    Amortization.
                  </p>
                </div>
              </div>

              {/* Adjustments & CapEx */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="adjustments">Owner Adjustments</Label>
                  <Input
                    id="adjustments"
                    type="number"
                    value={adjustments}
                    onChange={(e) => setAdjustments(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    Add-backs for owner salary, benefits, one-time expenses,
                    etc.
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="capex">Annual Capital Expenditures</Label>
                  <Input
                    id="capex"
                    type="number"
                    value={capex}
                    onChange={(e) => setCapex(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    Average annual spending on equipment, property, and other
                    capital assets.
                  </p>
                </div>
              </div>

              {/* Working Capital & Debt */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="workingCapital">Working Capital</Label>
                  <Input
                    id="workingCapital"
                    type="number"
                    value={workingCapital}
                    onChange={(e) => setWorkingCapital(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    Current assets minus current liabilities (excluding cash and
                    debt).
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="debt">Total Debt</Label>
                  <Input
                    id="debt"
                    type="number"
                    value={debt}
                    onChange={(e) => setDebt(Number(e.target.value))}
                  />
                  <p className="text-sm text-gray-500">
                    Total long-term debt and interest-bearing liabilities.
                  </p>
                </div>
              </div>

              {/* Asset Valuation Inputs */}
              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-4">
                  Asset-Based Valuation Inputs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <Label htmlFor="tangibleAssets">Tangible Assets</Label>
                    <Input
                      id="tangibleAssets"
                      type="number"
                      value={tangibleAssets}
                      onChange={(e) =>
                        setTangibleAssets(Number(e.target.value))
                      }
                    />
                    <p className="text-sm text-gray-500">
                      Equipment, property, inventory, etc.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="intangibleAssets">Intangible Assets</Label>
                    <Input
                      id="intangibleAssets"
                      type="number"
                      value={intangibleAssets}
                      onChange={(e) =>
                        setIntangibleAssets(Number(e.target.value))
                      }
                    />
                    <p className="text-sm text-gray-500">
                      Patents, trademarks, goodwill, etc.
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
                      All debts and obligations.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Value Drivers Tab */}
            <TabsContent value="valuedrivers" className="space-y-6 pt-4">
              {/* Industry Selection */}
              <div className="space-y-4">
                <Label htmlFor="industryType">
                  Manufacturing Industry Segment
                </Label>
                <select
                  id="industryType"
                  value={industryType}
                  onChange={(e) => handleIndustryChange(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {Object.entries(industryData).map(([key, data]) => (
                    <option key={key} value={key}>
                      {data.name} (Multiple Range: {data.range[0]}x -{" "}
                      {data.range[1]}x)
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-500">
                  Select the industry segment that best matches your
                  manufacturing business.
                </p>
              </div>

              {/* Growth & Discount Rates */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="space-y-4">
                  <Label htmlFor="projectedGrowthRate">
                    Projected Growth Rate (%)
                  </Label>
                  <Input
                    id="projectedGrowthRate"
                    type="number"
                    value={projectedGrowthRate}
                    onChange={(e) =>
                      setProjectedGrowthRate(Number(e.target.value))
                    }
                    min={-10}
                    max={30}
                    step={0.5}
                  />
                  <p className="text-sm text-gray-500">
                    Expected annual growth rate for the next 5 years.
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="discountRate">Discount Rate (%)</Label>
                  <Input
                    id="discountRate"
                    type="number"
                    value={discountRate}
                    onChange={(e) => setDiscountRate(Number(e.target.value))}
                    min={5}
                    max={30}
                    step={0.5}
                  />
                  <p className="text-sm text-gray-500">
                    Rate used to discount future cash flows to present value.
                  </p>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="projectionYears">Projection Years</Label>
                  <Input
                    id="projectionYears"
                    type="number"
                    value={projectionYears}
                    onChange={(e) => setProjectionYears(Number(e.target.value))}
                    min={3}
                    max={10}
                    step={1}
                  />
                  <p className="text-sm text-gray-500">
                    Number of years to project cash flows for DCF valuation.
                  </p>
                </div>
              </div>

              {/* Value Driver Scores */}
              <div className="pt-6 border-t">
                <h3 className="text-lg font-medium mb-4">
                  Value Driver Scores (1-5)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label htmlFor="financialScore">
                      Financial Performance
                    </Label>
                    <Input
                      id="financialScore"
                      type="range"
                      min={1}
                      max={5}
                      step={1}
                      value={financialScore}
                      onChange={(e) =>
                        setFinancialScore(Number(e.target.value))
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Poor (1)</span>
                      <span>Average (3)</span>
                      <span>Excellent (5)</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Rate your company's financial performance relative to
                      industry peers.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="customerScore">
                      Customer & Market Position
                    </Label>
                    <Input
                      id="customerScore"
                      type="range"
                      min={1}
                      max={5}
                      step={1}
                      value={customerScore}
                      onChange={(e) => setCustomerScore(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Poor (1)</span>
                      <span>Average (3)</span>
                      <span>Excellent (5)</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Rate your customer diversity, market share, and
                      competitive position.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-4">
                    <Label htmlFor="operationalScore">
                      Operational Excellence
                    </Label>
                    <Input
                      id="operationalScore"
                      type="range"
                      min={1}
                      max={5}
                      step={1}
                      value={operationalScore}
                      onChange={(e) =>
                        setOperationalScore(Number(e.target.value))
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Poor (1)</span>
                      <span>Average (3)</span>
                      <span>Excellent (5)</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Rate your operational efficiency, processes, and quality
                      systems.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="managementScore">Management Team</Label>
                    <Input
                      id="managementScore"
                      type="range"
                      min={1}
                      max={5}
                      step={1}
                      value={managementScore}
                      onChange={(e) =>
                        setManagementScore(Number(e.target.value))
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Poor (1)</span>
                      <span>Average (3)</span>
                      <span>Excellent (5)</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Rate your management team's experience, depth, and
                      succession planning.
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="space-y-4">
                    <Label htmlFor="strategicScore">Strategic Position</Label>
                    <Input
                      id="strategicScore"
                      type="range"
                      min={1}
                      max={5}
                      step={1}
                      value={strategicScore}
                      onChange={(e) =>
                        setStrategicScore(Number(e.target.value))
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Poor (1)</span>
                      <span>Average (3)</span>
                      <span>Excellent (5)</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Rate your strategic advantages, IP, barriers to entry, and
                      growth potential.
                    </p>
                  </div>
                </div>
              </div>

              {/* Specific Adjustments */}
              <div className="pt-6 border-t">
                <h3 className="text-lg font-medium mb-4">
                  Specific Multiple Adjustments
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label htmlFor="customerConcentration">
                      Customer Concentration
                    </Label>
                    <Input
                      id="customerConcentration"
                      type="range"
                      min={-1}
                      max={0.5}
                      step={0.1}
                      value={customerConcentration}
                      onChange={(e) =>
                        setCustomerConcentration(Number(e.target.value))
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>High Risk (-1.0)</span>
                      <span>Neutral (0)</span>
                      <span>Diverse (+0.5)</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="proprietaryProducts">
                      Proprietary Products/IP
                    </Label>
                    <Input
                      id="proprietaryProducts"
                      type="range"
                      min={-0.5}
                      max={1}
                      step={0.1}
                      value={proprietaryProducts}
                      onChange={(e) =>
                        setProprietaryProducts(Number(e.target.value))
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>None (-0.5)</span>
                      <span>Some (0)</span>
                      <span>Strong (+1.0)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-4">
                    <Label htmlFor="managementDepth">Management Depth</Label>
                    <Input
                      id="managementDepth"
                      type="range"
                      min={-0.75}
                      max={0.75}
                      step={0.1}
                      value={managementDepth}
                      onChange={(e) =>
                        setManagementDepth(Number(e.target.value))
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Owner-Dependent (-0.75)</span>
                      <span>Neutral (0)</span>
                      <span>Strong Team (+0.75)</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="growthRate">Growth Rate</Label>
                    <Input
                      id="growthRate"
                      type="range"
                      min={-0.5}
                      max={1}
                      step={0.1}
                      value={growthRate}
                      onChange={(e) => setGrowthRate(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Declining (-0.5)</span>
                      <span>Stable (0)</span>
                      <span>High Growth (+1.0)</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Valuation Methods Tab */}
            <TabsContent value="methods" className="space-y-6 pt-4">
              {/* Market Multiple Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Market Multiple Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Adjusted EBITDA</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(adjustedEbitda)}
                      </p>
                      <p className="text-xs text-gray-500">
                        EBITDA + Owner Adjustments
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Applied Multiple</p>
                      <p className="text-xl font-bold">
                        {adjustedMultiple.toFixed(2)}x
                      </p>
                      <p className="text-xs text-gray-500">
                        Base: {baseMultiple.toFixed(2)}x + Adjustments
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium">
                      Business Value (Multiple Method)
                    </p>
                    <p className="text-2xl font-bold text-blue-600">
                      {formatCurrency(businessValue)}
                    </p>
                    <p className="text-xs text-gray-500">
                      Adjusted EBITDA × Applied Multiple
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* DCF Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Discounted Cash Flow Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium">Growth Rate</p>
                      <p className="text-xl font-bold">
                        {projectedGrowthRate}%
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Discount Rate</p>
                      <p className="text-xl font-bold">{discountRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Projection Period</p>
                      <p className="text-xl font-bold">
                        {projectionYears} years
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium">
                      Business Value (DCF Method)
                    </p>
                    <p className="text-2xl font-bold text-blue-600">
                      {formatCurrency(dcfValue)}
                    </p>
                    <p className="text-xs text-gray-500">
                      Present value of projected cash flows + terminal value -
                      debt
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Asset-Based Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Asset-Based Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium">Tangible Assets</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(tangibleAssets)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Intangible Assets</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(intangibleAssets)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Total Liabilities</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(totalLiabilities)}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium">
                      Business Value (Asset Method)
                    </p>
                    <p className="text-2xl font-bold text-blue-600">
                      {formatCurrency(assetValue)}
                    </p>
                    <p className="text-xs text-gray-500">
                      Tangible Assets + Intangible Assets - Total Liabilities
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Valuation Range */}
              <Card className="bg-slate-50">
                <CardHeader>
                  <CardTitle>Valuation Range</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <p className="text-sm font-medium">Low Range</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(valuationRange.low)}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">Mid-Point Value</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {formatCurrency(valuationRange.mid)}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">High Range</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(valuationRange.high)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sensitivity Analysis Tab */}
            <TabsContent value="sensitivity" className="space-y-6 pt-4">
              <SensitivityAnalysis
                baseValue={businessValue || 0}
                adjustedEbitda={adjustedEbitda || 0}
                baseMultiple={adjustedMultiple || 0}
                formatCurrency={formatCurrency}
              />
            </TabsContent>

            {/* Results Tab */}
            <TabsContent value="results" className="space-y-6 pt-4">
              {/* Valuation Summary */}
              <Card className="bg-slate-50">
                <CardHeader>
                  <CardTitle>Valuation Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-sm font-medium">
                        Market Multiple Method
                      </p>
                      <p className="text-2xl font-bold">
                        {formatCurrency(businessValue)}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-sm font-medium">DCF Method</p>
                      <p className="text-2xl font-bold">
                        {formatCurrency(dcfValue)}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-sm font-medium">Asset-Based Method</p>
                      <p className="text-2xl font-bold">
                        {formatCurrency(assetValue)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4 text-center">
                      Estimated Business Value Range
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <p className="text-sm font-medium">Low Range</p>
                        <p className="text-xl font-bold">
                          {formatCurrency(valuationRange.low)}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">Mid-Point Value</p>
                        <p className="text-3xl font-bold text-blue-600">
                          {formatCurrency(valuationRange.mid)}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">High Range</p>
                        <p className="text-xl font-bold">
                          {formatCurrency(valuationRange.high)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Valuation Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm font-medium">Revenue</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(revenue)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Adjusted EBITDA</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(adjustedEbitda)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">EBITDA Margin</p>
                      <p className="text-xl font-bold">
                        {revenue > 0
                          ? ((adjustedEbitda / revenue) * 100).toFixed(1)
                          : 0}
                        %
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Applied Multiple</p>
                      <p className="text-xl font-bold">
                        {adjustedMultiple.toFixed(2)}x
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div>
                      <p className="text-sm font-medium">Value Driver Score</p>
                      <p className="text-xl font-bold">{valueDriverScore}/5</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Enterprise Value</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(valuationRange.mid + debt)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">EV/Revenue</p>
                      <p className="text-xl font-bold">
                        {revenue > 0
                          ? ((valuationRange.mid + debt) / revenue).toFixed(2)
                          : 0}
                        x
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">EV/EBITDA</p>
                      <p className="text-xl font-bold">
                        {adjustedEbitda > 0
                          ? (
                              (valuationRange.mid + debt) /
                              adjustedEbitda
                            ).toFixed(2)
                          : 0}
                        x
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lead Capture */}
              {showLeadForm ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Get Your Detailed Valuation Report</CardTitle>
                    <CardDescription>
                      Enter your email to receive a comprehensive valuation
                      report with detailed analysis.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={handleSubmitLead}>Send Report</Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="flex justify-center">
                  <Button onClick={() => setShowLeadForm(true)}>
                    Get Detailed Valuation Report
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row justify-between border-t pt-6 gap-4">
          <div className="text-sm text-gray-600">
            © 2025 Schapira CPA. This calculator provides an estimation only
            and should not be considered a formal valuation.
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleDownloadTool}
          >
            <Download size={16} />
            Download Full Valuation Tool
          </Button>
        </CardFooter>
      </Card>
      <Toaster />
    </div>
  );
}

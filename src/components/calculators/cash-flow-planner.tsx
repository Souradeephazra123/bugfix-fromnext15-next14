"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { CashFlowChart } from "./cash-flow-chart";
import { WorkingCapitalDashboard } from "./working-capital-dashboard";
import {
  AlertCircle,
  Download,
  FileText,
  Settings,
  HelpCircle,
} from "lucide-react";
import {
  calculateCashFlow,
  calculateWorkingCapital,
  exportToCsv,
  generatePdfReport,
} from "@/lib/cash-flow-utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Form schema definition
const formSchema = z.object({
  // General business information
  companyName: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Industry is required"),

  // Starting position
  startingCash: z.coerce.number().min(0, "Starting cash is required"),

  // Revenue projections
  monthlyRevenue: z.coerce.number().min(0, "Monthly revenue is required"),
  revenueGrowthRate: z.coerce.number().min(-100).max(1000),
  seasonalityPattern: z.string().optional(),

  // Manufacturing specific
  rawMaterialCost: z.coerce.number().min(0, "Raw material cost is required"),
  productionCycleLength: z.coerce
    .number()
    .min(1, "Production cycle length is required"),
  averageInventoryDays: z.coerce
    .number()
    .min(0, "Average inventory days is required"),

  // Expenses
  laborCost: z.coerce.number().min(0, "Labor cost is required"),
  overheadCost: z.coerce.number().min(0, "Overhead cost is required"),

  // Payment terms
  customerPaymentTerms: z.coerce
    .number()
    .min(0, "Customer payment terms are required"),
  supplierPaymentTerms: z.coerce
    .number()
    .min(0, "Supplier payment terms are required"),

  // Capital expenditures
  plannedCapitalExpenditures: z.boolean(),
  capexAmount: z.coerce.number().optional(),
  capexMonth: z.coerce.number().min(1).max(12).optional(),

  // Financing
  existingLoanPayments: z.coerce.number().default(0),
  additionalFinancing: z.boolean(),
  financingAmount: z.coerce.number().optional(),
  financingMonth: z.coerce.number().min(1).max(12).optional(),

  // Advanced options
  includeTaxes: z.boolean().default(true),
  estimatedTaxRate: z.coerce.number().min(0).max(100).default(21),
});

type FormValues = z.infer<typeof formSchema>;

export function CashFlowPlanner() {
  const [scenarios, setScenarios] = useState<{ [key: string]: any }>({
    "Base Scenario": null,
  });
  const [activeScenario, setActiveScenario] = useState("Base Scenario");
  const [cashFlowData, setCashFlowData] = useState<any>(null);
  const [workingCapitalData, setWorkingCapitalData] = useState<any>(null);
  const [calculationComplete, setCalculationComplete] = useState(false);
  const [activeTab, setActiveTab] = useState("inputs");
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  // Initialize form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      industry: "manufacturing",
      startingCash: 100000,
      monthlyRevenue: 200000,
      revenueGrowthRate: 1,
      seasonalityPattern: "none",
      rawMaterialCost: 80000,
      productionCycleLength: 30,
      averageInventoryDays: 45,
      laborCost: 50000,
      overheadCost: 30000,
      customerPaymentTerms: 30,
      supplierPaymentTerms: 15,
      plannedCapitalExpenditures: false,
      existingLoanPayments: 0,
      additionalFinancing: false,
      includeTaxes: true,
      estimatedTaxRate: 21,
    },
  });

  const watchPlannedCapex = form.watch("plannedCapitalExpenditures");
  const watchAdditionalFinancing = form.watch("additionalFinancing");

  // Calculate cash flow when form is submitted
  const onSubmit = (values: FormValues) => {
    const cashFlowResults = calculateCashFlow(values);
    const workingCapitalResults = calculateWorkingCapital(
      values,
      cashFlowResults
    );

    setCashFlowData(cashFlowResults);
    setWorkingCapitalData(workingCapitalResults);

    // Save current scenario
    setScenarios({
      ...scenarios,
      [activeScenario]: {
        formValues: values,
        cashFlowResults,
        workingCapitalResults,
      },
    });

    setCalculationComplete(true);
    setActiveTab("results");
  };

  // Create a new scenario
  const createNewScenario = () => {
    const scenarioName = `Scenario ${Object.keys(scenarios).length + 1}`;
    setScenarios({
      ...scenarios,
      [scenarioName]: null,
    });
    setActiveScenario(scenarioName);
  };

  // Handle scenario change
  const handleScenarioChange = (scenario: string) => {
    setActiveScenario(scenario);

    // Load scenario data if it exists
    if (scenarios[scenario] && scenarios[scenario].formValues) {
      form.reset(scenarios[scenario].formValues);
      setCashFlowData(scenarios[scenario].cashFlowResults);
      setWorkingCapitalData(scenarios[scenario].workingCapitalResults);
      setCalculationComplete(true);
    } else {
      // Reset form for new scenario
      form.reset();
      setCashFlowData(null);
      setWorkingCapitalData(null);
      setCalculationComplete(false);
      setActiveTab("inputs");
    }
  };

  // Export data
  const handleExport = (format: "csv" | "pdf") => {
    if (!cashFlowData) return;

    const data = {
      scenario: activeScenario,
      formValues: form.getValues(),
      cashFlowData,
      workingCapitalData,
    };

    if (format === "csv") {
      exportToCsv(data);
    } else {
      generatePdfReport(data);
    }
  };

  return (
    <FormProvider {...form}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
              Cash Flow Forecast Planner
            </h2>

            <div className="flex space-x-3">
              <Select
                value={activeScenario}
                onValueChange={handleScenarioChange}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select scenario" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(scenarios).map((scenario) => (
                    <SelectItem key={scenario} value={scenario}>
                      {scenario}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button onClick={createNewScenario} variant="outline">
                New Scenario
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="inputs">Inputs</TabsTrigger>
              <TabsTrigger value="results" disabled={!calculationComplete}>
                Results
              </TabsTrigger>
              <TabsTrigger
                value="working-capital"
                disabled={!calculationComplete}
              >
                Working Capital
              </TabsTrigger>
            </TabsList>

            <TabsContent value="inputs">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">
                          Business Information
                        </h3>

                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="ABC Manufacturing"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormLabel>Industry Segment</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select industry" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="manufacturing">
                                    General Manufacturing
                                  </SelectItem>
                                  <SelectItem value="automotive">
                                    Automotive
                                  </SelectItem>
                                  <SelectItem value="electronics">
                                    Electronics
                                  </SelectItem>
                                  <SelectItem value="food">
                                    Food Processing
                                  </SelectItem>
                                  <SelectItem value="medical">
                                    Medical Devices
                                  </SelectItem>
                                  <SelectItem value="textile">
                                    Textile
                                  </SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="startingCash"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormLabel>Starting Cash Position ($)</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">
                          Revenue Projections
                        </h3>

                        <FormField
                          control={form.control}
                          name="monthlyRevenue"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Average Monthly Revenue ($)</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="revenueGrowthRate"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormLabel>Monthly Growth Rate (%)</FormLabel>
                              <FormControl>
                                <Input type="number" step="0.1" {...field} />
                              </FormControl>
                              <FormDescription>
                                Projected month-over-month growth percentage
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="seasonalityPattern"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormLabel>Seasonality Pattern</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select pattern" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="none">
                                    No Seasonality
                                  </SelectItem>
                                  <SelectItem value="quarterly">
                                    Quarterly Peaks
                                  </SelectItem>
                                  <SelectItem value="summer">
                                    Summer Peak
                                  </SelectItem>
                                  <SelectItem value="winter">
                                    Winter Peak
                                  </SelectItem>
                                  <SelectItem value="holiday">
                                    Holiday Season Peak
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                Select a pattern that best matches your business
                                seasonality
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">
                          Capital & Financing
                        </h3>

                        <FormField
                          control={form.control}
                          name="plannedCapitalExpenditures"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                              <div className="space-y-0.5">
                                <FormLabel>
                                  Planned Capital Expenditures
                                </FormLabel>
                                <FormDescription>
                                  Major equipment purchases or facility
                                  improvements
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        {watchPlannedCapex && (
                          <div className="mt-4 pl-4 border-l-2 border-blue-200">
                            <FormField
                              control={form.control}
                              name="capexAmount"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>CapEx Amount ($)</FormLabel>
                                  <FormControl>
                                    <Input type="number" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="capexMonth"
                              render={({ field }) => (
                                <FormItem className="mt-4">
                                  <FormLabel>Planned Month (1-12)</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      min="1"
                                      max="12"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}

                        <FormField
                          control={form.control}
                          name="existingLoanPayments"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormLabel>Monthly Loan Payments ($)</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormDescription>
                                Total monthly payments for existing
                                loans/financing
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="additionalFinancing"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 mt-4">
                              <div className="space-y-0.5">
                                <FormLabel>
                                  Additional Financing Planned
                                </FormLabel>
                                <FormDescription>
                                  New loans or credit lines to be added
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        {watchAdditionalFinancing && (
                          <div className="mt-4 pl-4 border-l-2 border-blue-200">
                            <FormField
                              control={form.control}
                              name="financingAmount"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Financing Amount ($)</FormLabel>
                                  <FormControl>
                                    <Input type="number" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="financingMonth"
                              render={({ field }) => (
                                <FormItem className="mt-4">
                                  <FormLabel>Planned Month (1-12)</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      min="1"
                                      max="12"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">
                          Manufacturing-Specific Factors
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="ml-2 h-8 w-8 p-0"
                              >
                                <HelpCircle className="h-4 w-4" />
                                <span className="sr-only">Help</span>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="space-y-2">
                                <h4 className="font-medium">
                                  Manufacturing Cycle Planning
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  These factors significantly impact
                                  manufacturing cash flow. Production cycles
                                  create timing gaps between material purchases
                                  and revenue collection. Inventory days
                                  represent cash tied up in materials and
                                  finished goods.
                                </p>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </h3>

                        <FormField
                          control={form.control}
                          name="rawMaterialCost"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Monthly Raw Material Cost ($)
                              </FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormDescription>
                                Average monthly spending on materials
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="productionCycleLength"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormLabel>
                                Production Cycle Length (days)
                              </FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormDescription>
                                Time from material purchase to finished product
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="averageInventoryDays"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormLabel>Average Inventory Days</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormDescription>
                                Average days inventory is held before sale
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">
                          Operating Expenses
                        </h3>

                        <FormField
                          control={form.control}
                          name="laborCost"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Monthly Labor Cost ($)</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormDescription>
                                Includes direct and indirect labor
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="overheadCost"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormLabel>Monthly Overhead ($)</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormDescription>
                                Rent, utilities, insurance, etc.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">
                          Payment Terms
                        </h3>

                        <FormField
                          control={form.control}
                          name="customerPaymentTerms"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Customer Payment Terms (days)
                              </FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormDescription>
                                Average days until customer payment received
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="supplierPaymentTerms"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormLabel>
                                Supplier Payment Terms (days)
                              </FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormDescription>
                                Average days until supplier payment due
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="mt-4">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setShowAdvancedOptions(!showAdvancedOptions)
                          }
                          className="mb-4"
                        >
                          <Settings className="mr-2 h-4 w-4" />
                          {showAdvancedOptions ? "Hide" : "Show"} Advanced
                          Options
                        </Button>

                        {showAdvancedOptions && (
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">
                              Advanced Options
                            </h3>

                            <FormField
                              control={form.control}
                              name="includeTaxes"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                                  <div className="space-y-0.5">
                                    <FormLabel>Include Tax Estimates</FormLabel>
                                    <FormDescription>
                                      Factor in quarterly estimated tax payments
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="estimatedTaxRate"
                              render={({ field }) => (
                                <FormItem className="mt-4">
                                  <FormLabel>Estimated Tax Rate (%)</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      min="0"
                                      max="100"
                                      {...field}
                                      disabled={!form.watch("includeTaxes")}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Alert variant="outline" className="mt-6">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    <AlertTitle>Important Note</AlertTitle>
                    <AlertDescription>
                      This tool provides projections based on the information
                      you enter. Actual results may vary. For the most accurate
                      financial planning, we recommend consulting with a
                      manufacturing financial specialist.
                    </AlertDescription>
                  </Alert>

                  <div className="flex justify-end mt-6">
                    <Button type="submit" className="w-full md:w-auto">
                      Calculate Cash Flow Projection
                    </Button>
                  </div>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="results">
              {cashFlowData && (
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">
                      12-Month Cash Flow Projection
                    </h3>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleExport("csv")}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Export CSV
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleExport("pdf")}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Generate PDF
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <CashFlowChart data={cashFlowData} />
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">Key Insights</h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <p className="text-sm text-gray-500">
                          Lowest Cash Position
                        </p>
                        <p className="text-2xl font-bold text-red-600">
                          ${cashFlowData.lowestCash.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">
                          Month {cashFlowData.lowestCashMonth}
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border">
                        <p className="text-sm text-gray-500">
                          Highest Cash Position
                        </p>
                        <p className="text-2xl font-bold text-green-600">
                          ${cashFlowData.highestCash.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">
                          Month {cashFlowData.highestCashMonth}
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border">
                        <p className="text-sm text-gray-500">
                          End of Year Position
                        </p>
                        <p className="text-2xl font-bold text-blue-600">
                          ${cashFlowData.endingCash.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">
                          {cashFlowData.cashGrowth > 0 ? "+" : ""}
                          {cashFlowData.cashGrowth}% from start
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h5 className="font-semibold mb-2">Recommendations</h5>
                      <ul className="list-disc pl-5 space-y-2">
                        {cashFlowData.recommendations.map(
                          (rec: string, index: number) => (
                            <li key={index}>{rec}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-4">
                      Monthly Cash Flow Details
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Month
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Cash In
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Cash Out
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Net Flow
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Ending Position
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {cashFlowData.monthlyData.map(
                            (month: any, index: number) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  Month {month.month}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  ${month.cashIn.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  ${month.cashOut.toLocaleString()}
                                </td>
                                <td
                                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                                    month.netFlow >= 0
                                      ? "text-green-600"
                                      : "text-red-600"
                                  }`}
                                >
                                  ${month.netFlow.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                  ${month.endingCash.toLocaleString()}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="working-capital">
              {workingCapitalData && (
                <WorkingCapitalDashboard data={workingCapitalData} />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </FormProvider>
  );
}
